import { BlogPost } from "@/lib/types";
import { Language } from "@/contexts/LanguageContext";

// Helper function to load all markdown files from content/blog directory with language support
async function loadMarkdownFiles(language: Language = 'en') {
  try {
    console.log(`Attempting to load markdown files for language: ${language}...`);
    
    // Use import.meta.glob to load all markdown files from the language-specific subdirectories
    const modules = import.meta.glob('/src/content/blog/**/*.md', { eager: true, as: 'raw' });
    console.log("Found markdown files:", Object.keys(modules).length);
    
    if (Object.keys(modules).length === 0) {
      console.warn("No markdown files found in the content/blog directory");
      return [];
    }
    
    const posts: BlogPost[] = Object.entries(modules)
      .filter(([path]) => {
        // Filter to only include files that match the language pattern
        // Expected path: /src/content/blog/<post-name>/<language>.md
        const pathParts = path.split('/');
        const fileName = pathParts[pathParts.length - 1]; // e.g., "en.md"
        const expectedLanguageFile = `${language}.md`;
        return fileName === expectedLanguageFile;
      })
      .map(([path, content]: [string, string]) => {
        console.log("Processing file:", path);
        
        // Extract the post directory name for slug
        // Path format: /src/content/blog/<post-name>/<language>.md
        const pathParts = path.split('/');
        const postDirectory = pathParts[pathParts.length - 2]; // Get the post directory name
        const slug = postDirectory;
        
        // Initialize with default values
        let title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        let author = 'Juan Herreros'; // Default author
        let date = new Date().toISOString(); // Default to current date in ISO format
        let excerpt = '';
        let tags: string[] = [];
        
        // Try to parse frontmatter
        const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        
        if (frontmatterMatch) {
          const [_, frontmatterStr, contentBody] = frontmatterMatch;
          
          // Parse frontmatter
          frontmatterStr.split('\n').forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length > 0) {
              const value = valueParts.join(':').trim();
              if (key.trim() === 'title') title = value;
              if (key.trim() === 'author') author = value;
              if (key.trim() === 'date') {
                // Ensure date is in ISO format for consistency
                try {
                  // Remove any quotes if present
                  const cleanValue = value.replace(/["']/g, '').trim();
                  // If it's already a valid date string, use it
                  if (/^\d{4}-\d{2}-\d{2}/.test(cleanValue)) {
                    // Add time component if not present
                    date = cleanValue.includes('T') ? cleanValue : `${cleanValue}T00:00:00Z`;
                  } else {
                    // Otherwise use current date
                    console.warn("Invalid date format, using current date as fallback:", cleanValue);
                    date = new Date().toISOString();
                  }
                } catch (e) {
                  console.error("Invalid date format:", value);
                  date = new Date().toISOString();
                }
              }
              if (key.trim() === 'excerpt') excerpt = value;
              if (key.trim() === 'tags') {
                try {
                  // Log the raw tags value for debugging
                  console.log(`Raw tags value for ${title}:`, value);
                  
                  // Parse the tags based on the format in the markdown files
                  if (value) {
                    // Check if the tags are in YAML array format
                    if (value.trim().startsWith('[') && value.trim().endsWith(']')) {
                      // Parse YAML array format: [tag1, tag2, tag3]
                      const tagsString = value.trim().slice(1, -1);
                      tags = tagsString
                        .split(',')
                        .map(tag => tag.trim().replace(/["']/g, ''))
                        .filter(tag => tag);
                    } else {
                      // Parse simple list format (indented with - or *)
                      // First, split by line if it contains newlines
                      const tagLines = value.includes('\n') 
                        ? value.split('\n')
                        : [value];
                      
                      // Process each line
                      tags = tagLines
                        .map(line => {
                          // Remove leading dash, star or whitespace
                          return line.trim().replace(/^[-*]\s*/, '').replace(/["']/g, '');
                        })
                        .filter(tag => tag);
                      
                      // If we still don't have tags, try splitting by comma (simple comma-separated list)
                      if (tags.length === 0 || (tags.length === 1 && tags[0].includes(','))) {
                        tags = value
                          .split(',')
                          .map(tag => tag.trim().replace(/["']/g, ''))
                          .filter(tag => tag);
                      }
                    }
                  }
                  console.log(`Parsed tags for ${title}:`, tags);
                } catch (e) {
                  console.error("Failed to parse tags:", value, e);
                  tags = [];
                }
              }
            }
          });
          
          // Use the content after frontmatter
          content = contentBody;
        }
        
        // Extract excerpt from content if not set
        if (!excerpt && content) {
          // Extract the first paragraph that's not empty and not a heading
          const paragraphs = content
            .split('\n\n')
            .filter(p => p.trim() && !p.trim().startsWith('#'));
          
          if (paragraphs.length > 0) {
            excerpt = paragraphs[0].substring(0, 150).trim();
            if (excerpt.length >= 150) excerpt += '...';
          }
        }
        
        const post: BlogPost = {
          id: slug,
          title,
          slug,
          date,
          author,
          excerpt: excerpt || 'No excerpt available',
          content: content || 'No content available',
          tags: tags
        };
        
        console.log(`Processed post: ${post.title} (${post.slug}), date: ${post.date}, tags: ${post.tags.length > 0 ? post.tags.join(', ') : 'no tags'}`);
        return post;
      });

    console.log(`Successfully processed markdown posts for ${language}:`, posts.length);
    return posts;
  } catch (error) {
    console.error(`Error loading markdown files for language ${language}:`, error);
    console.error("Error details:", error instanceof Error ? error.message : String(error));
    return [];
  }
}

// Helper function to check if a post exists in a specific language
async function checkPostExistsInLanguage(slug: string, language: Language): Promise<boolean> {
  try {
    const modules = import.meta.glob('/src/content/blog/**/*.md', { eager: true, as: 'raw' });
    const expectedPath = `/src/content/blog/${slug}/${language}.md`;
    return expectedPath in modules;
  } catch (error) {
    console.error(`Error checking if post ${slug} exists in language ${language}:`, error);
    return false;
  }
}

export async function getAllPosts(language: Language = 'en'): Promise<BlogPost[]> {
  try {
    console.log(`Getting all blog posts for language: ${language}...`);
    
    // Only load posts from markdown files for the specified language
    const markdownPosts = await loadMarkdownFiles(language);
    console.log(`Loaded markdown posts for ${language}:`, markdownPosts.length);
    
    // Sort posts by date, newest first
    return markdownPosts.sort((a, b) => {
      // Safely compare dates (if invalid, push to the end)
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      const isValidA = !isNaN(dateA.getTime());
      const isValidB = !isNaN(dateB.getTime());
      
      if (!isValidA && !isValidB) return 0;
      if (!isValidA) return 1;
      if (!isValidB) return -1;
      
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error(`Error in getAllPosts for language ${language}:`, error);
    return [];
  }
}

export async function getPostBySlug(slug: string, language: Language = 'en'): Promise<BlogPost | undefined> {
  try {
    console.log(`Getting post by slug: ${slug} for language: ${language}`);
    
    // First, check if the post exists in the requested language
    const existsInLanguage = await checkPostExistsInLanguage(slug, language);
    
    if (!existsInLanguage) {
      console.log(`Post ${slug} not found in language ${language}, trying fallback to English`);
      
      // If not found in requested language, try English as fallback
      if (language !== 'en') {
        const existsInEnglish = await checkPostExistsInLanguage(slug, 'en');
        if (existsInEnglish) {
          console.log(`Post ${slug} found in English, using as fallback`);
          const englishPosts = await loadMarkdownFiles('en');
          return englishPosts.find(post => post.slug === slug);
        }
      }
      
      console.log(`Post ${slug} not found in any language`);
      return undefined;
    }
    
    // Load posts for the requested language and find the matching slug
    const posts = await loadMarkdownFiles(language);
    return posts.find(post => post.slug === slug);
  } catch (error) {
    console.error(`Error finding post with slug ${slug} in language ${language}:`, error);
    return undefined;
  }
}

export async function getRecentPosts(count: number = 3, language: Language = 'en'): Promise<BlogPost[]> {
  try {
    const posts = await getAllPosts(language);
    // Posts are already sorted by date in getAllPosts, so we just need to take the first 'count' posts
    return posts.slice(0, count);
  } catch (error) {
    console.error(`Error getting recent posts for language ${language}:`, error);
    return [];
  }
}

// Utility function to get available languages for a specific post
export async function getAvailableLanguagesForPost(slug: string): Promise<Language[]> {
  try {
    const modules = import.meta.glob('/src/content/blog/**/*.md', { eager: true, as: 'raw' });
    const availableLanguages: Language[] = [];
    
    const languages: Language[] = ['en', 'es', 'da'];
    
    for (const lang of languages) {
      const expectedPath = `/src/content/blog/${slug}/${lang}.md`;
      if (expectedPath in modules) {
        availableLanguages.push(lang);
      }
    }
    
    return availableLanguages;
  } catch (error) {
    console.error(`Error getting available languages for post ${slug}:`, error);
    return [];
  }
}
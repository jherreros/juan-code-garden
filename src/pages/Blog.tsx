import { BlogList } from "@/components/blog/BlogList";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { BlogPost } from "@/lib/types";
import { getAllPosts } from "@/lib/blog";
import { toast } from "@/components/ui/sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/lib/translations";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  useEffect(() => {
    async function loadPosts() {
      try {
        console.log(`Loading blog posts for language: ${language}...`);
        setIsLoading(true);
        const allPosts = await getAllPosts(language);
        console.log("Loaded posts:", allPosts.length);
        
        setPosts(allPosts || []); // Ensure we always have an array even if empty
      } catch (error) {
        console.error("Failed to load posts:", error);
        toast.error("Failed to load blog posts");
      } finally {
        setIsLoading(false);
      }
    }
    
    loadPosts();
  }, [language]); // Re-load posts when language changes
  
  // Filter posts based on search query - add null checks to prevent errors
  const filteredPosts = posts.filter(post => 
    post && 
    (
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post?.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post?.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post?.author?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Add debug log to see filtered posts
  console.log("Filtered posts:", filteredPosts);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-6 text-primary">{t('blog')}</h1>
        <p className="text-foreground mb-6">
          {t('thoughtsAndInsights')}
        </p>
        
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      
      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border rounded-lg p-6 animate-pulse">
              <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-muted rounded w-full mb-2"></div>
              <div className="h-4 bg-muted rounded w-full mb-2"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          ))}
        </div>
      ) : filteredPosts.length > 0 ? (
        <BlogList posts={filteredPosts} />
      ) : (
        <div className="text-center py-12">
          <p className="text-foreground">{t('noPostsFound')}</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
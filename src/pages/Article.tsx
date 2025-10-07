import { PageBanner } from "@/components/PageBanner";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  image_url?: string;
  author_id?: string;
  created_at: string;
}

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error) throw error;

        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div>
        <PageBanner title="" />
        <div className="container mx-auto px-4 py-12">
          <div className="h-96 bg-muted animate-pulse rounded-lg" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <PageBanner title="Post not found" />
        <div className="container mx-auto px-4 py-12 text-center">
          <p>The post you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageBanner title={post.title} imageUrl={post.image_url || "/placeholder.svg"} />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;

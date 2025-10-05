import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image_url: string | null;
  rating: number | null;
  reviews_count: number | null;
  stock: number;
}

export const ProductCard = ({ id, name, price, image_url, rating, reviews_count, stock }: ProductCardProps) => {
  const { user } = useAuth();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkWishlist = async () => {
      if (!user) return;

      const { data } = await supabase
        .from("wishlist")
        .select("id")
        .eq("user_id", user.id)
        .eq("product_id", id)
        .maybeSingle();

      if (data) {
        setIsWishlisted(true);
      }
    };

    checkWishlist();
  }, [user, id]);

  const addToCart = async () => {
    if (!user) {
      toast.error("Please sign in to add items to cart");
      return;
    }

    setLoading(true);
    try {
      const { data: existing } = await supabase
        .from("cart_items")
        .select("*")
        .eq("user_id", user.id)
        .eq("product_id", id)
        .maybeSingle();

      if (existing) {
        await supabase
          .from("cart_items")
          .update({ quantity: existing.quantity + 1 })
          .eq("id", existing.id);
      } else {
        await supabase
          .from("cart_items")
          .insert({ user_id: user.id, product_id: id, quantity: 1 });
      }
      
      toast.success("Added to cart!");
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      toast.error("Failed to add to cart");
    } finally {
      setLoading(false);
    }
  };

  const toggleWishlist = async () => {
    if (!user) {
      toast.error("Please sign in to add to wishlist");
      return;
    }

    try {
      if (isWishlisted) {
        await supabase
          .from("wishlist")
          .delete()
          .eq("user_id", user.id)
          .eq("product_id", id);
        setIsWishlisted(false);
        toast.success("Removed from wishlist");
      } else {
        await supabase
          .from("wishlist")
          .insert({ user_id: user.id, product_id: id });
        setIsWishlisted(true);
        toast.success("Added to wishlist");
      }
    } catch (error) {
      toast.error("Failed to update wishlist");
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <Link to={`/product/${id}`}>
          <div className="relative aspect-square overflow-hidden bg-muted">
            {image_url ? (
              <img
                src={image_url}
                alt={name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No image
              </div>
            )}
            {stock === 0 && (
              <Badge variant="destructive" className="absolute top-2 right-2">
                Out of Stock
              </Badge>
            )}
          </div>
        </Link>

        <div className="p-4 space-y-2">
          <Link to={`/product/${id}`}>
            <h3 className="font-semibold hover:text-primary transition-colors line-clamp-2">
              {name}
            </h3>
          </Link>

          <div className="flex items-center space-x-1 text-sm">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-medium">{rating || 0}</span>
            <span className="text-muted-foreground">({reviews_count || 0})</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-2xl font-bold text-primary">
              ${price.toFixed(2)}
            </span>

            <div className="flex space-x-2">
              <Button
                size="icon"
                variant="outline"
                onClick={toggleWishlist}
                className="hover:text-destructive"
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-destructive text-destructive' : ''}`} />
              </Button>
              
              <Button
                size="sm"
                onClick={addToCart}
                disabled={stock === 0 || loading}
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

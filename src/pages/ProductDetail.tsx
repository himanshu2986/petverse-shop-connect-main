import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Minus, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { PageBanner } from "@/components/PageBanner";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*, categories(*)")
        .eq("id", id)
        .single();

      if (error) throw error;
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
      toast.error("Product not found");
      navigate("/shop");
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async () => {
    if (!user) {
      toast.error("Please sign in to add items to cart");
      navigate("/auth");
      return;
    }

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
          .update({ quantity: existing.quantity + quantity })
          .eq("id", existing.id);
      } else {
        await supabase
          .from("cart_items")
          .insert({ user_id: user.id, product_id: id, quantity });
      }

      toast.success("Added to cart!");
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      toast.error("Failed to add to cart");
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-96 bg-muted rounded-lg" />
          <div className="h-8 bg-muted rounded w-1/2" />
          <div className="h-4 bg-muted rounded w-1/4" />
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div>
      <PageBanner title={product.name} imageUrl={product.image_url || '/placeholder.svg'} />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
            {product.image_url ? (
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No image available
              </div>
            )}
            {product.stock === 0 && (
              <Badge variant="destructive" className="absolute top-4 right-4 text-lg px-4 py-2">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.categories?.name}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating || 0)
                          ? "fill-primary text-primary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  ({product.reviews_count || 0} reviews)
                </span>
              </div>

              <div className="text-4xl font-bold text-primary mb-6">
                ₹{product.price.toFixed(2)}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4 border-t pt-6">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.stock} available
                </span>
              </div>

              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={addToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Category:</span>
                <span className="font-medium">{product.categories?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Stock Status:</span>
                <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
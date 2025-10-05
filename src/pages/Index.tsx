import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Dog, Cat, Bird, Rabbit } from "lucide-react";

const Index = () => {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_featured", true)
        .limit(4);

      if (error) throw error;
      setFeaturedProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { name: "Dogs", slug: "dogs", icon: Dog, color: "text-primary" },
    { name: "Cats", slug: "cats", icon: Cat, color: "text-secondary" },
    { name: "Birds", slug: "birds", icon: Bird, color: "text-accent" },
    { name: "Small Pets", slug: "small-pets", icon: Rabbit, color: "text-primary" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative banner h-[600px]">
        <div className="container mx-auto px-4 h-full">
          <div className="grid md:grid-cols-2 gap-8 h-full items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Everything Your Pet Needs
              </h1>
              <p className="text-xl text-muted-foreground">
                Premium products for your furry, feathered, and scaly friends. Quality care they deserve, love you can trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop">
                  <Button size="lg" className="text-lg">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/shop?featured=true">
                  <Button size="lg" variant="outline" className="text-lg">
                    View Deals
                  </Button>
                </Link>
              </div>
            </div>
            <div className="h-full">
              
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/shop?category=${category.slug}`}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border">
                  <category.icon className={`h-16 w-16 mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/shop">
              <Button variant="ghost">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-96 bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold">Join the PetVerse Family</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Get exclusive deals, pet care tips, and early access to new products. Sign up today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg w-full sm:w-96 text-foreground"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

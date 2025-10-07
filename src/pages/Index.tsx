import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { ArrowRight, Dog, Cat, ShieldCheck, Truck, Users, PawPrint, Heart } from "lucide-react";

const Index = () => {
  const categories = [
    { name: "Dogs", slug: "dogs", icon: Dog, color: "text-primary" },
    { name: "Cats", slug: "cats", icon: Cat, color: "text-secondary" },
    { name: "Trained Dogs", slug: "trained-dogs", icon: PawPrint, color: "text-secondary" },
    { name: "Pets Medicines", slug: "pets-medicines", icon: Heart, color: "text-accent" },
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
      <FeaturedProducts />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
                      <h2 className="text-3xl font-bold text-center mb-12">Why Choose PetVerse?</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">              <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">We source only the best products for your pets, ensuring their health and happiness.</p>
            </div>
            <div className="text-center p-6">
              <Truck className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground">Get your pet's favorites delivered to your door with our reliable and speedy shipping.</p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">Our team of pet lovers is here to help you with any questions you may have.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rescue Program Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Rescue Program</h2>
              <p className="text-lg text-muted-foreground">
                We are dedicated to rescuing, treating, and rehoming animals in need. Our team works tirelessly to provide a safe haven for stray and abandoned animals, giving them a chance to find a loving forever home.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-primary">20+</p>
                  <p className="text-muted-foreground">Animals Rescued</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">10</p>
                  <p className="text-muted-foreground">Adoptions</p>
                </div>
              </div>
              <Link to="/rescue-program">
                <Button size="lg" className="mt-4">
                  <Heart className="mr-2 h-5 w-5" />
                  Learn More About Our Rescue Efforts
                </Button>
              </Link>
            </div>
            <div>
              <img src="/assets/rescue 2.jpg" alt="A rescued animal" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Rescue Dogs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:order-2">
              <h2 className="text-4xl font-bold">Find Your New Best Friend: Adopt a Rescue Dog</h2>
              <p className="text-lg text-muted-foreground">
                Ready to open your heart and home to a deserving dog? Our rescue dogs are waiting for a second chance at a happy life. Each one has a unique story and a lot of love to give.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-muted-foreground">Dogs Available for Adoption</p>
                </div>
              </div>
              <Link to="/rescue-dogs">
                <Button size="lg" className="mt-4">
                  <PawPrint className="mr-2 h-5 w-5" />
                  Meet Our Rescue Dogs
                </Button>
              </Link>
            </div>
            <div className="md:order-1">
              <img src="/assets/rescue 1.jpg" alt="A happy rescue dog" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
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
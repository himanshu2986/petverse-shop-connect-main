import { PawPrint } from "lucide-react";

const Aboutus = () => {
  return (
    <div className="bg-background text-foreground">
      <header className="relative bg-primary text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About PetVerse</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Connecting pet lovers with the best products and services for their beloved companions.
          </p>
        </div>
      </header>

      <main className="py-16">
        <div className="container mx-auto px-4">
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At PetVerse, our mission is to create a seamless and joyful shopping experience for pet owners. We believe that every pet deserves the best, and we are dedicated to providing high-quality products, from nutritious food to fun toys and comfortable habitats.
              </p>
              <p className="text-muted-foreground">
                We are a team of passionate pet lovers who understand the special bond between humans and animals. That's why we carefully curate our collection to ensure that every item we offer meets the highest standards of quality, safety, and fun.
              </p>
            </div>
            <div className="flex justify-center">
              <PawPrint className="h-48 w-48 text-primary opacity-20" />
            </div>
          </section>

          <section className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
                <p className="text-muted-foreground">
                  We source from trusted brands to ensure your pet gets only the best.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-muted-foreground">
                  Our team is always here to help you with any questions you may have.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground">
                  Get your pet's favorites delivered to your door in no time.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Aboutus ;

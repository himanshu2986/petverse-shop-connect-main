import { Mail, Phone, MapPin } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";

const ContactUs = () => {
  return (
    <div className="bg-background text-foreground">
      <PageBanner title="Contact Us" imageUrl="/assets/cat-toy.jpg" />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <section className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full px-3 py-2 bg-card border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full px-3 py-2 bg-card border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">Message</label>
                  <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-card border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                </div>
                <button type="submit" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <span>support@petverse.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <span>+91 88945xxxxx</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <span>123 Pet Street, Animal City, 12345</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
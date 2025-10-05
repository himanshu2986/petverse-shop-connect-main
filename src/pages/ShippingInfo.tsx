import { Truck, Package, Calendar } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";

const ShippingInfo = () => {
  return (
    <div className="bg-background text-foreground">
      <PageBanner title="Shipping Information" imageUrl="/placeholder.svg" />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Shipping Policies</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-card p-6 rounded-lg shadow-sm flex items-start">
                <Truck className="h-10 w-10 text-primary mr-6 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Shipping Rates & Speeds</h3>
                  <p className="text-muted-foreground">
                    We offer flat-rate shipping for all orders. Standard shipping typically takes 3-5 business days. Expedited options are available at checkout for an additional fee.
                  </p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm flex items-start">
                <Package className="h-10 w-10 text-primary mr-6 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Order Processing</h3>
                  <p className="text-muted-foreground">
                    Orders are processed within 1-2 business days. You will receive a confirmation email with tracking information once your order has shipped.
                  </p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm flex items-start">
                <Calendar className="h-10 w-10 text-primary mr-6 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Shipping Holidays</h3>
                  <p className="text-muted-foreground">
                    Please note that our shipping carriers do not operate on major holidays. Orders placed on these days will be processed the following business day.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ShippingInfo;
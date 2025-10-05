import { Undo2, ShieldCheck, Mail } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";

const ReturnPolicy = () => {
  return (
    <div className="bg-background text-foreground">
      <PageBanner title="Return Policy" imageUrl="/placeholder.svg" />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Promise</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-card p-6 rounded-lg shadow-sm flex items-start">
                <Undo2 className="h-10 w-10 text-primary mr-6 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">30-Day Returns</h3>
                  <p className="text-muted-foreground">
                    We accept returns on most items within 30 days of delivery. The product must be in its original packaging and in new, unused condition. Some exclusions, like perishable goods, may apply.
                  </p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm flex items-start">
                <ShieldCheck className="h-10 w-10 text-primary mr-6 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Damaged or Defective Items</h3>
                  <p className="text-muted-foreground">
                    If you receive a damaged or defective item, please contact us immediately. We will arrange for a replacement or a full refund at no cost to you.
                  </p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm flex items-start">
                <Mail className="h-10 w-10 text-primary mr-6 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">How to Initiate a Return</h3>
                  <p className="text-muted-foreground">
                    To start a return, please email our support team at support@petverse.com with your order number and the reason for the return. We will provide you with further instructions.
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

export default ReturnPolicy;
import { PawPrint } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";

const TermsAndConditions = () => {
  return (
    <div className="bg-background text-foreground">
      <PageBanner title="Terms and Conditions" imageUrl="/placeholder.svg" />

      <main className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">1. Overview</h2>
            <p className="text-muted-foreground">
              Welcome to <strong>PetVerse</strong>. By accessing our website, you agree to follow
              these Terms and Conditions. These terms outline your rights and obligations when using
              our platform and services.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">2. Use of the Website</h2>
            <p className="text-muted-foreground">
              You agree to use PetVerse only for lawful purposes and in a way that does not harm,
              restrict, or interfere with other users. Unauthorized use of the website or its
              content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">3. Accounts and Security</h2>
            <p className="text-muted-foreground">
              If you create an account on PetVerse, you are responsible for maintaining the
              confidentiality of your login details and for all activities under your account.
              Please notify us immediately if you suspect unauthorized use.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">4. Orders and Payments</h2>
            <p className="text-muted-foreground">
              All prices are displayed in INR and may include applicable taxes. We reserve the right
              to refuse or cancel any order if fraud or unauthorized activity is suspected. Payment
              information is processed securely through trusted third-party gateways.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">5. Returns & Refunds</h2>
            <p className="text-muted-foreground">
              Returns, replacements, and refunds are handled in accordance with our Return Policy.
              Please review that document before making a purchase decision.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content, logos, designs, and trademarks displayed on PetVerse are owned by us or
              our partners. You may not reproduce or redistribute any content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              PetVerse is not responsible for any indirect, incidental, or consequential damages
              resulting from your use of the site or products. Use our services at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">8. Changes to These Terms</h2>
            <p className="text-muted-foreground">
              We may update these Terms from time to time. Continued use of our website means you
              accept the updated version posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground">
              Have questions about these Terms and Conditions? Reach us anytime at{" "}
              <strong>support@petverse.com</strong>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
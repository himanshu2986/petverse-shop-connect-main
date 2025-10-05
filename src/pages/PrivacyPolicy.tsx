import { PawPrint } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background text-foreground">
      <PageBanner title="Privacy Policy" imageUrl="/placeholder.svg" />

      <main className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to <strong>PetVerse</strong> (“we”, “our”, “us”). This Privacy Policy
              explains how we collect, use, and protect your personal information when you visit
              or make a purchase from our website.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">2. Information We Collect</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email, phone number, billing/shipping
                address, and payment details (processed securely through payment gateways).
              </li>
              <li>
                <strong>Non-Personal Information:</strong> Browser type, device info, IP address,
                and browsing behavior via cookies.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Process and deliver your orders</li>
              <li>Improve website functionality and user experience</li>
              <li>Communicate updates, offers, and customer support</li>
              <li>Ensure security, fraud prevention, and compliance</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">4. Data Protection</h2>
            <p className="text-muted-foreground mb-4">
              We use SSL encryption and industry-standard security to keep your data safe. Payment
              information is processed securely by trusted third-party gateways and not stored on
              our servers.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">5. Your Rights</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Request access or deletion of your personal data</li>
              <li>Opt out of marketing communications anytime</li>
              <li>Control cookie preferences through your browser settings</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">6. Third-Party Services</h2>
            <p className="text-muted-foreground mb-4">
              We may share limited data with analytics, payment processors, or shipping partners
              as needed to complete transactions or improve our services.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">7. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy periodically. Any updates will be posted here with
              a revised “Last Updated” date. Continued use of our services means you accept those
              changes.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about our Privacy Policy or data practices, please contact us at:{" "}
              <strong>support@petverse.com</strong>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
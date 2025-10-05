import { PawPrint } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";

const CookiesPolicy = () => {
  return (
    <div className="bg-background text-foreground">
      <PageBanner title="Cookies Policy" imageUrl="/placeholder.svg" />

      <main className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">1. What Are Cookies?</h2>
            <p className="text-muted-foreground">
              Cookies are small text files placed on your device to help websites function
              efficiently and provide analytical information. They do not contain personal data but
              help us improve your browsing experience.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">2. How We Use Cookies</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Keep you signed in and remember your preferences.</li>
              <li>Analyze how you use our website to improve design and usability.</li>
              <li>Deliver personalized recommendations and promotional content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">3. Types of Cookies We Use</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Necessary for website functionality such as
                checkout and login.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Collect anonymous data to measure website
                performance and traffic.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to show you relevant offers or ads (if
                applicable).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">4. Managing Cookies</h2>
            <p className="text-muted-foreground">
              You can adjust cookie settings through your browser at any time. Disabling cookies may
              affect how some parts of the website function, including your shopping experience.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">5. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update our Cookies Policy periodically. Any updates will be posted here with a
              new “Last Updated” date. We encourage you to review this page occasionally.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground">
              Questions about cookies or data usage? Reach us anytime at{" "}
              <strong>support@petverse.com</strong>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CookiesPolicy;
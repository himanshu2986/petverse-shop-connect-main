import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Subscriptions = () => {
  return (
    <div>
      <PageBanner title="Subscribe & Save" />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Never Run Out of Pet Supplies Again</h2>
          <p className="text-lg text-muted-foreground">
            Save time and money with our convenient subscription service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Save 5% on Every Order</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get a discount on all your subscription orders.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Set Your Own Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Choose a delivery frequency that works for you.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Cancel Anytime</CardTitle>
            </CardHeader>
            <CardContent>
              <p>No commitment. No hidden fees.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link to="/shop">
            <Button size="lg">Shop Subscription-Eligible Products</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;

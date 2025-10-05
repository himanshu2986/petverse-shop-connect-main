import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GiftCards = () => {
  return (
    <div>
      <PageBanner title="Gift Cards" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Purchase a Gift Card</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" type="number" placeholder="Enter amount" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipient-email">Recipient's Email</Label>
                  <Input id="recipient-email" type="email" placeholder="Enter recipient's email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sender-name">Your Name</Label>
                  <Input id="sender-name" placeholder="Enter your name" />
                </div>
                <Button type="submit" className="w-full">Purchase</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Redeem a Gift Card</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="gift-card-code">Gift Card Code</Label>
                  <Input id="gift-card-code" placeholder="Enter your gift card code" />
                </div>
                <Button type="submit" className="w-full">Redeem</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;

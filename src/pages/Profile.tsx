import { PageBanner } from "@/components/PageBanner";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Heart, User as UserIcon } from "lucide-react";

const Profile = () => {
  const { user, signOut, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <PageBanner title="My Profile" />
        <div className="container mx-auto px-4 py-8">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <PageBanner title="My Profile" />
        <div className="container mx-auto px-4 py-8 text-center">
          <p>
            You are not logged in. Please{" "}
            <Link to="/auth" className="text-primary hover:underline">
              log in
            </Link>{" "}
            to see your profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageBanner title="My Profile" imageUrl="/assets/hero-pets.jpg" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={user.user_metadata?.avatar_url} />
                  <AvatarFallback>
                    {user.user_metadata?.full_name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{user.user_metadata?.full_name}</CardTitle>
                <p className="text-muted-foreground">{user.email}</p>
              </CardHeader>
              <CardContent className="p-4">
                <Button onClick={signOut} variant="destructive" className="w-full">
                  Sign Out
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Account Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <UserIcon className="w-5 h-5 mr-3 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">{user.user_metadata?.full_name}</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center">
                  <p className="text-sm text-muted-foreground">Email Address</p>
                  <p className-="font-medium">{user.email}</p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Shipping Address
                  </p>
                  <p className="font-medium">
                    {user.user_metadata?.address || "No address set"}
                  </p>
                </div>
                <Separator />
                <div className="flex justify-around pt-4">
                  <Link to="/orders">
                    <Button variant="outline">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      My Orders
                    </Button>
                  </Link>
                  <Link to="/wishlist">
                    <Button variant="outline">
                      <Heart className="w-5 h-5 mr-2" />
                      My Wishlist
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, User, Search, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (user) {
      fetchCartCount();
    } else {
      setCartCount(0);
    }
  }, [user]);

  const fetchCartCount = async () => {
    if (!user) return;
    const { data } = await supabase
      .from("cart_items")
      .select("quantity")
      .eq("user_id", user.id);
    
    const total = data?.reduce((sum, item) => sum + item.quantity, 0) || 0;
    setCartCount(total);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">PetVerse</span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="flex w-full">
              <Input
                type="search"
                placeholder="Search for products..."
                className="rounded-r-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="rounded-l-none">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/shop">
              <Button variant="ghost">Shop</Button>
            </Link>
            <Link to="/blog">
              <Button variant="ghost">Blog</Button>
            </Link>
            <Link to="/rescue-dogs">
              <Button variant="ghost">Rescue Dogs</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About Us</Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost">Contact Us</Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">More</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => navigate("/shipping")}>
                  Shipping Info
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/returns")}>
                  Return Policy
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/rescue-program")}>
                  Rescue Program
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/trained-dogs")}>
                  Trained Dogs
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {user ? (
              <>
                <Link to="/wishlist" className="relative">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                </Link>

                <Link to="/cart" className="relative">
                  <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {cartCount}
                      </Badge>
                    )}
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={signOut}>
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Link to="/auth">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
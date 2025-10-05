import { PageBanner } from "@/components/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stores = [
  {
    id: 1,
    name: "PetVerse Downtown",
    address: "123 Main St, Anytown, USA",
    hours: "9:00 AM - 9:00 PM",
    lat: 34.052235,
    lng: -118.243683,
  },
  {
    id: 2,
    name: "PetVerse Uptown",
    address: "456 Oak Ave, Anytown, USA",
    hours: "10:00 AM - 8:00 PM",
    lat: 34.062235,
    lng: -118.253683,
  },
  {
    id: 3,
    name: "PetVerse Suburbia",
    address: "789 Pine Ln, Anytown, USA",
    hours: "10:00 AM - 7:00 PM",
    lat: 34.072235,
    lng: -118.263683,
  },
];

const StoreLocator = () => {
  return (
    <div>
      <PageBanner title="Find a Store Near You" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Map will be here</p>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Our Stores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {stores.map((store) => (
                  <div key={store.id} className="border-b pb-4">
                    <h3 className="font-semibold">{store.name}</h3>
                    <p className="text-muted-foreground">{store.address}</p>
                    <p className="text-sm text-muted-foreground">{store.hours}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;

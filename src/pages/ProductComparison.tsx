import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useComparison } from "@/contexts/ComparisonContext";
import { Link } from "react-router-dom";

const ProductComparison = () => {
  const { comparisonList, removeFromComparison } = useComparison();

  return (
    <div>
      <PageBanner title="Product Comparison" />
      <div className="container mx-auto px-4 py-12">
        {comparisonList.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-4">
              You haven't selected any products to compare.
            </p>
            <Link to="/shop">
              <Button>Go to Shop</Button>
            </Link>
          </div>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Compare Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {comparisonList.map((product) => (
                  <div key={product.id} className="border rounded-lg p-4">
                    <img
                      src={product.image_url || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-primary font-bold text-xl">${product.price.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
                    <Button
                      variant="destructive"
                      className="mt-4 w-full"
                      onClick={() => removeFromComparison(product.id)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProductComparison;

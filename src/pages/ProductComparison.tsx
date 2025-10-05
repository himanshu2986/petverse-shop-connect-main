import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { useComparison } from "@/contexts/ComparisonContext";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProductComparison = () => {
  const { comparisonList, removeFromComparison } = useComparison();

  return (
    <div>
      <PageBanner title="Product Comparison" imageUrl="/assets/hero-pets.jpg" />
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
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/4 font-bold text-lg">Feature</TableHead>
                  {comparisonList.map((product) => (
                    <TableHead key={product.id} className="w-1/4">
                      <div className="flex flex-col items-center text-center">
                        <img
                          src={product.image_url || "/placeholder.svg"}
                          alt={product.name}
                          className="w-32 h-32 object-cover mb-4 rounded-md"
                        />
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">Price</TableCell>
                  {comparisonList.map((product) => (
                    <TableCell key={product.id} className="text-center">
                      <p className="text-primary font-bold text-xl">${product.price.toFixed(2)}</p>
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">Description</TableCell>
                  {comparisonList.map((product) => (
                    <TableCell key={product.id} className="text-sm text-muted-foreground text-center">
                      {product.description}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell></TableCell>
                  {comparisonList.map((product) => (
                    <TableCell key={product.id} className="text-center">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => removeFromComparison(product.id)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductComparison;

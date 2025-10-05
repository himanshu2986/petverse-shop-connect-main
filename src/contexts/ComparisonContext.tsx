import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string | null;
  description: string;
}

interface ComparisonContextType {
  comparisonList: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: string) => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [comparisonList, setComparisonList] = useState<Product[]>([]);

  const addToComparison = (product: Product) => {
    if (comparisonList.length >= 3) {
      toast.error('You can only compare up to 3 products at a time.');
      return;
    }
    if (comparisonList.find((p) => p.id === product.id)) {
      toast.info('This product is already in your comparison list.');
      return;
    }
    setComparisonList([...comparisonList, product]);
    toast.success('Product added to comparison list.');
  };

  const removeFromComparison = (productId: string) => {
    setComparisonList(comparisonList.filter((p) => p.id !== productId));
    toast.success('Product removed from comparison list.');
  };

  return (
    <ComparisonContext.Provider value={{ comparisonList, addToComparison, removeFromComparison }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};

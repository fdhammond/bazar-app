export interface ProductsProps {
  products: ProductProps[];
  total: number;
  skip: number;
  limit: number;
  items: string;
  setItems: React.Dispatch<React.SetStateAction<string>>;
}

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

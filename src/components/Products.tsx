import Product from './Product';
import productsList from '../utils/productsList.json';
import { ProductsProps } from '../types/products';

const Products = ({ items }: ProductsProps) => {
  if (!items) {
    return;
  }

  const { products }: ProductsProps = productsList;

  const productsFiltered = products.filter((product) =>
    product.title.toLowerCase().includes(items.toLowerCase())
  );

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center align-middle items-center mt-12">
        <h1 className="mb-8 font-bold text-3xl">Product List</h1>
        {productsFiltered.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default Products;

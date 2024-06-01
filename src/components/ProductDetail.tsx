import { useParams } from 'react-router-dom';
import Product from './Product';
import productsList from '../utils/productsList.json';
import { ProductProps } from '../types/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { products } = productsList;

  const productFiltered = products.find((product) => product.id === Number(id));

  return (
    <>
      <h1 className="mb-8 font-bold text-3xl">Product Detail</h1>
      <Product
        key={productFiltered?.id}
        {...(productFiltered as ProductProps)}
      />
    </>
  );
};

export default ProductDetail;

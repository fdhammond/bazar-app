import { useNavigate, useSearchParams } from 'react-router-dom';
import { ProductProps } from '../types/products';
import Stars from './Stars';

const Product = ({ id, title, price, description, rating }: ProductProps) => {
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    setSearchParams({ id: `${id}` });
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="flex justify-center gap-4 m-4 w-auto md:w-1/2">
        <div className="bg-gray-200 w-32 h-32 rounded-[50%]"></div>
        <div className="flex flex-col w-1/2 h-40">
          <h1 onClick={handleNavigate} className="font-bold cursor-pointer">
            {title}
          </h1>
          <p className="text-sm overflow-hidden text-ellipsis">{description}</p>
          <div className="flex justify-start items-center mt-2">
            <span className="mr-4">{price}$</span>
            <span>
              <Stars rating={rating} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

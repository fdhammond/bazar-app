import { FaOpencart } from 'react-icons/fa';
import { ItemsProps } from '../types/products';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Home = ({ items, setItems }: ItemsProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ q: items });
    navigate(`/products/search?q=${items}`);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-auto gap-6 mt-40">
      <FaOpencart size={40} />
      <h1 className="text-3xl">Bazar Online</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <input
          type="text"
          placeholder="laptops, smartphones, ..."
          className="w-[180px] p-2 border-2 border-blue-400 bg-gray-100 text-sm focus:outline-none focus:ring-1"
          value={items}
          onChange={handleFormChange}
        />
        <button
          className="w-[100px] p-2 border-2 border-blue-400 rounded-md hover:text-white bg-blue-400 text-sm mt-4"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;

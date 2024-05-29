import { FaStar, FaRegStarHalfStroke } from 'react-icons/fa6';

const Stars = ({ rating }: { rating: number }) => {
  const calculateStarsNumber = (rating: number) => {
    const numberOfCompleteStars = Math.floor(rating);
    const decimalPart = rating - numberOfCompleteStars;
    const halfStars = decimalPart >= 0.5 ? 1 : 0;

    return {
      numberOfCompleteStars,
      halfStars,
    };
  };

  const { numberOfCompleteStars, halfStars } = calculateStarsNumber(rating);
  const result = [...Array(numberOfCompleteStars)]
    .map(() => 'star')
    .concat([...Array(halfStars)].map(() => 'halfStar'));

  return (
    <>
      <div className="flex justify-center items-center">
        {result.map((item, index) => {
          if (item === 'star') {
            return <FaStar key={index} className="text-yellow-500" />;
          } else {
            return (
              <FaRegStarHalfStroke key={index} className="text-yellow-500" />
            );
          }
        })}
      </div>
    </>
  );
};

export default Stars;

import { Link } from "react-router-dom";

const ProductCard = ({ image, text, price }) => {
  return (
    <Link className="col-span-1 border rounded-md border-[#E8E8E8] p-2 sm:p-4 text-center">
      <div className="relative rounded-md group/item">
        <img src={image} className="w-full rounded-md" alt="img" />
        <div>
          <img
            className="absolute invisible w-6 h-6 transition-all right-3 top-3 group-hover/item:visible"
            src="/assets/addToCart.svg"
            alt="img"
          />
        </div>
      </div>
      <h1 className="mt-6 text-[25px] font-bold line-clamp-2">{text}</h1>
      <h4 className="text-[#FF3811] text-[18px] font-semibold">${price}.00</h4>
    </Link>
  );
};

export default ProductCard;

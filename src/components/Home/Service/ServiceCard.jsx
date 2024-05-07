import { Link } from "react-router-dom";

const ServiceCard = ({ image, text, price }) => {
  return (
    <Link
      to={"service-details/1"}
      className="col-span-1 border rounded-md border-[#E8E8E8] p-2 sm:p-4"
    >
      <div className="rounded-md">
        <img src={image} className="w-full rounded-md" alt="img" />
      </div>
      <h1 className="mt-6 text-[25px] font-bold line-clamp-2">{text}</h1>
      <div className="flex items-center justify-between ">
        <h4 className="text-[#FF3811] text-[18px] font-semibold">
          Price: <span>${price}</span>
        </h4>
        <img src="/assets/arrow.svg" alt="img" />
      </div>
    </Link>
  );
};

export default ServiceCard;

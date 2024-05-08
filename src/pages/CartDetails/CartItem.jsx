import PropTypes from "prop-types";

const CartItem = ({ item }) => {
  const {
    service_name,
    service_price,
    service_date,
    user_email,
    service_details,
  } = item;
  return (
    <>
      <li className="col-span-1">
        <div className="flex flex-col items-start justify-between w-full text-left md:items-center md:flex-row">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <img src="/assets/cart-delete.svg" alt="img" />
            </div>
            <img
              className="w-[150px] h-[150px] rounded-md"
              src={service_details?.img}
              alt="img"
            />
          </div>
          <div>
            <h1 className="text-xl text-[#444444] font-semibold mt-2 md:mt-0">
              {service_name}
            </h1>
            <p className="text-[#A2A2A2] text-[16px]">Color : Green</p>
            <p className="text-[#A2A2A2] text-[16px]">Size: Smail</p>
          </div>
          <div className="mt-3 md:mt-0">
            <p className="font-semibold text-[#444444]">${service_price}</p>
          </div>
          <div>
            <p className="font-semibold text-[#444444]">{service_date}</p>
          </div>
          <div className="mt-3 md:mt-0">
            <button className="px-[30px] py-[7px] sm:py-[8px] xl:py-[12px] text-center flex justify-center  hover:bg-transparent bg-[#FF3811] transition-colors border-[#FF3811] border rounded-md  font-medium hover:text-[#ff3511] text-[#fff]">
              Pending
            </button>
          </div>
          <div className="visible mt-2 md:hidden md:mt-0">
            <button className="px-[35px] py-[7px] sm:py-[8px] xl:py-[12px] text-center  justify-center  hover:bg-transparent bg-red-600 transition-colors border-red-600 border rounded-md  font-medium hover:text-red-600 text-[#fff]">
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
CartItem.propTypes = {
  item: PropTypes.object,
};
export default CartItem;

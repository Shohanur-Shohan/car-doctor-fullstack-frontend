import PropTypes from "prop-types";
import { deleteService } from "../../utils/api";
import { Bounce, toast } from "react-toastify";

const CartItem = ({ item, refetch }) => {
  // console.log(item);
  const {
    _id,
    service_name,
    service_price,
    service_date,
    user_email,
    service_details,
  } = item;

  const handleDelete = async (id) => {
    try {
      const result = await deleteService(id);
      if (result.deletedCount === 1) {
        toast.success("Delete Success", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        refetch();
      }
    } catch (error) {
      toast.error("Someting went wrong!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <li className="col-span-1">
        <div className="flex flex-col items-start justify-between w-full text-left md:items-center md:flex-row">
          <div className="flex items-center gap-4">
            <div
              onClick={() => handleDelete(_id)}
              className="hidden cursor-pointer md:flex"
            >
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
            <button
              onClick={() => handleDelete(_id)}
              className="px-[35px] py-[7px] sm:py-[8px] xl:py-[12px] text-center  justify-center  hover:bg-transparent bg-red-600 transition-colors border-red-600 border rounded-md  font-medium hover:text-red-600 text-[#fff]"
            >
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

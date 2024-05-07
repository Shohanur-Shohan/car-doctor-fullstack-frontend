const OrderItem = () => {
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
              src="/assets/cart-item-img.png"
              alt="img"
            />
          </div>
          <div>
            <h1 className="text-xl text-[#444444] font-semibold mt-2 md:mt-0">
              Martha Knit Top
            </h1>
            <p className="text-[#A2A2A2] text-[16px]">Color : Green</p>
            <p className="text-[#A2A2A2] text-[16px]">Size: Smail</p>
          </div>
          <div className="mt-3 md:mt-0">
            <p className="font-semibold text-[#444444]">$25.00</p>
          </div>
          <div>
            <p className="font-semibold text-[#444444]">12-10-22</p>
          </div>
          <div className="mt-3 md:mt-0">
            <button className="px-[30px] py-[7px] sm:py-[8px] xl:py-[12px] text-center  justify-center bg-whitetransition-colors border-[#29B170] border rounded-md  font-medium hover:text-[#29B170] text-[#29B170]">
              Pending
            </button>
          </div>
          <div className="visible mt-2 md:hidden md:mt-0">
            <button className="px-[35px] py-[7px] sm:py-[8px] xl:py-[12px] text-center  justify-center bg-whitetransition-colors border-[#29B170] border rounded-md  font-medium hover:text-[#29B170] text-[#29B170]">
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default OrderItem;

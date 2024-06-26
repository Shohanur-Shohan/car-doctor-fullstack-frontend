import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="w-full mb-[100px]">
      <div className="max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
        <div className="text-center max-w-[720px] mx-auto">
          <h6 className="text-[#FF3811] font-bold text-[20px] mb-3">
            Popular Products
          </h6>
          <h1 className="text-[24px] sm:text-[30px] lg:text-[45px] font-bold leading-[30px] sm:leading-[40px] lg:leading-[60px] text-[#151515]">
            Browse Our Products
          </h1>
          <p className="text-[14px] text-[#737373] md:text-[16px] mb-[25px] mt-[35px]">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don{"'"}t look even slightly
            believable.
          </p>
        </div>

        <div className="grid items-center justify-center grid-cols-1 gap-6 mb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductCard
            image={"/assets/service1.png"}
            text={"Electrical System"}
            price={20}
          />
          <ProductCard
            image={"/assets/service1.png"}
            text={"Electrical System"}
            price={20}
          />
          <ProductCard
            image={"/assets/service1.png"}
            text={"Electrical System"}
            price={20}
          />
          <ProductCard
            image={"/assets/service1.png"}
            text={"Electrical System"}
            price={20}
          />
          <ProductCard
            image={"/assets/service1.png"}
            text={"Electrical System"}
            price={20}
          />
          <ProductCard
            image={"/assets/service1.png"}
            text={"Electrical System"}
            price={20}
          />
          <ProductCard
            image={"/assets/service1.png"}
            text={"Electrical System"}
            price={20}
          />
          <ProductCard
            image={"/assets/service1.png"}
            text={"Electrical System"}
            price={20}
          />
        </div>

        <div className="flex justify-center">
          <button className="px-4 text-center block sm:flex sm:m-0 py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[12px] bg-transparent hover:bg-[#FF3811] transition-colors border-[#FF3811] border rounded-md  font-medium text-[#FF3811] hover:text-[#fff]">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;

import PropTypes from "prop-types";

const CartDetailsBreadcrumb = ({ text, path, image }) => {
  return (
    <div
      className="w-full relative rounded-[10px] h-[200px] sm:h-[250px] md:h-[300px]"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full rounded-[10px] my-shadow"></div>

      <div className="absolute top-0 z-40 text-center md:text-left flex items-start sm:items-center justify-start h-full mt-7 sm:mt-0 sm:left-5 md:left-[50px] xl:left-[100px] w-full">
        <h1 className="text-[30px]  mx-auto sm:m-0 md:text-[36px] lg:text-[45px]  text-center md:text-left font-semibold text-white leading-[40px] md:leading-[50px] lg:leading-[70px] 2xl:leading-[80px]">
          {text}
        </h1>
      </div>
      <div className="absolute bottom-0 flex justify-center w-full mx-auto">
        {/* Breadcrumb */}
        <div
          className="w-[285px]"
          style={{
            backgroundImage: `url('/assets/service-add-breadcrumb.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="py-3 font-medium text-center text-white">{path}</h1>
        </div>

        {/*  */}
      </div>
    </div>
  );
};
CartDetailsBreadcrumb.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string,
};

export default CartDetailsBreadcrumb;

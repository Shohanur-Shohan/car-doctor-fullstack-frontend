const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1536px] mx-auto flex items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <div className="w-full carousel rounded-[10px] max-h-[750px] min-h-[350px]">
          <div id="slide1" className="relative w-full h-auto carousel-item">
            <div className="w-full h-full">
              <img src="/assets/hero1.png" className="w-full h-full" />
            </div>
            <div className="absolute w-full h-full my-shadow"></div>
            <div className="absolute flex items-start sm:items-center justify-start h-full md:left-[50px] lg:left-[100px] w-full md:w-2/4">
              <div className="p-0 mt-8 sm:px-8 md:p-0 sm:mt-0">
                <h1 className="text-[36px] md:text-[40px] lg:text-[56px] xl:text-[65px] 2xl:text-[75px] text-center md:text-left font-semibold text-white leading-[40px] md:leading-[50px] lg:leading-[70px] 2xl:leading-[80px]">
                  Affordable Price For Car Servicing
                </h1>
                <p className="text-[14px] text-center md:text-left md:text-[18px] text-white font-light my-3 md:my-[35px]">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="justify-center gap-3 sm:flex md:justify-start">
                  <button
                    to={"/appoinment"}
                    className="px-4 block sm:flex mx-auto sm:m-0 py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[10px] hover:bg-transparent bg-[#FF3811] transition-colors border-[#FF3811] border rounded-md  font-medium hover:text-[#FF3811] text-[#fff]"
                  >
                    Discover More
                  </button>
                  <button
                    to={"/appoinment"}
                    className="px-4 mt-2 sm:mt-0 block sm:flex mx-auto sm:m-0 py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[10px] bg-transparent hover:bg-[#FF3811] transition-colors hover:border-[#FF3811] border-[#fff] border rounded-md  font-medium text-[#fff] hover:text-[#fff]"
                  >
                    Latest Projects
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-center w-full gap-2 md:justify-end bottom-2 sm:gap-3 md:right-5 md:bottom-5 ">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="relative w-full h-auto carousel-item">
            <div className="w-full h-full">
              <img src="/assets/hero2.png" className="w-full h-full" />
            </div>
            <div className="absolute w-full h-full my-shadow"></div>
            <div className="absolute flex items-start sm:items-center justify-start h-full md:left-[50px] lg:left-[100px] w-full md:w-2/4">
              <div className="p-0 mt-8 sm:px-8 md:p-0 sm:mt-0">
                <h1 className="text-[36px] md:text-[40px] lg:text-[56px] xl:text-[65px] 2xl:text-[75px] text-center md:text-left font-semibold text-white leading-[40px] md:leading-[50px] lg:leading-[70px] 2xl:leading-[80px]">
                  Affordable Price For Car Servicing
                </h1>
                <p className="text-[14px] text-center md:text-left md:text-[18px] text-white font-light my-3 md:my-[35px]">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="justify-center gap-3 sm:flex md:justify-start">
                  <button
                    to={"/appoinment"}
                    className="px-4 block sm:flex mx-auto sm:m-0 py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[10px] hover:bg-transparent bg-[#FF3811] transition-colors border-[#FF3811] border rounded-md  font-medium hover:text-[#FF3811] text-[#fff]"
                  >
                    Discover More
                  </button>
                  <button
                    to={"/appoinment"}
                    className="px-4 mt-2 sm:mt-0 block sm:flex mx-auto sm:m-0 py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[10px] bg-transparent hover:bg-[#FF3811] transition-colors hover:border-[#FF3811] border-[#fff] border rounded-md  font-medium text-[#fff] hover:text-[#fff]"
                  >
                    Latest Projects
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-center w-full gap-2 md:justify-end bottom-2 sm:gap-3 md:right-5 md:bottom-5 ">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="relative w-full h-auto carousel-item">
            <div className="w-full h-full">
              <img src="/assets/hero3.png" className="w-full h-full" />
            </div>
            <div className="absolute w-full h-full my-shadow"></div>
            <div className="absolute flex items-start sm:items-center justify-start h-full md:left-[50px] lg:left-[100px] w-full md:w-2/4">
              <div className="p-0 mt-8 sm:px-8 md:p-0 sm:mt-0">
                <h1 className="text-[36px] md:text-[40px] lg:text-[56px] xl:text-[65px] 2xl:text-[75px] text-center md:text-left font-semibold text-white leading-[40px] md:leading-[50px] lg:leading-[70px] 2xl:leading-[80px]">
                  Affordable Price For Car Servicing
                </h1>
                <p className="text-[14px] text-center md:text-left md:text-[18px] text-white font-light my-3 md:my-[35px]">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="justify-center gap-3 sm:flex md:justify-start">
                  <button
                    to={"/appoinment"}
                    className="px-4 block sm:flex mx-auto sm:m-0 py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[10px] hover:bg-transparent bg-[#FF3811] transition-colors border-[#FF3811] border rounded-md  font-medium hover:text-[#FF3811] text-[#fff]"
                  >
                    Discover More
                  </button>
                  <button
                    to={"/appoinment"}
                    className="px-4 mt-2 sm:mt-0 block sm:flex mx-auto sm:m-0 py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[10px] bg-transparent hover:bg-[#FF3811] transition-colors hover:border-[#FF3811] border-[#fff] border rounded-md  font-medium text-[#fff] hover:text-[#fff]"
                  >
                    Latest Projects
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-center w-full gap-2 md:justify-end bottom-2 sm:gap-3 md:right-5 md:bottom-5 ">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

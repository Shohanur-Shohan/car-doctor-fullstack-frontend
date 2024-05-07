import BreadCrumb from "../../components/BreadCrumb";

const ServiceDetails = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="max-w-[1536px] mx-auto flex flex-row items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <BreadCrumb path={"Home/Service Details"} text={"Service Details"} />
      </div>

      <div className="max-w-[1536px] mx-auto flex flex-row items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-5 sm:py-10 md:py-[40px] lg:py-[50px] xl:py-[100px]">
        <div className="grid justify-between w-full grid-cols-5 gap-6 xl:grid-cols-4">
          <article className="col-span-5 md:col-span-3">
            <div className="w-full mb-[40px]">
              <img
                src="/assets/service-bg.png"
                className="w-full rounded-md"
                alt="img"
              />
            </div>
            {/* content */}
            <div>
              <h1 className="text-[24px] lg:text-[34px] text-[#151515] font-bold">
                Unique Car Engine Service
              </h1>
              <p className="text-[#737373] text-[14px] md:text-md my-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don{"'"}t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn{"'"}t anything embarrassing
                hidden in the middle of text.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="col-span-1 bg-[#F3F3F3] rounded-md border-t-2 px-4 py-4 border-[#FF3811]">
                  <h1 className="font-bold text-[#444444] text-[20px]">
                    Easy Customer Service
                  </h1>
                  <p className="text-[14px] md:text-[16px] text-[#737373]">
                    It uses a dictionary of over 200 Latin words, combined with
                    a model sentence structures.
                  </p>
                </div>
                <div className="col-span-1 bg-[#F3F3F3] rounded-md border-t-2 px-4 py-4 border-[#FF3811]">
                  <h1 className="font-bold text-[#444444] text-[20px]">
                    Easy Customer Service
                  </h1>
                  <p className="text-[14px] md:text-[16px] text-[#737373]">
                    It uses a dictionary of over 200 Latin words, combined with
                    a model sentence structures.
                  </p>
                </div>
                <div className="col-span-1 bg-[#F3F3F3] rounded-md border-t-2 px-4 py-4 border-[#FF3811]">
                  <h1 className="font-bold text-[#444444] text-[20px]">
                    Easy Customer Service
                  </h1>
                  <p className="text-[14px] md:text-[16px] text-[#737373]">
                    It uses a dictionary of over 200 Latin words, combined with
                    a model sentence structures.
                  </p>
                </div>
                <div className="col-span-1 bg-[#F3F3F3] rounded-md border-t-2 px-4 py-4 border-[#FF3811]">
                  <h1 className="font-bold text-[#444444] text-[20px]">
                    Easy Customer Service
                  </h1>
                  <p className="text-[14px] md:text-[16px] text-[#737373]">
                    It uses a dictionary of over 200 Latin words, combined with
                    a model sentence structures.
                  </p>
                </div>
              </div>
              <p className="text-[#737373] text-[14px] md:text-md my-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don{"'"}t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn{"'"}t anything embarrassing
                hidden in the middle of text.
              </p>
              <div>
                <h1 className="text-[24px] lg:text-[34px] text-[#151515] font-bold">
                  3 Simple Steps to Process
                </h1>
                <p className="text-[#737373] text-[14px] md:text-md my-5">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don{"'"}t
                  look even slightly believable. If you are going to use a
                  passage of Lorem Ipsum, you need to be sure there isn{"'"}t
                  anything embarrassing hidden in the middle of text.
                </p>
              </div>
            </div>
            {/* content */}
          </article>
          <aside className="flex flex-col col-span-5 gap-6 md:col-span-2 xl:col-span-1">
            <div className="bg-[#F3F3F3] rounded-md px-[30px] py-[35px]">
              <h1 className="text-[#151515] text-xl font-bold mb-4">Service</h1>
              <ul className="flex flex-col gap-3">
                <li>
                  <button className="relative flex justify-between items-center w-full px-4 py-3 bg-white hover:bg-[#FF3811] group rounded-md">
                    <h2 className="group-hover:text-white text-[#151515] font-bold">
                      Full Car Repair
                    </h2>

                    <div className="absolute right-3 group-hover:invisible">
                      <img src="/assets/arrow.svg" alt="img" />
                    </div>
                    <div className="absolute invisible right-3 group-hover:visible">
                      <img src="/assets/arrow-light.svg" alt="img" />
                    </div>
                  </button>
                </li>
                <li>
                  <button className="relative flex justify-between items-center w-full px-4 py-3 bg-white hover:bg-[#FF3811] group rounded-md">
                    <h2 className="group-hover:text-white text-[#151515] font-bold">
                      Engine Repair
                    </h2>

                    <div className="absolute right-3 group-hover:invisible">
                      <img src="/assets/arrow.svg" alt="img" />
                    </div>
                    <div className="absolute invisible right-3 group-hover:visible">
                      <img src="/assets/arrow-light.svg" alt="img" />
                    </div>
                  </button>
                </li>
                <li>
                  <button className="relative flex justify-between items-center w-full px-4 py-3 bg-white hover:bg-[#FF3811] group rounded-md">
                    <h2 className="group-hover:text-white text-[#151515] font-bold">
                      Automatic Services
                    </h2>

                    <div className="absolute right-3 group-hover:invisible">
                      <img src="/assets/arrow.svg" alt="img" />
                    </div>
                    <div className="absolute invisible right-3 group-hover:visible">
                      <img src="/assets/arrow-light.svg" alt="img" />
                    </div>
                  </button>
                </li>
                <li>
                  <button className="relative flex justify-between items-center w-full px-4 py-3 bg-white hover:bg-[#FF3811] group rounded-md">
                    <h2 className="group-hover:text-white text-[#151515] font-bold">
                      Engine Oil Change
                    </h2>

                    <div className="absolute right-3 group-hover:invisible">
                      <img src="/assets/arrow.svg" alt="img" />
                    </div>
                    <div className="absolute invisible right-3 group-hover:visible">
                      <img src="/assets/arrow-light.svg" alt="img" />
                    </div>
                  </button>
                </li>
                <li>
                  <button className="relative flex justify-between items-center w-full px-4 py-3 bg-white hover:bg-[#FF3811] group rounded-md">
                    <h2 className="group-hover:text-white text-[#151515] font-bold">
                      Battery Charge
                    </h2>

                    <div className="absolute right-3 group-hover:invisible">
                      <img src="/assets/arrow.svg" alt="img" />
                    </div>
                    <div className="absolute invisible right-3 group-hover:visible">
                      <img src="/assets/arrow-light.svg" alt="img" />
                    </div>
                  </button>
                </li>
              </ul>
            </div>

            {/* download */}
            <div className="bg-[#151515] rounded-md px-[30px] py-[35px]">
              <h1 className="text-[#fff] text-xl font-bold mb-4">Download</h1>
              <ul className="flex flex-col gap-3">
                <li className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/assets/file.png" alt="img" />
                    <div className="text-lg text-white">
                      <h3>Our Brochure</h3>
                      <p className="text-sm text-[#A2A2A2]">Download</p>
                    </div>
                  </div>
                  <button className="relative flex justify-center items-center px-5 py-5 hover:bg-white bg-[#FF3811] group rounded-md">
                    <div className="absolute invisible group-hover:visible">
                      <img src="/assets/arrow.svg" alt="img" />
                    </div>
                    <div className="absolute group-hover:invisible">
                      <img src="/assets/arrow-light.svg" alt="img" />
                    </div>
                  </button>
                </li>
                <li className="flex flex-row items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/assets/file.png" alt="img" />
                    <div className="text-lg text-white">
                      <h3>Our Brochure</h3>
                      <p className="text-sm text-[#A2A2A2]">Download</p>
                    </div>
                  </div>
                  <button className="relative flex justify-center items-center px-5 py-5 hover:bg-white bg-[#FF3811] group rounded-md">
                    <div className="absolute invisible group-hover:visible">
                      <img src="/assets/arrow.svg" alt="img" />
                    </div>
                    <div className="absolute group-hover:invisible">
                      <img src="/assets/arrow-light.svg" alt="img" />
                    </div>
                  </button>
                </li>
              </ul>
            </div>

            {/* logo */}
            <div className="bg-[#151515] flex flex-col items-center justify-center rounded-md px-[30px] pt-[35px] pb-[50px]">
              <img
                className="max-w-[140px] mx-auto"
                src="/assets/logo-light.png"
                alt="img"
              />
              <h1 className="px-2 my-4 font-bold text-center text-white font md:px-4">
                Need Help? We Are Here To Help You
              </h1>
              <div className="relative flex flex-col items-center px-4 py-4 text-center bg-white rounded-md">
                <h1 className="text-[#FF3811] text-[18px] font-bold">
                  Car Doctor<span className="text-[#151515]"> Special</span>
                </h1>
                <h1 className="text-[#151515] text-[16px] font-bold mb-4">
                  Save up to <span className="text-[#FF3811]"> 60% off</span>
                </h1>
                <div className="absolute -bottom-1/3">
                  <button className="relative flex text-white hover:text-[#FF3811] font-bold justify-center items-center px-6 py-4 hover:bg-white bg-[#FF3811] group rounded-md">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>

            {/* checkout */}
            <div>
              <h1 className="text-[#151515] font-bold text-[35px]">
                Price $250.00
              </h1>
              <button className="w-full text-center flex justify-center py-[7px] sm:py-[8px] xl:py-[12px] hover:bg-transparent bg-[#FF3811] transition-colors border-[#FF3811] border rounded-md  font-medium hover:text-[#FF3811] text-[#fff]">
                Proceed Checkout
              </button>
            </div>
            {/* checkout */}
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;

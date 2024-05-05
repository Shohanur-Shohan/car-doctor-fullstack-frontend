import BreadCrumb from "../../components/BreadCrumb";

const Services = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="max-w-[1536px] mx-auto flex flex-row items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <BreadCrumb path={"Home/Service"} text={"Add To Service"} />
      </div>

      <div className="max-w-[1536px] mx-auto flex flex-row items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        {/* Form */}
        <div className="w-full bg-[#F3F3F3] rounded-xl px-5 sm:px-[40px] md:px-[90px] py-[90px] my-[50px] sm:my-[100px]">
          <form>
            <div className="grid gap-y-4">
              {/* name & price Group */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="col-span-1">
                  <input
                    type="text"
                    id="service-name"
                    name="service-name"
                    className="block w-full px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#FF3811] focus:ring-[#FF3811]"
                    placeholder="Service Name"
                    required=""
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    id="service-price"
                    name="service-price"
                    className="block w-full px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#FF3811] focus:ring-[#FF3811]"
                    placeholder="Service Price"
                    required=""
                  />
                </div>
              </div>
              {/* name & price Group */}
              {/* name & price Group */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="col-span-1">
                  <input
                    type="text"
                    id="text-here"
                    name="text-here"
                    className="block w-full px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#FF3811] focus:ring-[#FF3811]"
                    placeholder="Text here"
                    required=""
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    id="service-type"
                    name="service-type"
                    className="block w-full px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#FF3811] focus:ring-[#FF3811]"
                    placeholder="Service type"
                    required=""
                  />
                </div>
              </div>
              {/* name & price Group */}
              {/* text area */}
              <div className="w-full">
                <div className="col-span-1">
                  <textarea
                    type="text"
                    id="service-description"
                    name="service-description"
                    className="block w-full h-[250px] px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#FF3811] focus:ring-[#FF3811]"
                    placeholder="Text here"
                    required=""
                  />
                </div>
              </div>
              {/* text area */}
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white hover:text-[#FF3811] transition-colors bg-[#FF3811] border border-[#FF3811] rounded-lg gap-x-2 hover:bg-transparent"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        {/* End Form */}
      </div>
    </main>
  );
};

export default Services;

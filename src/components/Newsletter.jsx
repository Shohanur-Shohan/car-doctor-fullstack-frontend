const Newsletter = () => {
  return (
    <>
      <div className="w-full pb-[100px] mt-[80px]">
        <div className="max-w-[1536px]  mx-auto px-4 lg:px-7.5 xl:px-10 ">
          <div className="px-2 py-5 text-center rounded-lg sm:px-4 md:py-10 bg-accent lg:py-16">
            <div className="max-w-2xl mx-auto">
              <div className="mb-5">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Subscribe To Our Newsletter
                </h2>
                <p className="mt-3 text-gray-500">
                  Get all the latest updates and news.
                </p>
              </div>
              <form>
                <div className="flex flex-col items-center gap-2 mt-5 lg:mt-8 sm:flex-row sm:gap-3">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="block w-full px-4 py-3 text-sm border-gray-200 rounded-lg outline-none bg-neutral"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button className="px-4 block sm:flex mx-auto sm:m-0 py-[7px] sm:px-5 sm:py-[10px] xl:px-7 hover:bg-transparent bg-[#FF3811] transition-colors border-[#FF3811] border rounded-md  font-medium hover:text-[#FF3811] text-[#fff]">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;

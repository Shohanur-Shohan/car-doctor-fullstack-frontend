const Contact = () => {
  return (
    <div className="w-full pb-[100px] mt-[80px]">
      <div className="max-w-[1536px]  mx-auto px-4 lg:px-7.5 xl:px-10 ">
        <div className="px-2 text-center rounded-lg sm:px-4 py-[80px] bg-[#151515] lg:py-[100px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex items-center justify-center col-span-1 gap-2 text-left">
              <img
                src="/assets/contact-calender.png"
                className="w-[40px] h-[40px]"
                alt="img"
              />
              <div>
                <p className="text-white">We are open monday-friday</p>
                <h1 className="text-lg font-semibold text-white">
                  7:00 am - 9:00 pm
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center col-span-1 gap-2 text-left">
              <img
                src="/assets/contact-phone.png"
                className="w-[40px] h-[40px]"
                alt="img"
              />
              <div>
                <p className="text-white">We are open monday-friday</p>
                <h1 className="text-lg font-semibold text-white">
                  7:00 am - 9:00 pm
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center col-span-1 gap-2 text-left">
              <img
                src="/assets/contact-map.png"
                className="w-[40px] h-[40px]"
                alt="img"
              />
              <div>
                <p className="text-white">We are open monday-friday</p>
                <h1 className="text-lg font-semibold text-white">
                  7:00 am - 9:00 pm
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

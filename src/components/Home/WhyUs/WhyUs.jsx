const WhyUs = () => {
  return (
    <div className="w-full mb-[100px]">
      <div className="max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
        <div className="text-center max-w-[720px] mx-auto">
          <h6 className="text-[#FF3811] font-bold text-[20px] mb-3">
            Core Features
          </h6>
          <h1 className="text-[24px] sm:text-[30px] lg:text-[45px] font-bold leading-[30px] sm:leading-[40px] lg:leading-[60px] text-[#151515]">
            Why Choose Us
          </h1>
          <p className="text-[14px] text-[#737373] md:text-[16px] mb-[25px] mt-[35px]">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don{"'"}t look even slightly
            believable.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-1 flex items-center justify-center border rounded-md border-[#E8E8E8] hover:border-[#FF3811] py-6">
            <div className="text-center">
              <img src="/assets/why1.svg" className="mx-auto" alt="img" />
              <h1 className="text-[#444444] font-bold mt-3">Expert Team</h1>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center border rounded-md border-[#E8E8E8] hover:border-[#FF3811] py-6 transition-colors">
            <div className="text-center">
              <img src="/assets/why2.svg" className="mx-auto" alt="img" />
              <h1 className="text-[#444444] font-bold mt-3">Expert Team</h1>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center border rounded-md border-[#E8E8E8] hover:border-[#FF3811] py-6 transition-colors">
            <div className="text-center">
              <img src="/assets/why3.svg" className="mx-auto" alt="img" />
              <h1 className="text-[#444444] font-bold mt-3">Expert Team</h1>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center border rounded-md border-[#E8E8E8] hover:border-[#FF3811] py-6 transition-colors">
            <div className="text-center">
              <img src="/assets/why4.svg" className="mx-auto" alt="img" />
              <h1 className="text-[#444444] font-bold mt-3">Expert Team</h1>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center border rounded-md border-[#E8E8E8] hover:border-[#FF3811] py-6 transition-colors">
            <div className="text-center">
              <img src="/assets/why5.svg" className="mx-auto" alt="img" />
              <h1 className="text-[#444444] font-bold mt-3">Expert Team</h1>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center border rounded-md border-[#E8E8E8] hover:border-[#FF3811] py-6 transition-colors">
            <div className="text-center">
              <img src="/assets/why6.svg" className="mx-auto" alt="img" />
              <h1 className="text-[#444444] font-bold mt-3">Expert Team</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

const About = () => {
  return (
    <div className="w-full my-[100px]">
      <div className="grid gap-[40px] md:gap-5 lg:gap-[50px] items-center justify-between grid-cols-1 md:grid-cols-2 max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4">
        <div className="order-2 col-span-1 md:order-1">
          <img src="/assets/about.png" className="w-full h-auto" alt="img" />
        </div>
        <div className="order-1 col-span-1 md:order-2">
          <div>
            <h6 className="text-[#FF3811] font-bold text-[20px] mb-3">
              About Us
            </h6>
            <h1 className="text-[24px] sm:text-[30px] lg:text-[45px] font-bold leading-[30px] sm:leading-[40px] lg:leading-[60px] text-[#151515]">
              We are qualified & of experience in this field
            </h1>
            <p className="text-[14px] text-[#737373] md:text-[16px] mb-[25px] mt-[35px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don{"'"}t look even
              slightly believable.
            </p>
            <p className="text-[14px] text-[#737373] md:text-[16px] mb-[35px]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don{"'"}t look even slightly
              believable.
            </p>
            <button className="px-4 block sm:flex mr-auto sm:m-0 py-[7px] sm:px-5 sm:py-[8px] xl:px-7 xl:py-[12px] hover:bg-transparent bg-[#FF3811] transition-colors border-[#FF3811] border rounded-md  font-medium hover:text-[#FF3811] text-[#fff]">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

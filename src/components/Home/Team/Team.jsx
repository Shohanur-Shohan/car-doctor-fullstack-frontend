// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <>
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

          <div className="w-full ">
            <Swiper
              loop={true}
              freeMode={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 10 },
              }}
              modules={[Pagination, Autoplay]}
              className=" mySwiper"
            >
              <SwiperSlide>
                <TeamCard
                  image={"/assets/team1.png"}
                  text={"Electrical System"}
                  price={20}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamCard
                  image={"/assets/team2.png"}
                  text={"Electrical System"}
                  price={20}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamCard
                  image={"/assets/team3.png"}
                  text={"Electrical System"}
                  price={20}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeamCard
                  image={"/assets/team2.png"}
                  text={"Electrical System"}
                  price={20}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

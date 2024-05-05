import PropTypes from "prop-types";

const MemberCard = ({ name, image, role, animation }) => {
  return (
    <div
      className="col-span-1"
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-easing="linear"
      data-aos-duration={animation}
    >
      {/* content */}
      <div className="font-Garamond border border-[#424242]">
        <div className="py-6 px-[30px] lg:px-5 xl:px-[25px]">
          {/* image */}
          <div className="w-full h-[350px]">
            <img
              src={image}
              className="object-cover w-full h-full"
              alt="image"
            />
          </div>
          {/* image */}
          <div className="text-xl sm:text-[22px] xl:text-2xl text-center font-lora 2xl:text-[26px] leading-[34px] font-semibold text-lightBlack dark:text-white py-2 sm:py-3 md:py-4">
            <div className="line-clamp-2 ">{name}</div>
          </div>
          <div className="text-center">
            <p className="text-sm text-white text-center leading-[26px] font-garamond font-normal uppercase">
              {role}
            </p>
          </div>
        </div>
      </div>
      {/* content */}
    </div>
  );
};
MemberCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  role: PropTypes.string,
  animation: PropTypes.any,
};
export default MemberCard;

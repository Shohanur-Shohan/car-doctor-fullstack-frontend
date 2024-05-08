import PropTypes from "prop-types";

const OurService = ({ service }) => {
  const { name, details } = service;
  return (
    <div className="col-span-1 bg-[#F3F3F3] rounded-md border-t-2 px-4 py-4 border-[#FF3811]">
      <h1 className="font-bold text-[#444444] text-[20px]">{name}</h1>
      <p className="text-[14px] md:text-[16px] text-[#737373]">{details}</p>
    </div>
  );
};
OurService.propTypes = {
  service: PropTypes.object,
};
export default OurService;

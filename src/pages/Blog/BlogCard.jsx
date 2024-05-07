import PropTypes from "prop-types";

const BlogCard = ({ image, date, title, description }) => {
  return (
    <>
      <div className="col-span-1">
        <div className="w-full mb-10">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 text-xs font-semibold leading-loose text-left text-[#A2A2A2] rounded bg-primary">
                {date}
              </span>
            )}
            <h3 className=" mb-4 text-xl font-semibold line-clamp-2 text-[#444444] sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>
            <p className="text-[#A2A2A2] text-[14px] line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

BlogCard.propTypes = {
  image: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default BlogCard;

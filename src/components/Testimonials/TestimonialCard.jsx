const TestimonialCard = () => {
  return (
    <div className="w-full h-auto p-6 transition-all duration-500 bg-white border border-gray-300 border-solid swiper-slide group rounded-2xl hover:border-indigo-600 slide-active:border-indigo-600">
      <div className="flex items-center gap-2 transition-all duration-500 mb-9 text-amber-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600"></div>
      <p className="h-24 text-lg leading-8 text-gray-500 transition-all duration-500 mb-9 group-hover:text-gray-800">
        Pagedone is simply the best tool of investment in the market right now.
      </p>
      <div className="flex items-center gap-5">
        <img
          src="https://pagedone.io/asset/uploads/1696229969.png"
          alt="avatar"
        />
        <div className="grid gap-1">
          <h5 className="font-medium text-gray-900 transition-all duration-500 group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
            Jane D
          </h5>
          <span className="text-sm leading-6 text-gray-500">CEO </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

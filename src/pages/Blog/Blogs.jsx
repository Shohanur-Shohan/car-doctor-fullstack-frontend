import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <>
      <section className="bg-white my-[40px] md:my-[70px] lg:mt-[100px]">
        <div className="max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
          <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
            <span className="block mb-2 text-lg font-semibold text-[#FF3811]">
              Our Blogs
            </span>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] ">
              Our Recent News
            </h2>
            <p className="text-base">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          <div className="grid items-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              date="Dec 22, 2023"
              title="Meet AutoManage, the best AI management tools"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              title="Meet AutoManage, the best AI management tools"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              title="Meet AutoManage, the best AI management tools"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

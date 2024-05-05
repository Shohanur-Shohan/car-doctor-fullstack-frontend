// import MemberCard from "../../components/MemberCard";

const About = () => {
  return (
    <>
      <main className="max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <section className="relative py-14 lg:py-24">
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="img-box">
                <img
                  src="https://pagedone.io/asset/uploads/1702034769.png"
                  alt="About Us tailwind page"
                  className="max-lg:mx-auto"
                />
              </div>
              <div className="lg:pl-[100px] flex items-center">
                <div className="w-full data">
                  <h2 className="relative text-4xl font-bold text-black font-manrope lg:text-5xl mb-9 max-lg:text-center">
                    About Us{" "}
                  </h2>
                  <p className="max-w-2xl mx-auto font-normal leading-8 text-gray-500 text-md md:text-xl max-lg:text-center">
                    Driven by a passion for seamless user experiences, we{"'"}ve
                    meticulously curated pagedone to empower creators,
                    designers, and developers alike. Our mission is to provide a
                    comprehensive toolkit, enabling you to build intuitive,
                    beautiful interfaces that resonate with users on every
                    interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-14 lg:py-24">
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
              <div className="flex items-center lg:pr-24">
                <div className="w-full data">
                  <img
                    src="https://pagedone.io/asset/uploads/1702034785.png"
                    alt="About Us tailwind page"
                    className="block mx-auto lg:hidden mb-9"
                  />
                  <h2 className="text-4xl font-bold text-black font-manrope lg:text-5xl mb-9 max-lg:text-center">
                    We are Creative Since 2005
                  </h2>
                  <p className="max-w-2xl mx-auto font-normal leading-8 text-gray-500 text-md md:text-xl max-lg:text-center">
                    Pagedone isn{"'"}t just a collection of components and
                    guidelines; it{"'"}s a philosophy. We go beyond aesthetics,
                    prioritizing accessibility, scalability, and usability.
                    Every element, from the tiniest detail to the grandest
                    layout, is meticulously crafted to enhance functionality and
                    elevate user satisfaction.
                  </p>
                </div>
              </div>
              <div className="img-box ">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  className="hidden lg:block "
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 font-manrope mb-14">
              Our results in numbers
            </h2>
            <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
              <div className="w-full p-6 mx-auto bg-white shadow-md max-lg:max-w-2xl lg:mx-0 lg:w-1/3 rounded-2xl shadow-gray-100">
                <div className="flex gap-5">
                  <div className="text-2xl font-bold text-indigo-600 font-manrope">
                    240%
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                      Company growth
                    </h4>
                    <p className="text-xs leading-5 text-gray-500">
                      Company{"'"}s remarkable growth journey as we continually
                      innovate and drive towards new heights of success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full p-6 mx-auto bg-white shadow-md max-lg:max-w-2xl lg:mx-0 lg:w-1/3 rounded-2xl shadow-gray-100">
                <div className="flex gap-5">
                  <div className="text-2xl font-bold text-indigo-600 font-manrope">
                    175+
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                      Company growth
                    </h4>
                    <p className="text-xs leading-5 text-gray-500">
                      Our very talented team members are the powerhouse of
                      pagedone and pillars of our success.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full p-6 mx-auto bg-white shadow-md max-lg:max-w-2xl lg:mx-0 lg:w-1/3 rounded-2xl shadow-gray-100">
                <div className="flex gap-5">
                  <div className="text-2xl font-bold text-indigo-600 font-manrope">
                    625+
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2 text-xl font-semibold text-gray-900">
                      Projects Completed
                    </h4>
                    <p className="text-xs leading-5 text-gray-500">
                      We have accomplished more than 625 projects worldwide and
                      we are still counting many more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;

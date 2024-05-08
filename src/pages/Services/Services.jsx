import { useForm } from "react-hook-form";
import BreadCrumb from "../../components/BreadCrumb";
import { Bounce, toast } from "react-toastify";
import Loader from "../../components/Loaders/Loader";
import { bookAService, singleService } from "../../utils/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/FirebaseAuthProvider";

const Services = () => {
  const { user, loading } = useContext(AuthContext);
  const { id } = useParams();
  // console.log(id);
  const {
    isPending,
    data: serviceData,
    isError,
    error,
  } = useQuery({
    queryKey: ["serviceDetails"],
    queryFn: async () => await singleService(id),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBookService = async (formData) => {
    try {
      if (formData) {
        console.log(formData);
      }

      await bookAService({ formData, serviceDetails: serviceData });

      toast.success("Service Booked", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Error booking service:", error); // Log the error for debugging
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  if (loading) {
    return <Loader />;
  }
  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <main className="w-full min-h-screen">
      <div className="max-w-[1536px] mx-auto flex flex-row items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <BreadCrumb path={"Home/Book-Service"} text={"Book A Service"} />
      </div>

      <div className="max-w-[1536px] mx-auto flex flex-row items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        {/* Form */}
        <div className="w-full bg-[#F3F3F3] rounded-xl px-5 sm:px-[40px] md:px-[90px] py-[90px] my-[50px] sm:my-[100px]">
          {serviceData === null ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit(handleBookService)}>
              <div className="grid gap-y-4">
                {/* name & price Group */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="col-span-1">
                    <div className="label">
                      <span className="label-text">Service Name</span>
                    </div>
                    <input
                      type="text"
                      id="service_name"
                      name="service_name"
                      defaultValue={serviceData?.title}
                      {...register("service_name")}
                      className="block w-full px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#FF3811] focus:ring-[#FF3811]"
                      placeholder="Service Name"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <div className="label">
                      <span className="label-text">Service Price</span>
                    </div>
                    <input
                      type="text"
                      id="service_price"
                      name="service_price"
                      defaultValue={serviceData?.price}
                      {...register("service_price")}
                      className="block w-full px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#FF3811] focus:ring-[#FF3811]"
                      placeholder="Service Price"
                      required
                    />
                  </div>
                </div>
                {/* name & price Group */}
                {/* name & price Group */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="col-span-1">
                    <div className="label">
                      <span className="label-text">Service Date</span>
                    </div>
                    <input
                      type="date"
                      id="service_date"
                      name="service_date"
                      {...register("service_date")}
                      className="block w-full px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#FF3811] focus:ring-[#FF3811]"
                      placeholder="Text here"
                      required
                    />
                  </div>
                  <div className="col-span-1">
                    <div className="label">
                      <span className="label-text">User Email</span>
                    </div>
                    <input
                      type="text"
                      id="user_email"
                      name="user_email"
                      defaultValue={user?.email}
                      {...register("user_email", { required: true })}
                      className="block w-full px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#FF3811] focus:ring-[#FF3811]"
                      placeholder="User Email"
                    />
                  </div>
                </div>
                {/* name & price Group */}
                {/* text area */}
                {/* <div className="w-full">
                <div className="col-span-1">
                  <div className="label">
                    <span className="label-text">Description</span>
                  </div>
                  <textarea
                    type="text"
                    id="service-description"
                    name="service-description"
                    {...register("service_description")}
                    disabled="disabled"
                    defaultValue={data?.description}
                    className="block w-full h-[250px] px-4 py-3 text-sm border border-gray-200 shadow-sm bg-[#fff] rounded-lg focus:border-[#FF3811] focus:ring-[#FF3811]"
                    placeholder="Product description"
                    required=""
                  />
                </div>
              </div> */}
                {/* text area */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white hover:text-[#FF3811] transition-colors bg-[#FF3811] border border-[#FF3811] rounded-lg gap-x-2 hover:bg-transparent"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          )}
        </div>

        {/* End Form */}
      </div>
    </main>
  );
};

export default Services;

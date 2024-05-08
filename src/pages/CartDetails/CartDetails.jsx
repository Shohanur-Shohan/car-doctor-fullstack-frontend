import { useQuery } from "react-query";
import CartDetailsBreadcrumb from "../../components/Cart/CartDetailsBreadcrumb";
import CartItem from "./CartItem";
import { useContext } from "react";
import { AuthContext } from "../../providers/FirebaseAuthProvider";
import Loader from "../../components/Loaders/Loader";
import { usersServiceOrders } from "../../utils/api";

const CartDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const { isPending, data, isError, error } = useQuery({
    queryKey: ["cartDetails"],
    queryFn: () => usersServiceOrders(user?.email),
  });

  if (loading) {
    return <Loader />;
  }
  if (isPending) {
    return <Loader />;
  }
  if (isError) {
    <p>{error?.message}</p>;
  }
  return (
    <main className="w-full min-h-screen">
      <div className="max-w-[1536px] mx-auto flex flex-row items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <CartDetailsBreadcrumb
          path={"Home/Cart-Details"}
          text={"Cart Details"}
          image={"/assets/cart-details.png"}
        />
      </div>

      <div className="max-w-[1536px] mx-auto flex flex-row items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5 my-[40px] md:my-[60px] lg:my-[100px]">
        <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 sm:gap-4 md:gap-6">
          {data?.map((orderItem) => {
            return <CartItem key={orderItem?._id} item={orderItem} />;
          })}
        </ul>
      </div>

      <div className="max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-7.5 xl:px-10 my-[20px] md:my-[30px] lg:my-[50px]">
        <div className="my-[40px] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/assets/previous.png" alt="img" />
            <h1>Continue Shopping</h1>
          </div>
          <div className="flex items-center gap-3">
            <img src="/assets/trash.png" alt="img" />
            <h1>Clear Shopping Cart</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartDetails;

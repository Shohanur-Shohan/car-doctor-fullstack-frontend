import CartDetailsBreadcrumb from "../../components/Cart/CartDetailsBreadcrumb";
import CartItem from "../CartDetails/CartItem";
import OrderItem from "./OrderItem";

const Order = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="max-w-[1536px] mx-auto flex flex-row items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5">
        <CartDetailsBreadcrumb
          path={"Home/Manage-All-Orders"}
          text={"Manage All Orders"}
          image={"/assets/cart-details.png"}
        />
      </div>

      <div className="max-w-[1536px] mx-auto flex flex-row items-center px-2 sm:px-4 lg:px-7.5 xl:px-10 py-4 md:py-5 my-[40px] md:my-[60px] lg:my-[100px]">
        <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1 sm:gap-4 md:gap-6">
          <OrderItem />
          <OrderItem />
        </ul>
      </div>
    </main>
  );
};

export default Order;

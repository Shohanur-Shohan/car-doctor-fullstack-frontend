import Header from "../../components/Header";

const Error = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center w-full min-h-[90vh]">
        <img
          src="/assets/error.png"
          className="max-w-[800px] w-full"
          alt="img"
        />
      </div>
    </>
  );
};

export default Error;

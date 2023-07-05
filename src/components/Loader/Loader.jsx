import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Oval
      height={60}
      width={60}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;

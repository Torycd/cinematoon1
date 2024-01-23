import croodImage from "../assets/croodscartoon.png";

const HomePage = () => {
  return (
    <div className="h-screen col-span-10 md:col-span-8 bg-slate-50">
      <div className="border-2 border-[#2cb758] flex md:hidden justify-center p-1 rounded-full w-[50px] sm:w-[70px] m-4">
        <img src={croodImage} className="rounded-full w-full" alt="#" />
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;

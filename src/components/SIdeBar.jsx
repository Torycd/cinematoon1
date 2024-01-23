import croodImage from "../assets/croodscartoon.png";

const SIdeBar = () => {
  return (
    <div className="hidden md:flex flex-col  md:col-span-4 lg:col-span-3 shadow-xl bg-white mr-4 w-full h-screen">
      <div className=" flex flex-col mx-auto mt-7">
        <div className="border-2 border-[#2cb758] flex justify-center p-1 rounded-full w-[30px] sm:w-[50px] md:w-[70px] lg:w-[100px] mb-4">
          <img src={croodImage} className="rounded-full w-full" alt="#" />
        </div>
        <p className="font-medium">Croods_Family</p>
      </div>
    </div>
  );
};

export default SIdeBar;

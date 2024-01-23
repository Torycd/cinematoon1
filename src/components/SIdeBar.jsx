import croodImage from "../assets/croodscartoon.png";

const SIdeBar = () => {
  return (
    <div className="flex flex-col col-span-2 shadow-xl bg-white mr-4 w-full h-screen">
      <div className="flex flex-col mx-auto mt-7">
        <div className="border-2 border-[#2cb758] flex justify-center p-1 rounded-full w-[100px] mb-4">
          <img src={croodImage} className="rounded-full w-full" alt="#" />
        </div>
        <p className="font-medium ">Croods Family</p>
      </div>
    </div>
  );
};

export default SIdeBar;

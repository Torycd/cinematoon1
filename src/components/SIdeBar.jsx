import croodImage from "../assets/croodscartoon.png";

const SIdeBar = () => {
  return (
    <div className="flex flex-col col-span-2 shadow-xl bg-white mr-4 w-full h-screen">
      <div>
        <div className="border border-[] items-center">
          <img src={croodImage} className="rounded-full w-[100px]" alt="#" />
        </div>
      </div>
    </div>
  );
};

export default SIdeBar;

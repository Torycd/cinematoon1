// import des from "../assets/des.jpeg";
import { DUMMMY_DISCOVER } from "./store/cartoon_product";

const Discover = () => {
  return (
    <div className="mt-6">
      <p className="mb-2 text-2xl">Discover</p>
      <div className="grid md:grid-cols-3 gap-5">
      {/* items */}
      {DUMMMY_DISCOVER.map((item) => (
        <div className={item.style} key={item.id}>
          <img src={item.image} alt="#" className=" rounded-sm w-[400px] h-[300px]" />
          <div className="flex flex-col gap-4 h-full">
            <h2 className="text-2xl">{item.title}</h2>
            <p >
              {item.info}
            </p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Discover;

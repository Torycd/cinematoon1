import des from "../assets/des.jpeg";
import { DUMMY_POPULAR } from "./store/cartoon_product";

const Discover = () => {
  return (
    <div className="mt-6">
      <p className="mb-2 text-2xl">Discover</p>
      <div className="grid md:grid-cols-3 gap-3">
      {/* items */}
      {DUMMY_POPULAR.map((item) => (
        <div className={item.image} key={item.idid}>
          <img src={item.image} alt="#" className="object-cover h-full" />
          <div className=" h-full">
            <h2>{item.title}</h2>
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

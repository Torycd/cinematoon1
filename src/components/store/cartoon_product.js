import coco from "../../assets/coco.jpeg";
import moana from "../../assets/moana.jpeg";
import crocs from "../../assets/crocs.jpeg";
import des from "../../assets/des.jpeg";
import hotel from "../../assets/hotel.jpeg";

export const DUMMY_POPULAR = [
  {
    id: "p1",
    image: coco,
    style:
      "p-3 rounded-md bg-gradient-to-tr from-[#ed523f] to-[#f7897b]  md:hover:translate-y-4 duration-100 ease-in-out",
    title: "Coco",
    genre: "2017 - Animation, Adventure",
  },
  {
    id: "p2",
    image: moana,
    style:
      "p-3 rounded-md bg-gradient-to-tr from-[#5698f3] to-[#9abcec]  md:hover:translate-y-4 duration-100 ease-in-out",
    title: "Moana",
    genre: "2021 - Animation, Adventur",
  },
  {
    id: "p3",
    image: crocs,
    style:
      "p-3 rounded-md bg-gradient-to-tr from-[#2cb758] to-[#7be39c]  md:hover:translate-y-4 duration-100 ease-in-out",
    title: "Croc Boy",
    genre: "2023 - Animation, Adventur",
  },
];

export const DUMMMY_DISCOVER = [
  {
    id: "p4",
    image: des,
    style:
      "p-3 h-auto rounded-md bg-gradient-to-tr from-[#2cb758] to-[#7be39c] text-white  md:hover:translate-y-4 duration-100 ease-in-out",
    title: "Despicable Me",
    info: "Despicable Me is a heartwarming animated comedy that follows the story of Gru, a supervillain who adopts three orphaned girls",
  },
  {
    id: "p5",
    image: hotel,
    style:
      "p-3 h-auto rounded-md bg-gradient-to-tr from-[#5698f3] to-[#9abcec] text-white md:hover:translate-y-4 duration-100 ease-in-out",
    title: "Hotel Transylvania",
    info: "Despicable Me is a heartwarming animated comedy that follows the story of Gru, a supervillain who adopts three orphaned girls",
  },
];

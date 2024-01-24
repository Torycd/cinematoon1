import coco from '../assets/coco.jpeg';
import moana from "../assets/moana.jpeg"
import crocs from '../assets/crocs.jpeg'

const Popular = () => {
  return (
    <div>
        <p className="text-bold mb-2 text-2xl">Popular</p>
        <div className="grid gap-3 text-white font-bold md:grid-cols-3 ">
            <div className='p-3 rounded-md bg-gradient-to-tr from-[#ed523f] to-[#f7897b]  md:hover:translate-y-4 duration-100 ease-in-out'>
                <img src={coco} className='rounded-md' alt="#"/>
                <p className='mt-2'>Coco</p>
                <p>2017 - Animation, Adventure</p>
            </div>
            <div className='p-3 rounded-md bg-gradient-to-tr from-[#5698f3] to-[#9abcec]  md:hover:translate-y-4 duration-100 ease-in-out'>
                <img src={moana} className='rounded-md' alt="#"/>
                <p className='mt-2'>Moana</p>
                <p>2021 - Animation, Adventure</p>
            </div>
            <div className='p-3 rounded-md bg-gradient-to-tr from-[#2cb758] to-[#7be39c]  md:hover:translate-y-4 duration-100 ease-in-out'>
                <img src={crocs} className='rounded-md' alt="#"/>
                <p className='mt-2'>Croc Boy</p>
                <p>2023 - Animation, Adventure</p>
            </div>
        </div>
    </div>
  )
}


export default Popular
import { DUMMY_POPULAR } from './store/cartoon_product';

const Popular = () => {
  return (
    <div>
        <p className="text-bold mb-2 text-2xl">Popular</p>
        <div className="grid gap-3 text-white font-bold md:grid-cols-3 ">
            {DUMMY_POPULAR.map((toon) => (
                <div key={toon.id} className={toon.style}>
                <img src={toon.image} className='rounded-md' alt="#"/>
                <p className='mt-2'>{toon.title}</p>
                <p>{toon.genre}</p>
            </div>
            ))}
        </div>
    </div>
  )
}


export default Popular
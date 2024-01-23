import HomePage from "./HomePage"
import SIdeBar from "./SIdeBar"


const Home = () => {
  return (
    <div className="grid gap-4 bg-slate-50 grid-cols-10 w-full">
        <SIdeBar/>
        <HomePage/>
    </div>
  )
}

export default Home
import HomePage from "./HomePage"
import SIdeBar from "./SIdeBar"


const Home = () => {
  return (
    <div className="grid grid-cols-5">
        <SIdeBar/>
        <HomePage/>
    </div>
  )
}

export default Home
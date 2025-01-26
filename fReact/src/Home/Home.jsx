import Navbar from "../Components/navbar"
import Banner from "../Components/Banner";
import Footer from "../Components/footer";
import Freebook from "../Components/Freebook";
 import Banner2 from "../Components/Banner2";

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Banner2/>
        <Freebook/>
        <Footer/>
    </div>
  )
}

export default Home

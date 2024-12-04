import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import Latestvisa from "../Components/Latestvisa";


const Home = () => {
    return (
        <div >
            
            <Navbar />
            <Hero/>
            <Slider/>
            <Latestvisa/>
            <Footer/>
          
        </div>
    );
};

export default Home;
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import Latestvisa from "../Components/Latestvisa";


const Home = () => {
    return (
        <div >
            <div  
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                  <Navbar/>
            <Hero/>
            </div>
            <Slider/>
            <Latestvisa/>
            <Footer/>
          
        </div>
    );
};

export default Home;
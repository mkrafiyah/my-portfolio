import Banner from "../../../Components/Banner/Banner";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import Projects from "../../../Components/Projects/Projects";
import Skills from "../../../Components/Skills/Skills";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
           
        </div>
    );
};

export default Home;
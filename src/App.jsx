import Header from "./components/Header/Header";
import Delicious from "./components/Delicious/Delicious";
import AboutUs from "./components/AboutUs/AboutUs";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <>
      <Header />
      <Delicious />
      <AboutUs />
    </>
  );
}


export default App;

import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Service from "./components/Service";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Service></Service>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;

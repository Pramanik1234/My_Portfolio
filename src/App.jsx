import Home from "./component/Home/Home"
import About from "./component/About/About";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";
import NavBar from "./Navigation/NavBar";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <NavBar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

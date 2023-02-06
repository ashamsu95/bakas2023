import "./App.css";
import Navbar from "./components/Navbar.js";
import HeadingAndSubheading from "./components/HeadingAndSubheading.js";
import Pellets from "./components/Pellet.js";
import Briquette from "./components/Briquette";
import Contactus from "./components/Contactus";

function App() {
  return (
    <div>
      <div className="row dropshadow">
        <Navbar />
      </div>
      <HeadingAndSubheading />
      <Pellets />
      <Briquette />
      <Contactus />
    </div>
  );
}

export default App;

import "./App.css";
import Contact from "./Screen/contact";
import Home from "./Screen/Home";
import Navbar from "./Screen/Navbar";
import Skills from "./Screen/Skills";
import Socials from "./Screen/Social";
import Work from "./Screen/Work";
function App() {
  return (
    <div className="bodyContainer">
      <Navbar />
      <Home />
      <Socials />
      <Skills />
      <Work />
      <Contact />
      <div className="mt-20 flex items-center flex-col justify-center w-full p-3 bg-[#00488C] text-white">
        <p>Made with ❤️✌️</p>
        <p>Lumen ©️ 2023</p>
      </div>
    </div>
  );
}

export default App;

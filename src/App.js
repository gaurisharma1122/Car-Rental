import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import VehicleModels from "./pages/VehicleModels";
import Testimonials from "./pages/Testimonials";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/vehicle_models" element={<VehicleModels/>}/>
        <Route exact path="/testimonials" element={<Testimonials/>}/>
        <Route exact path="/our_team" element={<OurTeam/>}/>
        <Route exact path="/contact" element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </>
  );
}

export default App;

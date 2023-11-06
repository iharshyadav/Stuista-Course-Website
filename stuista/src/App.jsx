import Home from "./Home"
import Navbar from "./Navbar"
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
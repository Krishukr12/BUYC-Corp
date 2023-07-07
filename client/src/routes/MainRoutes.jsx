import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/Sign up/Signup";
import AddCarPage from "../pages/Car Listing/AddCarPage";
import Carfolio from "../pages/Carfolio/Carfolio";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Carfolio />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/carlisting" element={<AddCarPage />}></Route>
      </Routes>
    </div>
  );
};

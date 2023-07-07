import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Signup } from "../pages/Sing up/Signup";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
};

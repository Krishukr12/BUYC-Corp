import { Progress } from "@chakra-ui/react";
import { Navbar } from "../src/components/Navbar/Navbar";
import { MainRoutes } from "./routes/MainRoutes";
import { useSelector } from "react-redux";

function App() {
  const isVisible = useSelector((state) => state.isVisible);

  return (
    <div>
      {isVisible ? <Progress size="xs" isIndeterminate /> : null}
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;

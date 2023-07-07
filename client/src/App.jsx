import { Progress } from "@chakra-ui/react";
import { Navbar } from "../src/components/Navbar/Navbar";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <div>
      <Progress size="xs" isIndeterminate />
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import CarCard from "../../components/Car details card/CarCard";
import axios from "axios";
import API_URL from "../../config/config";
import classes from "./Carfolio.module.css";
import useCustomToast from "../../hooks/useCustomToast";
const Carfolio = () => {
  const [cars, setCars] = useState([]);
  const showToast = useCustomToast();

  const getCarData = async () => {
    try {
      const response = await axios.get(`${API_URL}/car/carListing`);
      setCars(response.data.cars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/car/carListings/${id}`);
      showToast(response.data.message, "success");
      await getCarData();
    } catch (error) {
      console.log(error.data);
      showToast(error.response, "error");
    }
  };

  return (
    //Todo : remove inline css
    <div
      style={{
        width: "80%",
        margin: "20px auto",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
      }}
      className={classes.container}
    >
      {cars.length > 0
        ? cars.map((item) => {
            return (
              <CarCard onDelete={handleDelete} car={item} key={item._id} />
            );
          })
        : null}
    </div>
  );
};

export default Carfolio;

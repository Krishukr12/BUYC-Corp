import { useEffect, useState } from "react";
import CarCard from "../../components/Car details card/CarCard";
import axios from "axios";
import API_URL from "../../config/config";
import classes from "./Carfolio.module.css";
import useCustomToast from "../../hooks/useCustomToast";
import { useDispatch } from "react-redux";
import { hideProgressBar, showProgressBar } from "../../redux/action";

const Carfolio = () => {
  const [cars, setCars] = useState([]);
  const showToast = useCustomToast();
  const dispatch = useDispatch();

  const getCarData = async () => {
    dispatch(showProgressBar());
    try {
      const response = await axios.get(`${API_URL}/car/carListing`);
      setCars(response.data.cars);
      dispatch(hideProgressBar());
    } catch (error) {
      dispatch(hideProgressBar());
      console.log(error);
    }
  };

  useEffect(() => {
    getCarData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (id) => {
    dispatch(showProgressBar());
    try {
      const response = await axios.delete(`${API_URL}/car/carListings/${id}`);
      showToast(response.data.message, "success");
      dispatch(hideProgressBar());
      await getCarData();
    } catch (error) {
      dispatch(hideProgressBar());
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

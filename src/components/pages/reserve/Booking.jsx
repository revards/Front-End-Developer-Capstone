import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../../../api.js";
import './Booking.css';

const updateTimes = (availableTimes, date) => {
  if (date.type == "UPDATE_DATE") {
    const selectedDate = fetchAPI(new Date(date.payload));

    return selectedDate.length !== 0 ? selectedDate : availableTimes;
  } else {
    return availableTimes;
  }
};
const initializeTimes = (initialAvailableTimes) => {
  return [...initialAvailableTimes, ...fetchAPI(new Date())];
};

export const Booking = () => {
  const [availableTimes, dispatchAvailableTimesChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();
  const submitData = (data) => {
    const submitedData = submitAPI(data);
    submitedData ? navigate("/confirmedbooking") : alert("fail");
  };

  return (
    <>
      <section className="booking grid-container">
        <header>Table Reservation</header>
        <BookingForm
          availableTimes={availableTimes}
          dispatchAvailableTimesChange={dispatchAvailableTimesChange}
          submitData={submitData}
        />
      </section>
    </>
  );
};

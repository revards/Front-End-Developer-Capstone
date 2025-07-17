import { useReducer, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitData = (data) => {
    setLoading(true);
    setError("");
    try {
      const submittedData = submitAPI(data);
      setLoading(false);
      if (submittedData) {
        navigate("/confirmedbooking", { state: data.formData });
      } else {
        setError("Reservation failed. Please try again.");
      }
    } catch (e) {
      setLoading(false);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <section className="booking grid-container">
        <header>Table Reservation</header>
        <BookingForm
          availableTimes={availableTimes}
          dispatchAvailableTimesChange={dispatchAvailableTimesChange}
          submitData={submitData}
          loading={loading}
          error={error}
        />
      </section>
    </>
  );
};

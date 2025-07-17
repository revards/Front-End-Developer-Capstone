/* eslint-disable react/prop-types */
import { useState } from "react";
import "./BookingForm.css"

const BookingForm = ({
  availableTimes,
  dispatchAvailableTimesChange,
  submitData,
  loading = false,
  error = "",
}) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    if (id === "date") {
      dispatchAvailableTimesChange({
        type: "UPDATE_DATE",
        payload: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);
    submitData({ formData });
    setSubmitted(true);
  };
  const fieldsNotValid = () => {
    if (formData.date === "" ||
      formData.time === "" ||
      formData.occasion === "" ||
      formData.guests < 1 ||
      formData.guests > 10
    ){
      return true;
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      aria-disabled={loading}
    >
      {error && <div className="form-error" role="alert">{error}</div>}
      {loading && <div className="form-loading">Submitting reservation...</div>}
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
        data-testid="date-options"
        required
        disabled={loading}
      />

      <label htmlFor="time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleChange} required disabled={loading}>
        <option value="" disabled>
          Select a Time
        </option>
        {availableTimes &&
          availableTimes.map((time) => (
            <option key={time} value={time} data-testid="time-options">
              {time}
            </option>
          ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={formData.guests}
        onChange={handleChange}
        placeholder="1"
        min="1"
        max="10"
        required
        disabled={loading}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
        disabled={loading}
      >
        <option value="" disabled>
          Select Occasion
        </option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" className="button-big" disabled={fieldsNotValid() || loading}>
        {loading ? "Submitting..." : "Make Your Reservation"}
      </button>
    </form>
  );
};

export default BookingForm;

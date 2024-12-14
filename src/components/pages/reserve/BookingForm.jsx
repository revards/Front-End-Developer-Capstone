/* eslint-disable react/prop-types */
import { useState } from "react";

const BookingForm = ({
  availableTimes,
  dispatchAvailableTimesChange,
  submitData,
}) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "",
  });

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
    submitData({ formData });
    alert(`Reservation made: ${JSON.stringify(formData)}`);
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
        data-testid="date-options"
        required
      />

      <label htmlFor="time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleChange} required>
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
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select Occasion
        </option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default BookingForm;

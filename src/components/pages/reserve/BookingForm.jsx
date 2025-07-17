/* eslint-disable react/prop-types */
import { useState } from "react";
import "./BookingForm.css"

const DEFAULT_MIN_GUESTS = 1;
const DEFAULT_MAX_GUESTS = 10;

// Get today's date in YYYY-MM-DD format
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
const todayStr = `${yyyy}-${mm}-${dd}`;

const BookingForm = ({
  availableTimes,
  dispatchAvailableTimesChange,
  submitData,
  loading = false,
  error = "",
  minGuests = DEFAULT_MIN_GUESTS,
  maxGuests = DEFAULT_MAX_GUESTS,
}) => {
  const [formData, setFormData] = useState({
    date: todayStr, // Prefill with today
    time: "17:00",
    guests: minGuests,
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
    if (
      formData.date === "" ||
      formData.time === "" ||
      formData.occasion === "" ||
      formData.guests < minGuests ||
      formData.guests > maxGuests
    ) {
      return true;
    }
  };
  const noTimesAvailable = !availableTimes || availableTimes.length === 0;
  return (
    <form
      onSubmit={handleSubmit}
      aria-disabled={loading}
      aria-labelledby="reservation-form-legend"
    >
      <fieldset disabled={loading} style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend id="reservation-form-legend" style={{position: 'absolute', left: '-9999px'}}>
          Table Reservation Form
        </legend>
        {error && <div className="form-error" role="alert" aria-live="assertive">{error}</div>}
        {loading && <div className="form-loading" aria-live="polite">Submitting reservation...</div>}
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
          data-testid="date-options"
          required
          aria-required="true"
          aria-label="Reservation date"
          min={todayStr}
          placeholder={todayStr}
        />

        <label htmlFor="time">Choose time</label>
        <div className="select-wrapper">
          <select
            id="time"
            value={formData.time}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Reservation time"
            disabled={noTimesAvailable}
          >
            <option value="" disabled>
              {noTimesAvailable ? "No times available" : "Select a Time"}
            </option>
            {!noTimesAvailable &&
              availableTimes.map((time) => (
                <option key={time} value={time} data-testid="time-options">
                  {time}
                </option>
              ))}
          </select>
          <svg className="select-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        {noTimesAvailable && (
          <div className="form-error" role="alert" aria-live="assertive" style={{marginTop: '0.5rem'}}>
            No available times for the selected date. Please choose another date.
          </div>
        )}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={formData.guests}
          onChange={handleChange}
          placeholder={minGuests.toString()}
          min={minGuests}
          max={maxGuests}
          required
          aria-required="true"
          aria-label="Number of guests"
        />

        <label htmlFor="occasion">Occasion</label>
        <div className="select-wrapper">
          <select
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Occasion"
          >
            <option value="" disabled>
              Select Occasion
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Graduation">Graduation</option>
            <option value="Engagement">Engagement</option>
            <option value="Other">Other</option>
          </select>
          <svg className="select-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>

        <button
          type="submit"
          className="button-big"
          disabled={fieldsNotValid() || loading}
          aria-label="Submit reservation form"
        >
          {loading ? "Submitting..." : "Make Your Reservation"}
        </button>
      </fieldset>
    </form>
  );
};

export default BookingForm;

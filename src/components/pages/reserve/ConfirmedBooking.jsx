import { useLocation, useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state;

  return (
    <div className="confirmation-container">
      <section className="confirmation-content">
        <h2 className="confirmation-title">Booking confirmed!</h2>
        {details ? (
          <div className="confirmation-details">
            <p><strong>Date:</strong> {details.date}</p>
            <p><strong>Time:</strong> {details.time}</p>
            <p><strong>Guests:</strong> {details.guests}</p>
            <p><strong>Occasion:</strong> {details.occasion}</p>
          </div>
        ) : (
          <p className="confirmation-message">Your reservation is confirmed.</p>
        )}
        <p className="confirmation-message">Contact us for any additional information.</p>
        <div className="confirmation-actions">
          <button className="button-big" onClick={() => navigate("/")}>Return to Home</button>
          <button className="button-big" onClick={() => navigate("/reserve")}>Make Another Reservation</button>
        </div>
      </section>
    </div>
  );
};

export default ConfirmedBooking;
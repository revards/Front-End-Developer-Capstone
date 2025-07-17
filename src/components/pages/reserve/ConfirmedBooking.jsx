import { useLocation, useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const details = location.state;

  return (
    <section>
      <h2>Booking confirmed!</h2>
      {details ? (
        <div className="confirmation-details">
          <p><strong>Date:</strong> {details.date}</p>
          <p><strong>Time:</strong> {details.time}</p>
          <p><strong>Guests:</strong> {details.guests}</p>
          <p><strong>Occasion:</strong> {details.occasion}</p>
        </div>
      ) : (
        <p>Your reservation is confirmed.</p>
      )}
      <p>Contact us for any additional information.</p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
        <button className="button-big" onClick={() => navigate("/")}>Return to Home</button>
        <button className="button-big" onClick={() => navigate("/reserve")}>Make Another Reservation</button>
      </div>
    </section>
  );
};

export default ConfirmedBooking;
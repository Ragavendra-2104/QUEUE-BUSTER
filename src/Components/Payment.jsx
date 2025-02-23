import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "../css/Payment.css"; // Importing the external CSS file

const Payment = () => {
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    setPopupMessage("Processing payment... Please wait.");
    setShowPopup(true);

    setTimeout(() => {
      setPopupMessage("✨ Payment Successful ✨");
    }, 2000); // Simulating a delay for payment processing

    setTimeout(() => {
      setShowPopup(false);
      navigate("/wallet"); // Redirect to Wallet page after payment success
    }, 4000); // Hide popup after some time
  };

  return (
    <div>
      <section className="payment">
        <h2>Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="text" id="expiryDate" name="expiryDate" required />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" required />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolderName">Name on Card</label>
            <input type="text" id="cardHolderName" name="cardHolderName" required />
          </div>
          <button type="submit">Pay Now</button>
        </form>
      </section>

      <footer>QueueBuster - Front End Project</footer>

      {showPopup && (
        <div className="popup-container">
          <div className="popup">{popupMessage}</div>
        </div>
      )}
    </div>
  );
};

export default Payment;

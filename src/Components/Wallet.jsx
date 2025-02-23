import { useState } from "react";
import "../css/Wallet.css"; // Importing external CSS file

const Wallet = () => {
  const [totalPoints, setTotalPoints] = useState(100); // Default wallet points
  const [pointsHistory, setPointsHistory] = useState([
    { id: 1, description: "Earned from shopping", points: 50 },
    { id: 2, description: "Bonus points", points: 50 },
  ]);
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const redeemPoints = () => {
    if (totalPoints > 0) {
      setTotalPoints(0); // Reset total points after redeeming
      setPointsHistory([]); // Clear history after redeeming
      setShowPopup(true); // Show popup message

      // Hide popup automatically after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {
      alert("No points to redeem!");
    }
  };

  return (
    <div>
      <section className="wallet-content">
        <h2>Your Wallet</h2>
        <ul id="points-history">
          {pointsHistory.length > 0 ? (
            pointsHistory.map((item) => (
              <li key={item.id} className="wallet-point">
                <span>{item.description}</span>
                <span>{item.points} Points</span>
              </li>
            ))
          ) : (
            <li className="wallet-point">No points available</li>
          )}
        </ul>
        <p className="wallet-total">
          Total Points: <span id="wallet-total-points">{totalPoints}</span>
        </p>
        <button className="btn-checkout" onClick={redeemPoints}>
          Redeem Points
        </button>
      </section>

      {showPopup && (
        <div className="popup">
          <p>🎉 Points Redeemed Successfully! 🎉</p>
        </div>
      )}

      <footer>QueueBuster - Front End Project</footer>
    </div>
  );
};

export default Wallet;

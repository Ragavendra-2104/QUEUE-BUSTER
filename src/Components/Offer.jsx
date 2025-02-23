import { useState } from "react";
import "../css/Offer.css";
import chickenbiriyani from "../images/chicken biryani.jpg";
import paneerbiriyani from "../images/paneer biryani.jpeg";
import fishfry from "../images/fish fry.jpg";
import tandoorichicken from "../images/Tandoori Chicken.jpg";

const Offer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const addToCart = (itemName, itemPrice) => {
    setPopupMessage(`${itemName} successfully added to cart!`);
    setShowPopup(true);

    // Retrieve existing cart data from localStorage
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Add new item
    cartItems.push({ name: itemName, price: itemPrice });

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Hide popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="offer-container">
      <section className="offer">
        <h2>Today's Offers</h2>
        <table className="item-grid">
          <tbody>
            <tr>
              <td className="item">
                <img src={chickenbiriyani} alt="Chicken Biryani" width="200" height="200" />
                <h3>Chicken Biryani</h3>
                <p className="actual-price">Actual Price: <del>₹250</del></p>
                <p className="today-price">Today's Price: ₹230</p>
                <button onClick={() => addToCart("Chicken Biryani", 230)} className="btn-add-to-cart">
                  Add to Cart
                </button>
              </td>
              <td className="item">
                <img src={paneerbiriyani} alt="Paneer Biryani" width="200" height="200" />
                <h3>Paneer Biryani</h3>
                <p className="actual-price">Actual Price: <del>₹200</del></p>
                <p className="today-price">Today's Price: ₹180</p>
                <button onClick={() => addToCart("Paneer Biryani", 180)} className="btn-add-to-cart">
                  Add to Cart
                </button>
              </td>
            </tr>
            <tr>
              <td className="item">
                <img src={fishfry} alt="Fish Fry" width="200" height="200" />
                <h3>Fish Fry</h3>
                <p className="actual-price">Actual Price: <del>₹190</del></p>
                <p className="today-price">Today's Price: ₹170</p>
                <button onClick={() => addToCart("Fish Fry", 170)} className="btn-add-to-cart">
                  Add to Cart
                </button>
              </td>
              <td className="item">
                <img src={tandoorichicken} alt="Tandoori Chicken" width="200" height="200" />
                <h3>Tandoori Chicken</h3>
                <p className="actual-price">Actual Price: <del>₹320</del></p>
                <p className="today-price">Today's Price: ₹300</p>
                <button onClick={() => addToCart("Tandoori Chicken", 300)} className="btn-add-to-cart">
                  Add to Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}

      <footer>QueueBuster - Front End Project</footer>
    </div>
  );
};

export default Offer;

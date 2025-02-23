import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../css/Cart.css"; // Import the separate CSS file

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Remove item from cart
  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Show the popup
    setShowPopup(true);
    setOverlayVisible(true);

    setTimeout(() => {
      setShowPopup(false);
      setOverlayVisible(false);
    }, 2000);
  };

  // Handle Checkout
  const handleCheckout = () => {
    setLoading(true); // Show "Loading..."
    
    setTimeout(() => {
      navigate("/payment"); // Redirect to Payment.jsx after 2s
    }, 2000);
  };

  // Calculate Total Price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <section className="content-section cart-content">
        <h2>Your Cart</h2>
        <ul id="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
                <button className="remove-button" onClick={() => removeItem(index)}>
                  Remove
                </button>
              </li>
            ))
          ) : (
            <li className="cart-empty">Your cart is empty</li>
          )}
        </ul>
        <div className="cart-total">
          Total: ₹<span id="cart-total-price">{totalPrice.toFixed(2)}</span>
        </div>
        
        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : (
          cartItems.length > 0 && (
            <button className="btn-checkout" onClick={handleCheckout}>
              Checkout
            </button>
          )
        )}
      </section>

      <footer>QueueBuster - Front End Project</footer>

      {overlayVisible && <div className="overlay"></div>}

      {showPopup && (
        <div className="popup" id="popup">
          Item removed!
        </div>
      )}
    </div>
  );
};

export default Cart;

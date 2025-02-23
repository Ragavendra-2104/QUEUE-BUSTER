import { useNavigate } from "react-router-dom";
import "../css/app.css";
import chickenBiryani from "../images/chicken biryani.jpg";
import PaneerBiriyani from "../images/paneer biryani.jpeg";
import ButterChickenMasala from "../images/butter chicken masala.jpg";
import FriedRice from "../images/fried rice.jpg";

const Home = () => {
  const navigate = useNavigate();

  // Function to add item to cart
  const addToCart = (productName, productPrice) => {
    const newItem = { name: productName, price: productPrice };
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert(`"${productName}" has been added to your cart.`);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.clear(); // Clears cart/session data
    navigate("/login"); // Redirects to Login.jsx
  };

  return (
    <div>
      <header>
        <img src="/images/logo.png" alt="Logo" />
      </header>

      <section className="banner">
        <div className="banner-text">
          <h1>Welcome to QueueBuster!!!</h1>
          <p>"Seamless Ordering, Zero wait"</p>
        </div>
      </section>

      <nav>
        <ul>
          <li><button onClick={() => navigate("/home")}><b>Home</b></button></li>
          <li><button onClick={() => navigate("/menu")}><b>Menu</b></button></li>
          <li>
            <b>About &#9662;</b>
            <ul>
              <li><button onClick={() => navigate("/service")}><b>Services</b></button></li>
              <li><button onClick={() => navigate("/support")}><b>Support</b></button></li>
              <li><button onClick={() => navigate("/feedback")}><b>Feedback</b></button></li>
            </ul>
          </li>
          <li><button onClick={() => navigate("/cart")}><b>Cart</b></button></li>
          <li><button onClick={() => navigate("/offer")}><b>Offer</b></button></li>
          <li><button onClick={() => navigate("/wallet")}><b>Wallet</b></button></li>
          <li><button onClick={() => navigate("/payment")}><b>Payment</b></button></li>
          <li><button onClick={handleLogout}><b>Logout</b></button></li>
        </ul>
      </nav>

      <section className="Top-Selling-Items">
        <h2>Top Selling Items</h2>
        <table className="item-grid">
          <tbody>
            <tr>
              <td className="item">
                <img src={chickenBiryani} alt="Chicken Biryani" width="200" height="200" />
                <h3>Chicken Biryani</h3>
                <p>₹250</p>
                <button onClick={() => addToCart("Chicken Biryani", 250)} className="btn-add-to-cart">
                  Add to Cart
                </button>
              </td>
              <td className="item">
                <img src={PaneerBiriyani} alt="Paneer Biryani" width="200" height="200" />
                <h3>Paneer Biryani</h3>
                <p>₹200</p>
                <button onClick={() => addToCart("Paneer Biryani", 200)} className="btn-add-to-cart">
                  Add to Cart
                </button>
              </td>
            </tr>
            <tr>
              <td className="item">
                <img src={ButterChickenMasala} alt="Butter Chicken Masala" width="200" height="200" />
                <h3>Butter Chicken Masala</h3>
                <p>₹210</p>
                <button onClick={() => addToCart("Butter Chicken Masala", 210)} className="btn-add-to-cart">
                  Add to Cart
                </button>
              </td>
              <td className="item">
                <img src={FriedRice} alt="Fried Rice" width="200" height="200" />
                <h3>Fried Rice</h3>
                <p>₹90</p>
                <button onClick={() => addToCart("Fried Rice", 90)} className="btn-add-to-cart">
                  Add to Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer>QueueBuster - Front End Project</footer>
    </div>
  );
};

export default Home;
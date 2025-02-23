import { useState } from "react";
import "../css/Menu.css";
import menu from "../images/Menuu.jpg";
import chickenbiriyani from "../images/chicken biryani.jpg";
import paneerbiriyani from "../images/paneer biryani.jpeg";
import butterchickenmasala from "../images/butter chicken masala.jpg";
import friedrice from "../images/fried rice.jpg";
import fishfry from "../images/fish fry.jpg";
import gobimanchurian from "../images/gopi manchurian dry.jpg";
import hotandsour from "../images/hot and sour soup.jpg";
import masaladosa from "../images/masala dosa.jpg";
import noodles from "../images/noodles.jpg";
import paneerbuttermasala from "../images/panner butter masala.jpg";
import paneertikka from "../images/panner tikka.jpg";
import tandoorichicken from "../images/Tandoori Chicken.jpg";

const Menu = () => {
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

  const menuItems = [
    { name: "Chicken Biryani", price: 250, img: chickenbiriyani },
    { name: "Paneer Biryani", price: 200, img: paneerbiriyani },
    { name: "Butter Chicken Masala", price: 210, img: butterchickenmasala },
    { name: "Fried Rice", price: 90, img: friedrice },
    { name: "Fish Fry", price: 190, img: fishfry },
    { name: "Gobi Manchurian (Dry)", price: 80, img: gobimanchurian },
    { name: "Hot and Sour Soup", price: 70, img: hotandsour },
    { name: "Masala Dosa", price: 90, img: masaladosa },
    { name: "Noodles", price: 90, img: noodles },
    { name: "Paneer Butter Masala", price: 180, img: paneerbuttermasala },
    { name: "Paneer Tikka", price: 99, img: paneertikka },
    { name: "Tandoori Chicken", price: 320, img: tandoorichicken },
  ];

  const goBack = () => {
    history.push('/');  // Redirect to the Home page
  };

  return (
    <div className="menu-container">
      <header>
        <img src="/assets/images/logo.png" alt="Logo" />
      </header>
      <nav>
        <img src={menu} alt="Menu Banner" />
      </nav>
      <section className="menu">
        <h2>MENU</h2>
        <div className="item-grid">
          {menuItems.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.img} alt={item.name} width="200" height="200" />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button className="btn-add-to-cart" onClick={() => addToCart(item.name, item.price)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <button className="btn-go-back" onClick={goBack}>Go Back</button> {/* Add Go Back button */}
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

export default Menu;

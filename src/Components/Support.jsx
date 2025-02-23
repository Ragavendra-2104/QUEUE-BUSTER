import '../css/Support.css'; // Importing the external CSS file

const Support = () => {
  return (
    <div className="container">
      <section id="faqs" className="content-section">
        <h2 className="section-title">FAQs</h2>
        <div className="faqs-info">
          <div>
            <h3>How do I place an order?</h3>
            <p>To place an order, log in to your account, browse the menu, select items, and proceed to checkout.</p>

            <h3>Can I modify or cancel my order?</h3>
            <p>Once an order is confirmed, modifications or cancellations may not be possible. Contact support for assistance.</p>
          </div>
        </div>
      </section>

      <section id="troubleshooting" className="content-section">
        <h2 className="section-title">Troubleshooting</h2>
        <div className="troubleshooting-info">
          <div>
            <h3>1. I can't log in to my account.</h3>
            <p>Ensure that you are using the correct username and password. If the issue persists, use the "Forgot Password" option or contact support.</p>

            <h3>2. Payment issues</h3>
            <p>If you are experiencing problems with payments, check your payment details and ensure sufficient funds. Contact your bank for further assistance.</p>

            <h3>3. Technical errors on the website</h3>
            <p>Clear your browser cache and cookies. If the issue persists, try accessing the website from a different browser or device.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        QueueBuster - Front End Project
      </footer>
    </div>
  );
};

export default Support;

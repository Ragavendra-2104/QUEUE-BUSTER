import '../css/Feedback.css'; 
import video from '../images/feedback.mp4'

const Feedback = () => {
  return (
    <div className="feedback-container">
      <section className="content-section" id="feedback">
        <h2 className="feedback-title">Customer Feedback</h2>
        <div className="feedback-info">
          <p>We value your feedback! Please share your thoughts and suggestions to help us improve our services.</p>

          <video controls autoPlay loop className="feedback-video">
            <source src={video} type="video/mp4" />
          </video>

          <form action="https://api.web3forms.com/submit" method="POST" className="feedback-form">
            <input type="hidden" name="access_key" value="99d9c143-5e57-40a6-8a1d-8906e2628d73" />

            <label htmlFor="feedback" className="feedback-label">Your Feedback:</label>
            <textarea id="feedback" name="feedback" rows="4" cols="50" className="feedback-textarea"></textarea>

            <input type="submit" value="Submit Feedback" className="feedback-submit" />
          </form>
        </div>
      </section>

      <footer className="feedback-footer">
        QueueBuster - Front End Project
      </footer>
    </div>
  );
};

export default Feedback;

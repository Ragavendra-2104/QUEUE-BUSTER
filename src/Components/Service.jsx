import '../css/Service.css' // Importing external CSS
const Services = () => {
  return (
    <div>
      <section className="content-section" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="service-info">
          <p>
            Here we provide South Indian and North Indian cuisines in our
            canteen. To provide delicious and healthy food at an affordable
            price for both staff and students. To ensure cleanliness in the
            premises by cleaning the tables, counters, and sinks at regular
            intervals. To trash the leftovers of the food and not to serve stale
            food by reheating. Canteen management systems can help organizations
            to create and schedule menus based on employee preferences, dietary
            restrictions, and budget. Canteen management systems can track
            inventory levels in real-time, helping organizations to avoid
            stockouts and overstocking.
          </p>
        </div>
      </section>

      <section className="content-section" id="catering">
        <h3 className="section-subtitle">Catering</h3>
        <div className="catering-info">
          <p>
            Planning an event? We provide catering services for all occasions. A
            catering service within a food ordering system typically refers to
            the provision of food and beverage services for events, parties, or
            gatherings, where a specialized menu is prepared and delivered to
            the specified location. This service is an extension of traditional
            restaurant or food delivery services, targeting larger groups of
            people who require catering for various occasions.
          </p>
          <div className="menu-list">
            <div className="menu-item">
              <h3>Customized Menus</h3>
              <p>
                Catering services offer a range of customizable menus to suit
                the preferences and dietary requirements of the clients. This
                can include appetizers, main courses, desserts, and beverages.
              </p>
            </div>

            <div className="menu-item">
              <h3>Event Planning</h3>
              <p>
                Catering services often involve collaboration with event
                planners or organizers to ensure that the food aligns with the
                overall theme and requirements of the occasion. This may involve
                considerations like the number of guests, venue logistics, and
                special dietary needs.
              </p>
            </div>

            <div className="menu-item">
              <h3>Delivery and Setup</h3>
              <p>
                Caterers handle the delivery of the prepared food to the
                specified location. They are also responsible for setting up the
                food service area, which may include arranging buffet tables,
                providing serving staff, and ensuring that the presentation
                meets the client's expectations.
              </p>
            </div>

            <div className="menu-item">
              <h3>Quality Assurance</h3>
              <p>
                Caterers prioritize the quality and freshness of their
                offerings. This often involves attention to detail in food
                preparation, transportation, and maintaining appropriate
                temperatures to ensure that the food reaches the event in
                optimal condition.
              </p>
            </div>

            <div className="menu-item">
              <h3>Customer Reviews and Feedback</h3>
              <p>
                Like other online food services, catering platforms may include
                features for customers to leave reviews and provide feedback.
                This helps build a reputation for the catering service and
                assists future clients in making informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        QueueBuster - Front End Project
      </footer>
    </div>
  );
};

export default Services;

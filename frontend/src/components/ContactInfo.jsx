import '../css/ContactInfo.css';

function ContactInfo() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-left">
          <div className="contact-info-block">
            <p className="service-title">Servicing Residents Virtually</p>
            <p>Location: Ontario, Canada</p>
            <p>Email: <a href="mailto:persaudbina@gmail.com">persaudbina@gmail.com</a></p>
            <p>Phone: 647-539-7269</p>
          </div>
        </div>
        <div className="contact-middle">
          <div className="hours-block">
            <p><strong>Mon & Fri:</strong> 9am - 10pm</p>
            <p><strong>Tue - Thurs:</strong> 10am - 7pm</p>
            <p><strong>Saturday:</strong> 10am - 7pm</p>
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name <span className="required">*</span></label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name <span className="required">*</span></label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;

import '../css/Contact.css';
import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page-container">
      {/* Page Hero Section */}
      <section className="contact-page-hero">
        <h1>Contact</h1>
        <p>Get in touch with us</p>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-page-section">
        <div className="contact-info-page-content">
          <p>
            If you'd like to reach out about counselling services, the best way to contact me is through 
            email or the website contact form. This ensures your message is received safely and confidentially. 
            You may also call, and if I am unavailable, please leave a voicemail with your first name and a 
            safe number. I will return your call within one business day. This process helps ensure that all 
            communication is respectful, confidential, and convenient for you.
          </p>
          <p>
            <b>All communication with Healing Meadows Counselling is confidential. Your personal information 
            will be protected according to professional and legal standards.</b>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;

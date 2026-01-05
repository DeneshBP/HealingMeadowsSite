import backgroundImage from '../assets/background.jpg';
import '../css/Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-image">
          <img src={backgroundImage} alt="Healing Meadows Background" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">HEALING MEADOWS COUNSELLING</h1>
          <p className="hero-subtitle">Psychotherapy Services</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Individual Counselling (Adults)</h3>
            <p>
              Personalized counselling sessions designed to help adults navigate life's challenges, 
              improve mental health, and achieve personal growth.
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>

          <div className="service-card">
            <h3>Individual Counselling (Youth & Adolescents)</h3>
            <p>
              Specialized support for young people facing difficulties during adolescence, 
              helping them develop coping strategies and self-understanding.
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>

          <div className="service-card">
            <h3>Couples Counselling</h3>
            <p>
              Therapeutic sessions for couples seeking to strengthen their relationship, 
              improve communication, and resolve conflicts.
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>

          <div className="service-card">
            <h3>Family Counselling</h3>
            <p>
              Support for families working through relationship dynamics and communication challenges, 
              fostering healthier family connections.
            </p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>
      </section>

      {/* Therapeutic Approach Section */}
      <section className="approach-section">
        <h2>Therapeutic Approach</h2>
        <div className="approach-content">
          <p>
            Bina provides counselling and psychotherapy services to individuals and families, 
            supporting a range of mental health concerns across different life stages. 
            Her work is grounded in a client-centred and integrative approach, drawing from evidence-informed 
            modalities such as Cognitive Behavioural Therapy, Mindfulness, Solution-Focused Therapy, 
            as well as emotion-focused and spiritually informed perspectives when appropriate.
          </p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </section>

      {/* Meet the Therapist Section */}
      <section className="therapist-section">
        <h2>Meet the Therapist</h2>
        <div className="therapist-content">
          <img src="https://via.placeholder.com/300" alt="Therapist" className="therapist-image" />
          <div className="therapist-text">
            <p>
              As a dedicated therapist, I am committed to providing compassionate and effective support to my clients. 
              I strive to build a trusting and supportive therapeutic relationship with each individual I work with.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Location</h3>
            <p>Newmarket, Ontario<br />Canada</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p><a href="mailto:persaudbina@gmail.com">persaudbina@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <h3>Hours of Service</h3>
            <p>Mon & Fri: 9AM - 10PM<br />Tue - Thurs: 10AM - 7PM<br />Saturday: 10AM - 7PM<br />Sunday: Closed</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Healing Meadows Counselling. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;

import backgroundImage from '../assets/background.jpg';
import binaImage from '../assets/bina.jpeg';
import '../css/Home.css';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const indicators = document.querySelectorAll('.indicator');
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentIndex = 0;
    let autoAdvance;

    const showSlide = (index) => {
      slides.forEach((slide) => slide.classList.remove('active'));
      indicators.forEach((indicator) => indicator.classList.remove('active'));
      
      const validIndex = index % slides.length;
      if (slides[validIndex]) {
        slides[validIndex].classList.add('active');
        indicators[validIndex].classList.add('active');
      }
      currentIndex = validIndex;
    };

    const startAutoAdvance = () => {
      autoAdvance = setInterval(() => {
        showSlide(currentIndex + 1);
      }, 5000);
    };

    indicators.forEach((indicator) => {
      indicator.addEventListener('click', (e) => {
        clearInterval(autoAdvance);
        const slideIndex = parseInt(e.target.getAttribute('data-slide'));
        showSlide(slideIndex);
        startAutoAdvance();
      });
    });

    startAutoAdvance();

    return () => {
      clearInterval(autoAdvance);
      indicators.forEach((indicator) => {
        indicator.removeEventListener('click', () => {});
      });
    };
  }, []);

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
              Welcome to our individual counselling services for adults. Sessions are tailored to 
              support your unique needs and provide a confidential space to explore personal 
              challenges, build self-awareness, and work toward meaningful change at your own pace.
            </p>
            <a href="/services#individual-adults" className="read-more">Read More</a>
          </div>

          <div className="service-card">
            <h3>Individual Counselling (Youth & Adolescents)</h3>
            <p>
              Our individual counselling services for youth and adolescents provide a supportive 
              and age-appropriate space to explore emotions, experiences, and challenges. Sessions 
              are guided with care to promote understanding, resilience, and healthy development.
            </p>
            <a href="/services#individual-youth" className="read-more">Read More</a>
          </div>

          <div className="service-card">
            <h3>Couples Counselling</h3>
            <p>
              Discover the importance of connection and communication in our couples counselling 
              sessions. We offer a supportive and neutral space for partners to explore relationship 
              concerns, strengthen understanding, and work collaboratively toward healthier patterns.
            </p>
            <a href="/services#couples-counselling" className="read-more">Read More</a>
          </div>

          <div className="service-card">
            <h3>Family Counselling</h3>
            <p>
              Family relationships can be complex, and our family counselling services are designed 
              to support open communication, understanding, and growth within the family system. 
              Sessions focus on strengthening relationships while respecting each family member’s perspective.
            </p>
            <a href="/services#family-counselling" className="read-more">Read More</a>
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
          <a href="/therapeutic-approach" className="read-more">Read More</a>
        </div>
      </section>

      {/* Meet the Therapist Section */}
      <section className="therapist-section">
        <h2>Meet the Therapist</h2>
        <div className="therapist-content">
          <img src={binaImage} alt="Therapist" className="therapist-image" />
          <div className="therapist-text">
            <p>
              As a dedicated therapist, I am committed to providing compassionate and effective support to my clients. 
              I strive to build a trusting and supportive therapeutic relationship with each individual I work with.
            </p>
            <a href="/therapist" className="read-more">Read More</a>
          </div>
        </div>
      </section>

      {/* Seeking Support Section */}
      <section className="seeking-support-section">
        <h2>Seeking Support</h2>
        <p className="seeking-support-intro">
          Seeking support is an important step towards prioritizing your mental and emotional well-being. 
          Explore our resources to gain valuable insights into managing anxiety, building self-esteem, 
          coping with depression, managing anger, and reducing stress.
        </p>
        <div className="support-circles">
          <div className="support-circle">
            <div className="circle-number">1</div>
            <p className="circle-label">Anxiety</p>
          </div>
          <div className="support-circle">
            <div className="circle-number">2</div>
            <p className="circle-label">Self-Esteem</p>
          </div>
          <div className="support-circle">
            <div className="circle-number">3</div>
            <p className="circle-label">Depression</p>
          </div>
          <div className="support-circle">
            <div className="circle-number">4</div>
            <p className="circle-label">Anger Management</p>
          </div>
          <div className="support-circle">
            <div className="circle-number">5</div>
            <p className="circle-label">Stress</p>
          </div>
        </div>
        <div className="more-resources">
          <a href="#" className="more-resources-link">More Resources</a>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="testimonials-section">
        <div className="testimonials-carousel">
          <div className="testimonial-slide active">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "I am incredibly grateful for the positive impact our therapy sessions have had on my life. 
                The support and guidance I received have been invaluable in my journey towards healing and personal growth."
              </p>
            </div>
            <p className="testimonial-author">Client Testimonial - Robert G. Age 47</p>
          </div>
          <div className="testimonial-slide">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "Working with this therapist has truly transformed my perspective on mental health. 
                I feel heard, supported, and empowered to make positive changes in my life."
              </p>
            </div>
            <p className="testimonial-author">Client Testimonial - Sarah M. Age 32</p>
          </div>
          <div className="testimonial-slide">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "The counseling sessions have provided me with valuable tools and strategies to manage stress and anxiety. 
                I highly recommend this service to anyone seeking professional support."
              </p>
            </div>
            <p className="testimonial-author">Client Testimonial - James T. Age 55</p>
          </div>
        </div>
        <div className="carousel-indicators">
          <button className="indicator active" data-slide="0"></button>
          <button className="indicator" data-slide="1"></button>
          <button className="indicator" data-slide="2"></button>
        </div>
      </section>

      {/* Book a Session CTA Section */}
      <section className="book-session-section">
        <div className="book-session-content">
          <h2>Book a Session Today</h2>
          <p>Contact me to set up your FREE 15 minute telephone consultation</p>
          <a href="/contact" className="session-button">Get Started</a>
        </div>
      </section>
    </div>
  );
}

export default Home;

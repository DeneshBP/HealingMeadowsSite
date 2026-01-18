import '../css/Services.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Services() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a specific service to scroll to
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="services-page-container">
      {/* Page Title Section */}
      <section className="services-page-hero">
        <h1>Our Services</h1>
        <p>Comprehensive counselling and psychotherapy services tailored to your needs</p>
      </section>

      {/* Individual Counselling Adults */}
      <section id="individual-adults" className="service-section service-section-1">
        <div className="service-content">
          <h2>Individual Counselling (Adults)</h2>
          <p>
            Individual counselling for adults offers a confidential and supportive space to explore 
            personal concerns, emotional challenges, and life experiences. Sessions are collaborative 
            and tailored to your unique needs, goals, and circumstances. Therapy may involve exploring 
            thoughts, emotions, patterns, and experiences that are contributing to distress or 
            uncertainty, while working at a pace that feels respectful and manageable.
          </p>
          <p>
            People seek individual counselling for many reasons, including stress, anxiety, low mood, 
            relationship concerns, life transitions, or a desire for greater self-understanding. Therapy 
            focuses on increasing awareness, developing insight, and identifying strategies that support 
            coping and emotional well-being. Care is grounded in evidence-informed approaches and guided 
            by a client-centred, non-judgmental perspective.
          </p>
        </div>
      </section>

      {/* Individual Counselling Youth & Adolescents */}
      <section id="individual-youth" className="service-section service-section-2">
        <div className="service-content">
          <h2>Individual Counselling (Youth & Adolescents)</h2>
          <p>
            Individual counselling for youth and adolescents provides a supportive and age-appropriate 
            environment where young people can explore emotions, experiences, and challenges they may be 
            facing. Sessions are guided with sensitivity to developmental needs and focus on helping youth 
            better understand themselves, their relationships, and their responses to stress or change.
          </p>
          <p>
            Counselling may support concerns such as emotional regulation, self-esteem, school-related stress, 
            family changes, or social challenges. Therapy is collaborative and may involve creative or 
            developmentally appropriate approaches to support communication and engagement. Care is provided 
            with respect for the young person’s voice while also considering the broader family and social 
            context when appropriate.
          </p>
        </div>
      </section>

      {/* Couples Counselling */}
      <section id="couples-counselling" className="service-section service-section-3">
        <div className="service-content">
          <h2>Couples Counselling</h2>
          <p>
            Couples counselling offers a neutral and supportive space for partners to explore relationship 
            concerns and patterns together. Sessions focus on understanding dynamics within the relationship, 
            improving communication, and supporting greater emotional awareness between partners. Therapy is 
            collaborative and guided by the goals identified by the couple.
          </p>
          <p>
            Couples may seek counselling for concerns such as recurring conflict, communication difficulties, 
            life transitions, trust issues, or feelings of disconnection. The therapeutic process emphasizes 
            respectful dialogue, mutual understanding, and exploration of relational patterns. Care is 
            client-centred, evidence-informed, and provided in a confidential and non-judgmental environment.
          </p>
        </div>
      </section>

      {/* Family Counselling */}
      <section id="family-counselling" className="service-section service-section-4">
        <div className="service-content">
          <h2>Family Counselling</h2>
          <p>
            Family counselling provides a collaborative space for families to explore challenges, improve 
            communication, and strengthen relationships within the family system. Sessions focus on understanding 
            family dynamics, addressing patterns of interaction, and supporting healthier ways of relating to one another.
          </p>
          <p>
            Families may seek counselling for concerns such as ongoing conflict, parenting challenges, changes in 
            family structure, or periods of stress and transition. Therapy is tailored to the needs of each family, 
            with attention to individual perspectives and shared goals. The approach is respectful, inclusive, and 
            supportive of growth and understanding within the family unit.
          </p>
        </div>
      </section>

      {/* CRPO Safe */}
      <section className="services-crpo">
        <h2>CRPO Safe</h2>
        <p>Each session is <b>50 minutes</b>. All sessions are confidential and conducted in accordance with privacy 
            and informed consent standards. Clients are provided with information about the limits of
            <b> confidentiality</b> and their rights as part of the consent process. Please note that a <b>cancellation 
            policy</b> applies for missed or late appointments. Receipts for insurance purposes can be provided upon request.</p>
        <Link to="/contact" className="crpo-button">Contact to Book</Link>
      </section>
    </div>
  );
}

export default Services;

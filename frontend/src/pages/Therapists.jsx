import binaImage from "../assets/bina.jpeg";
import "../css/Therapists.css";
import { useEffect } from 'react';

function Therapists() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="therapist-page">
      <section className="therapist-page-hero">
        <h1>Meet the Therapist</h1>
      </section>

      <section className="therapist-header">
        <h2>Bina Persaud RP(Qualifying)</h2>
      </section>

      <section className="therapist-bio">
        <div className="bio-text">
          <p>
            Bina provides counselling and psychotherapy services to individuals and families,
            supporting a range of mental health concerns across different life stages. Her work is
            grounded in a client-centred and integrative approach, drawing from evidence-informed
            modalities such as Cognitive Behavioural Therapy, Mindfulness, Solution-Focused Therapy,
            as well as emotion-focused and spiritually informed perspectives when appropriate.
          </p>

          <p>
            Bina values attending to the whole person within the therapeutic process, recognizing
            the interconnected mental, emotional, somatic, and spiritual aspects of experience. This
            approach supports clients in developing greater self-awareness, understanding their
            concerns more deeply, and accessing their own internal resources.
          </p>

          <p>
            She has a particular interest in exploring how experiences across childhood,
            adolescence, and adulthood can influence emotional well-being. Her work is informed by
            many years of experience as an Early Childhood Educator, which contributes to her
            sensitivity to developmental needs and relational patterns. Bina is an Indo-Caribbean
            woman born and raised in Toronto and is mindful of the role that culture, identity, and
            social context play in mental health. She strives to provide a respectful,
            collaborative, and supportive therapeutic environment for individuals from diverse
            backgrounds.
          </p>
        </div>
      </section>

      <section className="therapist-approach">
        <div className="approach-wrapper">
          <div className="approach-text">
            <p>
              Bina values a client centred and holistic approach to therapy. She provides treatment
              for a variety of mental health issues including anxiety, depression, trauma,
              self-esteem, and relationship/family issues. As a goal orientated therapist, she will
              work with you to become your best possible self.
            </p>
          </div>
          <div className="approach-image">
            <img src={binaImage} alt="Bina Persaud" className="therapist-circle-image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Therapists;

import '../css/TherapeuticApproach.css';
import { useEffect } from 'react';

function TherapeuticApproach() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="therapeutic-approach-container">
      {/* Page Hero Section */}
      <section className="approach-page-hero">
        <h1>Therapeutic Approach</h1>
      </section>

      {/* Main Approach Content */}
      <section className="approach-main-section">
        <div className="approach-main-content">
          <p>
            At Healing Meadows Counselling, therapy is approached as a collaborative and client-centred process 
            that is responsive to each individual's unique experiences, needs, and goals. Bina Persaud works to 
            create a safe, respectful, and supportive space where clients can explore thoughts, emotions, and 
            patterns without judgment.
          </p>
          <p>
            Her work is informed by a range of evidence-based and integrative therapeutic approaches, including 
            Cognitive Behavioural Therapy (CBT), Mindfulness-based approaches, Solution-Focused Therapy, 
            Emotion-Focused perspectives, and spiritually informed approaches when appropriate and aligned with 
            a client's values. These modalities are used flexibly and thoughtfully, with care tailored to each 
            client rather than applying a one-size-fits-all approach.
          </p>
          <p>
            Therapy may focus on increasing self-awareness, understanding emotional and relational patterns, 
            developing coping strategies, and supporting clients as they navigate personal, relational, or 
            life-stage challenges at a pace that feels safe and manageable. The therapeutic process is guided 
            by collaboration, respect, and attention to the whole person within their personal, cultural, and 
            social context.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TherapeuticApproach;

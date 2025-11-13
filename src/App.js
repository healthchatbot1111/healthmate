import "./App.css";

function App() {
  const handleStartConversation = () => {
    const openChat = (retries = 10) => {
      if (window.Chatling && typeof window.Chatling.open === "function") {
        window.Chatling.open();
      } else if (retries > 0) {
        setTimeout(() => openChat(retries - 1), 200);
      }
    };

    openChat();
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          HealthMate<span>AI</span>
        </div>
        <nav className="nav">
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <a href="#safety">Safety</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-text">
            <h1>Your digital health companion.</h1>
            <p>
              HealthMate AI offers friendly, evidence-based guidance for
              everyday health questions, symptom check-ins, mental wellbeing,
              and lifestyle support — without replacing your doctor.
            </p>
            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={handleStartConversation}
              >
                Start a conversation
              </button>
              <span className="subtext">
                Or use the chat bubble at the bottom of the screen.
              </span>
            </div>
          </div>
          <div className="hero-card">
            <h2>What can I help with?</h2>
            <ul>
              <li>🤒 “I have a headache and sore throat…”</li>
              <li>🧠 “I’ve been feeling anxious lately.”</li>
              <li>🍎 “How can I sleep better and eat healthier?”</li>
              <li>💊 “What does this medication generally do?”</li>
            </ul>
            <p className="disclaimer">
              HealthMate AI does <strong>not</strong> provide diagnoses or
              prescriptions. For emergencies, contact your local emergency
              services immediately.
            </p>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <h2>How it works</h2>
          <div className="grid">
            <div className="card">
              <h3>1. Ask a question</h3>
              <p>
                Open the chat widget and describe your symptoms, concern, or
                health goal in your own words.
              </p>
            </div>
            <div className="card">
              <h3>2. Get guided support</h3>
              <p>
                The chatbot asks follow-up questions and offers clear, simple
                information tailored to your situation.
              </p>
            </div>
            <div className="card">
              <h3>3. Know your next step</h3>
              <p>
                Receive suggestions on whether to use self-care, book a
                professional appointment, or seek urgent help.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <h2>Key features</h2>
          <div className="grid">
            <div className="card">
              <h3>Symptom check-ins</h3>
              <p>
                Structured questions that help you understand when symptoms are
                mild, when to monitor, and when to see a professional.
              </p>
            </div>
            <div className="card">
              <h3>Mental wellbeing support</h3>
              <p>
                Gentle, empathetic conversations with practical coping
                strategies and encouragement to seek help when needed.
              </p>
            </div>
            <div className="card">
              <h3>Lifestyle guidance</h3>
              <p>
                Tips for sleep, movement, stress, and nutrition to support your
                everyday health.
              </p>
            </div>
            <div className="card">
              <h3>Medication information</h3>
              <p>
                General explanations of what common medications are used for and
                typical side-effects — without changing your prescription.
              </p>
            </div>
          </div>
        </section>

        <section id="safety" className="section">
          <h2>Safety & ethics</h2>
          <div className="card wide">
            <ul className="bullets">
              <li>
                ❌ No diagnoses, prescriptions, or dose changes — ever. HealthMate
                is for information only.
              </li>
              <li>
                ⚠️ For chest pain, breathing difficulty, severe pain, or suicidal
                thoughts, users are told to contact emergency services
                immediately.
              </li>
              <li>
                🔐 Conversations are intended for educational use and should not
                replace consultation with a qualified health professional.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} HealthMate AI · For educational use only.
        </p>
      </footer>
    </div>
  );
}

export default App;

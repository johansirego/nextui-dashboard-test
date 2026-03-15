import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-content">
          <h1>Next.js Dashboard (Prod Env)</h1>
          <p>Clean, minimal, and ready for experimentation.</p>
          <div className="hero-actions">
            <a className="button" href="#features">
              Explore
            </a>
            <a className="button button-secondary" href="#about">
              About
            </a>
          </div>
        </div>
        <div className="hero-graphic">
          <div className="card">
            <h3>Stats</h3>
            <div className="card-grid">
              <div className="metric">
                <span className="metric-value">1.2k</span>
                <span className="metric-label">Users</span>
              </div>
              <div className="metric">
                <span className="metric-value">87%</span>
                <span className="metric-label">Uptime</span>
              </div>
              <div className="metric">
                <span className="metric-value">24</span>
                <span className="metric-label">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <h2>Features</h2>
        <div className="grid">
          <div className="card">
            <h3>Simple Setup</h3>
            <p>Start quickly with a minimal, clean configuration.</p>
          </div>
          <div className="card">
            <h3>Fast Refresh</h3>
            <p>Instantly see changes while editing code.</p>
          </div>
          <div className="card">
            <h3>Fully Custom</h3>
            <p>Modify the UI however you like without extra dependencies.</p>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>
          This is a lightweight Next.js starter that avoids heavy UI libraries. It uses
          basic React and CSS for ease of customization.
        </p>
      </section>
    </main>
  );
};

export default Home;

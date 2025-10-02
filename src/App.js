import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="token-logo">
              <div className="logo-circle">
                <span className="token-symbol">⚡</span>
              </div>
            </div>
            <h1 className="hero-title">
              Flash <span className="highlight">USDT</span>
            </h1>
            <p className="hero-subtitle">
              High-Risk, High-Reward Utility Token for Enhanced Gaming & Gambling
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">2:1</span>
                <span className="stat-label">Deposit Ratio</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">USDT</span>
                <span className="stat-label">Base Token</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">Auto</span>
                <span className="stat-label">Burning</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="token-info">
          <div className="container">
            <div className="section-header">
              <h2>Token Information</h2>
              <div className="info-grid">
                <div className="info-item">
                  <h3>Name</h3>
                  <p>Flash USDT</p>
                </div>
                <div className="info-item">
                  <h3>Symbol</h3>
                  <p>USDT</p>
                </div>
                <div className="info-item">
                  <h3>Type</h3>
                  <p>Utility / Gambling Token</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="purpose-section">
          <div className="container">
            <h2>Purpose & Utility</h2>
            <div className="purpose-content">
              <p className="purpose-description">
                Flash USDT is designed as a high-risk, high-reward utility token that enhances gaming and gambling experiences. 
                Users can deposit standard Tether (USDT) and receive Flash USDT at a 2:1 ratio (double the deposit). 
                These tokens can then be used within supported gambling platforms, creating a fast-paced, reward-driven ecosystem.
              </p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">💰</div>
                <h3>Deposit & Multiply</h3>
                <p>Users deposit Tether (USDT) and receive double the amount in Flash USDT.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔥</div>
                <h3>Play & Burn</h3>
                <p>Tokens are consumed automatically during gameplay and betting, maintaining scarcity.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔄</div>
                <h3>Redeemable Value</h3>
                <p>Remaining Flash USDT can be exchanged back into Tether USDT at the end of gameplay.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📉</div>
                <h3>Deflationary Mechanism</h3>
                <p>As tokens are continually burnt, the circulating supply decreases, sustaining value pressure.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div className="container">
            <h2>Vision</h2>
            <div className="vision-content">
              <p className="vision-description">
                Flash USDT aims to merge the stability of Tether with the excitement of gambling, 
                offering players amplified opportunities while keeping tokenomics sustainable through 
                automatic burning and limited redemption.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Experience Flash USDT?</h2>
              <p>Join the high-risk, high-reward ecosystem and amplify your gaming experience.</p>
              <div className="cta-buttons">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Flash USDT</h3>
              <p>Enhanced Gaming & Gambling Token</p>
            </div>
            <div className="footer-disclaimer">
              <p>
                <strong>Risk Warning:</strong> Flash USDT is a high-risk token designed for gambling and gaming purposes. 
                Please gamble responsibly and only invest what you can afford to lose.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Flash USDT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

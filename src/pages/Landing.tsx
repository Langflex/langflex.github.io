import React from "react";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-wrapper">
            <img
              src="/lang Flex Logo.svg"
              alt="LangFlex Logo"
              className="logo"
            />
          </div>

          <nav className="nav-menu gg_men">
            <NavLink to="/" end className="nav-link">
              🚀 Sign up for early access
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Landing Main */}
      <main className="landing">
        {/* Hero Section */}
        <section className="hero fade-in">
          <h1>Translate Any File. Any Language. For Free. with AI</h1>

          {/* Signup Form */}
          <div className="signup-form">
            <iframe
              src="https://embeds.beehiiv.com/75645677-e665-4bf5-b9b5-07ea168e098e"
              height="300"
              width="100%"
              style={{
                border: "none",
                backgroundColor: "transparent",
                borderRadius: "8px",
              }}
              title="Early Access Signup"
            ></iframe>
          </div>

          <p className="small">
            Instant access once we launch. No spam. No fees. Just faster
            translations.
          </p>
        </section>

        {/* Bonus Section */}
        <section className="bonus fade-in">
          <h2>🏰 Bonus for Early Users!</h2>
          <p>
            Sign up now and unlock 2× faster translations with your own API key!
          </p>
        </section>
        {/* Demo Video Section */}
        <section
          className="demo fade-in"
          style={{
            marginTop: "25px",
          }}
        >
          <iframe
            width="370px"
            height="220px"
            src="https://www.youtube.com/embed/CJyefZYkaPM"
            title="LangFlex Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "5px",
              maxWidth: "800px",
              marginTop: "20px",
            }}
          ></iframe>
        </section>
        {/* Features Section */}
        <section className="features fade-in">
          <h2>Why LangFlex?</h2>
          <div className="feature-list">
            <div className="feature">
              🚀 Upload and translate any file format instantly.
            </div>
            <div className="feature">
              🌍 Translate into 100+ languages, free forever.
            </div>
            <div className="feature">
              🔐 Your files stay private and secure.
            </div>
            <div className="feature">
              🎯 Fast, simple, and effortless to use.
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer fade-in">
          <p>Made with ❤️ by LangFlex • © 2025</p>
        </footer>
      </main>
    </div>
  );
}

export default Landing;

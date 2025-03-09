import React from "react";
import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="logo">Polygunum.Online</div>
          <div className="nav-links">
            <a href="#">Whitepaper</a>
            <a href="#">Token Sale</a>
          </div>
        </nav>
        <div className="hero-content">
          <h1>Survival MMORPG with real-money</h1>
          <p>
            Blockchain game, where everyone can buy and sell in-game items, own
            territories, unite into communities and mine coins.
          </p>
          <button className="cta">Get Started</button>
        </div>
      </header>

      {/* Token Sale Info */}
      <section className="token-sale">
        <div className="token-stage">Private Round 0.05$</div>
        <div className="token-stage">Community round ICO 0.2$-0.3$</div>
        <div className="token-stage">Listing on exchange</div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Discover features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Marketplace</h3>
            <p>In-game marketplace where players can buy, sell items and NFT territories.</p>
            <a href="#">Know more →</a>
          </div>
          <div className="feature-card">
            <h3>Farm, PVE, PVP zones</h3>
            <p>Open world with different modes. You decide how to spend your time.</p>
            <a href="#">Know more →</a>
          </div>
          <div className="feature-card">
            <h3>Crafting & Mining</h3>
            <p>Mining coins and resources. Crafting game assets.</p>
            <a href="#">Know more →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

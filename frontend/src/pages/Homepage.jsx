import React from "react";
import TradingViewChart from "../components/TradingViewChart";
import "../styles/main.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Trang chính TradingView</h1>
      </header>

      <main className="main-content">
        <section className="chart-section">
          <TradingViewChart />
        </section>
      </main>

      <footer className="footer">
        <p>© 2024 TradingView Clone</p>
      </footer>
    </div>
  );
};

export default HomePage;

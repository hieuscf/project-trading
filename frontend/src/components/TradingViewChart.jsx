// src/components/TradingViewChart.js
import react from "react";
import TradingViewWidget from "react-tradingview-widget";

const TradingViewChart = () => {
  return (
    <div className="tradingview-chart">
      <TradingViewWidget
        symbol="NASDAQ:AAPL" // Thay đổi mã chứng khoán nếu cần
        interval="D"
        timezone="Etc/UTC"
        theme="light" // Bạn có thể đổi thành "dark" nếu thích
        locale="en"
        autosize
      />
    </div>
  );
};

export default TradingViewChart;

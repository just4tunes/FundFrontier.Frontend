import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useEffect } from "react";

function MainLayout() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500 Index",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100 Cash CFD",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "light",
      locale: "en",
    });
    document
      .getElementById("tradingview-widget-container")
      ?.appendChild(script);

    // Cleanup
    return () => {
      document
        .getElementById("tradingview-widget-container")
        ?.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        id="tradingview-widget-container"
        className="tradingview-widget-container z-10 relative"
      ></div>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
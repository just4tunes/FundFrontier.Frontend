import React, { useEffect } from 'react';

const Trading = () => {
  useEffect(() => {
    const widgetConfigs = [
      { id: 'widget-container-1', symbol: 'FX:EURUSD' },
      { id: 'widget-container-2', symbol: 'BITSTAMP:BTCUSD' },
      { id: 'widget-container-3', symbol: 'FOREXCOM:NSXUSD' },
      { id: 'widget-container-4', symbol: 'FX_IDC:USDJPY' },
      { id: 'widget-container-5', symbol: 'BINANCE:ETHUSDT' },
      { id: 'widget-container-6', symbol: 'BINANCE:ADAUSDT' },
      { id: 'widget-container-7', symbol: 'NASDAQ:AAPL' },
      { id: 'widget-container-8', symbol: 'NYSE:AMZN' },
    ];

    widgetConfigs.forEach((config) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: config.symbol,
        width: '100%',
        height: '100%',
        isTransparent: false,
        colorTheme: 'dark',
        locale: 'en',
      });

      const container = document.getElementById(config.id);
      if (container) {
        container.appendChild(script);
      }
    });
  }, []);

  return (
    <div className="">
      <div className="custom-margin pt-10 h-[73vh] overflow-hidden md:h-[40vh]  md:mt-[5vh] lg:h-[80vh] ">
        <span className="text-[#a8a9b3] font-semibold mb-12 text-[16px] leading-7 2xl:ml-[16vh] ">
          Forex Trading
        </span>
        <h2 className="text-[#fff] font-bold text-[35px] leading-10 2xl:ml-[16vh] ">
          Top <span className="text-red-500">Pricing</span> List in Market
        </h2> 
        <div className="relative overflow-hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 2xl:w-[80%] 2xl:ml-[16vh] p- ">
                    <div id="widget-container-1" className="tradingview-widget-container w-full h-full">
                        {/* This div will be replaced by the TradingView widget for symbol FX:EURUSD */}
                    </div>
                    <div id="widget-container-2" className="tradingview-widget-container w-full h-full">
                        {/* This div will be replaced by the TradingView widget for symbol BITSTAMP:BTCUSD */}
                    </div>
                    <div id="widget-container-3" className="tradingview-widget-container w-full h-full">
                        {/* This div will be replaced by the TradingView widget for symbol FOREXCOM:NSXUSD */}
                    </div>
                    <div id="widget-container-4" className="tradingview-widget-container w-full h-full">
                        {/* This div will be replaced by the TradingView widget for symbol FX_IDC:USDJPY */}
                    </div>
                    <div id="widget-container-5" className="tradingview-widget-container w-full h-full">
                        {/* This div will be replaced by the TradingView widget for symbol BINANCE:ETHUSDT */}
                    </div>
                    <div id="widget-container-6" className="tradingview-widget-container w-full h-full">
                        {/* This div will be replaced by the TradingView widget for symbol BINANCE:ADAUSDT */}
                    </div>
                    <div id="widget-container-7" className="tradingview-widget-container w-full h-full">
                        {/* This div will be replaced by the TradingView widget for symbol NASDAQ:AAPL */}
                    </div>
                    <div id="widget-container-8" className="tradingview-widget-container w-full h-full">
                        {/* This div will be replaced by the TradingView widget for symbol NYSE:AMZN */}
                    </div>
                </div>
      </div>
    </div>
  );
};

export default Trading;




// grid grid-cols-2 md:grid-cols-4

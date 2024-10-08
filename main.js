const styles = `
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        display: grid;
        grid-template-rows: 50px 1fr;
        height: 100vh;
        background-color: #1e1e1e;
        color: #fff;
        text-align: center;
    }

    header {
        grid-row: 1 / 2;
        background-color: #2c2c2c;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        font-size: 18px;
        font-weight: bold;
    }

    main {
        grid-row: 2 / 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .chart-container {
        position: relative;
        width: 80%;
        max-width: 1200px;
        height: 80%;
        background-color: #333;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .stock-id {
        position: absolute;
        top: 50px;
        left: 25px;
        font-size: 20px;
        font-weight: bold;
        color: white;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const header = document.createElement('header');
header.textContent = 'BVGR Enterprises Stock Exchange Options';
document.body.appendChild(header);

const main = document.createElement('main');
document.body.appendChild(main);

const chartContainer = document.createElement('div');
chartContainer.className = 'chart-container';
main.appendChild(chartContainer);

const stockId = document.createElement('div');
stockId.className = 'stock-id';
stockId.textContent = 'BVGR Enterprises - BVGRE';
chartContainer.appendChild(stockId);

const tradingViewContainer = document.createElement('div');
tradingViewContainer.className = 'tradingview-widget-container';
tradingViewContainer.style.height = '100%';
tradingViewContainer.style.width = '100%';

const widgetDiv = document.createElement('div');
widgetDiv.className = 'tradingview-widget-container__widget';
widgetDiv.style.height = 'calc(100% - 32px)';
widgetDiv.style.width = '100%';
tradingViewContainer.appendChild(widgetDiv);

const copyrightDiv = document.createElement('div');
copyrightDiv.className = 'tradingview-widget-copyright';

const copyrightLink = document.createElement('a');
copyrightLink.href = 'https://www.tradingview.com/';
copyrightLink.rel = 'noopener nofollow';
copyrightLink.target = '_blank';

const span = document.createElement('span');
span.className = 'blue-text';
span.textContent = 'Track all markets on TradingView';

copyrightLink.appendChild(span);
copyrightDiv.appendChild(copyrightLink);
tradingViewContainer.appendChild(copyrightDiv);

chartContainer.appendChild(tradingViewContainer);

const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
script.async = true;

const config = {
    "autosize": true,
    "symbol": "NASDAQ:AAPL",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "hide_top_toolbar": true,
    "hide_legend": true,
    "allow_symbol_change": false,
    "save_image": false,
    "calendar": false,
    "hide_volume": true,
    "support_host": "https://www.tradingview.com"
};

script.innerHTML = JSON.stringify(config);

tradingViewContainer.appendChild(script);



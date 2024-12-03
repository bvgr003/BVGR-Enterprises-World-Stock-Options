const styles = `
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        display: grid;
        grid-template-rows: 50px 1fr;
        height: 100vh;
        background-color: darkslategray;
        color: #fff;
        text-align: center;
    }

    header {
        grid-row: 1 / 2;
        background-color: transparent;
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

    .corner-logo {
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        z-index: 9999; 
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const header = document.createElement('header');
header.textContent = '';
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
span.textContent = '';

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

const cornerLink = document.createElement('a');
cornerLink.href = "https://bvgr003.github.io/BVGR-Enterprises/bvgr-enterprises-private-stock-options.html";
cornerLink.target = "_blank";
const cornerLogo = document.createElement('img');
cornerLogo.src = "Logos/bvgre.png";
cornerLogo.alt = "BVGR Logo";
cornerLogo.className = "corner-logo";
cornerLogo.style.position = "absolute";
cornerLogo.style.top = "380px";
cornerLogo.style.left = "25px";
cornerLogo.style.width = "50px";
cornerLogo.style.height = "50px";
cornerLogo.style.border = "2px solid silver";
cornerLogo.style.borderRadius = "10px";
cornerLogo.style.zIndex = "999";
cornerLink.appendChild(cornerLogo); 
chartContainer.appendChild(cornerLink); 



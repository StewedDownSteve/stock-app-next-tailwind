// This is the function to fetch API from alphaVantage. First test is just to fetch current price. Can expand from there.
// API key/ variable are in the .env.local file

export async function fetchStockData(symbol) {
    const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
    const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`);
    const data = await response.json();
    return data;
  }
  
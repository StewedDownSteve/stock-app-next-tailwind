// This is the function to fetch API from alphaVantage. First test is just to fetch current price. Can expand from there.
// API key/ variable are in the .env.local file
export async function fetchStockData(symbol) {
  const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

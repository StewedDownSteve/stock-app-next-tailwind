
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import StockChart from '../components/StockChart';
import StockInfo from '../components/StockInfo';

const HomePage: React.FC = () => {
  const [stockSymbol, setStockSymbol] = useState<string>('');
  const [stockInfo, setStockInfo] = useState<any>(null);
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (symbol: string) => {
    setLoading(true);
    setStockInfo(null);
    setChartData(null);

    try {
      // Fetch stock information
      const infoResponse = await fetch(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`
      );
      const infoData = await infoResponse.json();
      const info = infoData['Global Quote'];

      if (info) {
        setStockInfo({
          symbol: info['01. symbol'],
          open: parseFloat(info['02. open']),
          high: parseFloat(info['03. high']),
          low: parseFloat(info['04. low']),
          price: parseFloat(info['05. price']),
          volume: parseInt(info['06. volume']),
          latestTradingDay: info['07. latest trading day'],
          previousClose: parseFloat(info['08. previous close']),
          change: parseFloat(info['09. change']),
          changePercent: info['10. change percent'],
        });
      }

      // Fetch chart data (placeholder)
      // You can implement actual chart data fetching here
      setChartData(null); // Set to actual data when ready
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <SearchBar onSearch={handleSearch} />

      {stockInfo && (
        <>
          <StockInfo info={stockInfo} loading={loading} />
          <StockChart data={chartData} loading={loading} />
        </>
      )}
    </Layout>
  );
};

export default HomePage;



// State Management: Using React hooks to manage the state of the stock information and loading states.
// handleSearch Function: Fetches stock data from Alpha Vantage API when a search is performed.
// Environment Variables: Uses NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY stored securely in .env.local.
// Conditional Rendering: Displays StockInfo and StockChart only when data is available.

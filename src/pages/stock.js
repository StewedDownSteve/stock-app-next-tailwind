import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../utils/alphaVantage';
import Layout from '../components/Layout';
import StockTable from '../components/StockTable';

export default function StockPage() {
  const [stockData, setStockData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchStockData('AAPL');
        if (!data || !data['Time Series (Daily)']) {
          throw new Error('Invalid data format');
        }
        const timeSeries = data['Time Series (Daily)'];
        
        // Convert the time series data to an array of stock objects
        const processedData = Object.keys(timeSeries)
          .slice(0, 30) // Fetch the last 30 days of data
          .map(date => ({
            name: 'AAPL', // Since you're fetching AAPL data
            price: parseFloat(timeSeries[date]['4. close']),
            quantity: 10, // This could be a dynamic value if you have the data
            total: parseFloat(timeSeries[date]['4. close']) * 10 // Price * quantity
          }));
        
        // Calculate total value
        const totalValue = processedData.reduce((acc, stock) => acc + stock.total, 0);

        setStockData({ stocks: processedData, totalValue });
      } catch (err) {
        console.error(err);
        setError('Failed to fetch stock data');
      }
    }

    getData();
  }, []);

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">AAPL Stock Overview</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {stockData.stocks ? (
        <StockTable stocks={stockData.stocks} totalValue={stockData.totalValue} />
      ) : (
        <p>Loading stock data...</p>
      )}
    </Layout>
  );
}

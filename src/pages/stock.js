import { fetchStockData } from '../utils/alphaVantage';

//  import the fetchStockData function from the alphaVantage.js file.


export async function getServerSideProps() {
    const symbol = 'AAPL'; // You can change this to any stock symbol you'd like to track
    const data = await fetchStockData(symbol);
  
    return {
      props: { // This is where you define the props that the component will receive
        stockData: data,
      },
    };
  }
  
  export default function StockPage({ stockData }) {
    return (
      <div>
        <h1>Stock Data for AAPL</h1>
        <pre>{JSON.stringify(stockData, null, 2)}</pre>
      </div>
    );
  }




// Use the getServerSideProps function to fetch the stock data when the page is requested. This ensures that the data is fetched on the server and passed to the page as props.

import React from 'react';

interface StockInfoProps {
  info: {
    symbol: string;
    open: number;
    high: number;
    low: number;
    price: number;
    volume: number;
    latestTradingDay: string;
    previousClose: number;
    change: number;
    changePercent: string;
  } | null;
  loading: boolean;
}

const StockInfo: React.FC<StockInfoProps> = ({ info, loading }) => {
  return (
    <div className="w-full bg-white shadow rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Information</h2>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-gray-500">Loading stock information...</p>
        </div>
      ) : info ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Symbol:</p>
            <p className="text-gray-800 font-medium">{info.symbol}</p>
          </div>
          <div>
            <p className="text-gray-600">Open:</p>
            <p className="text-gray-800 font-medium">${info.open.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-600">High:</p>
            <p className="text-gray-800 font-medium">${info.high.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-600">Low:</p>
            <p className="text-gray-800 font-medium">${info.low.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-600">Price:</p>
            <p className="text-gray-800 font-medium">${info.price.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-600">Volume:</p>
            <p className="text-gray-800 font-medium">{info.volume.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-600">Latest Trading Day:</p>
            <p className="text-gray-800 font-medium">{info.latestTradingDay}</p>
          </div>
          <div>
            <p className="text-gray-600">Previous Close:</p>
            <p className="text-gray-800 font-medium">${info.previousClose.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-600">Change:</p>
            <p className={`font-medium ${info.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {info.change.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Change Percent:</p>
            <p className={`font-medium ${info.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {info.changePercent}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-32">
          <p className="text-gray-500">No information available</p>
        </div>
      )}
    </div>
  );
};

export default StockInfo;




// Loading State: Indicates data is being fetched.
// Data Display: Shows key stock information in a responsive grid layout.
// No Data State: Informs the user when no data is available.
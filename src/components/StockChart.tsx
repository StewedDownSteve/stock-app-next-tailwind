
import React from 'react';

interface StockChartProps {
  data: any; // Replace 'any' with appropriate type when integrating chart library
  loading: boolean;
}

const StockChart: React.FC<StockChartProps> = ({ data, loading }) => {
  return (
    <div className="w-full bg-white shadow rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Stock Price Chart</h2>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">Loading chart...</p>
        </div>
      ) : data ? (
        <div className="h-64 flex justify-center items-center">
          {/* Chart will be rendered here */}
          <p className="text-gray-500">Chart goes here</p>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">No data available</p>
        </div>
      )}
    </div>
  );
};

export default StockChart;



// Loading State: Displays a loading message while data is being fetched.
// Data State: Placeholder message where the chart will be rendered.
// No Data State: Message indicating no data is available.

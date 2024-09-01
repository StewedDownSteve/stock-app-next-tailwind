// src/components/StockTable.tsx
import React from 'react';

interface Stock {
  name: string;
  price: number;
  quantity: number;
  total: number;
}

interface StockTableProps {
  stocks: Stock[];
  totalValue: number;
}

const StockTable: React.FC<StockTableProps> = ({ stocks, totalValue }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">Stock Name</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Total</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {stocks.map((stock, index) => (
              <tr key={index} className="border-b border-blue-gray-200">
                <td className="py-3 px-4">{stock.name}</td>
                <td className="py-3 px-4">${stock.price.toFixed(2)}</td>
                <td className="py-3 px-4">{stock.quantity}</td>
                <td className="py-3 px-4">${stock.total.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-800">Edit</a>
                </td>
              </tr>
            ))}
            <tr className="border-b border-blue-gray-200">
              <td className="py-3 px-4 font-medium">Total Wallet Value</td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4 font-medium">${totalValue.toFixed(2)}</td>
              <td className="py-3 px-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTable;

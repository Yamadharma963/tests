import React from "react";

export default function History() {
  return (
    <div className="bg-indigo-500 rounded-xl w-full m-20">
      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-full">
          <h2 className="text-2xl font-bold mb-4">Monthly Report</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-gray-100 p-2">#</th>
                  <th className="bg-gray-100 p-2">Product</th>
                  <th className="bg-gray-100 p-2">Price</th>
                  <th className="bg-gray-100 p-2">Quantity</th>
                  <th className="bg-gray-100 p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">1</td>
                  <td className="p-2">Product 1</td>
                  <td className="p-2">$10.00</td>
                  <td className="p-2">3</td>
                  <td className="p-2">$30.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">2</td>
                  <td className="p-2">Product 2</td>
                  <td className="p-2">$20.00</td>
                  <td className="p-2">2</td>
                  <td className="p-2">$40.00</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">3</td>
                  <td className="p-2">Product 3</td>
                  <td className="p-2">$15.00</td>
                  <td className="p-2">5</td>
                  <td className="p-2">$75.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

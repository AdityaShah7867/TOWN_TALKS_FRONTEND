import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const Table = () => {
  // Define state to store payments data
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Define a function to fetch payments data from the API
    const fetchPayments = async () => {
      try {
        // Make a GET request to fetch payments data
        const response = await axios.get(`http://localhost:4000/api/poll/getpayment/65deb210e0289a6f4049d72f`); // Assuming userId is defined somewhere
        setPayments(response.data); // Set the payments data in state
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    // Call the fetchPayments function
    fetchPayments();
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Amount
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map over payments array to generate table rows */}
                  {payments.map((payment, index) => (
                    <tr key={payment._id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Abhay {/* Assuming you have a 'name' property in your payment object */}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {payment.paymentAmount}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        @{payment.paymentStatus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

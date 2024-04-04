import React from 'react';

const PaymentPage = () => {
  // Function to generate options for months
  const generateMonthOptions = () => {
    const months = Array.from({ length: 12 }, (_, i) => i + 1); // Generates numbers from 1 to 12
    return months.map((month) => (
      <option key={month} value={month}>{month}</option>
    ));
  };

  // Function to generate options for years
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear + i); // Generates 10 years starting from the current year
    return years.map((year) => (
      <option key={year} value={year}>{year}</option>
    ));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat">
      <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-red-600 mb-6">Payment</h3>

        <div className="mb-6">
          <label htmlFor="nameOnCard" className="block font-semibold mb-1">Name On Card:</label>
          <input type="text" id="nameOnCard" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" placeholder="Enter card name" required />
        </div>

        <div className="mb-6">
          <label htmlFor="cardNumber" className="block font-semibold mb-1">Credit Card Number:</label>
          <input type="text" id="cardNumber" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" placeholder="1111-2222-3333-4444" maxLength="19" required />
        </div>

        <div className="mb-6 flex">
          <div className="mr-4">
            <label htmlFor="expMonth" className="block font-semibold mb-1">Exp Month:</label>
            <select id="expMonth" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" required>
              <option value="">Choose month</option>
              {generateMonthOptions()}
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="expYear" className="block font-semibold mb-1">Exp Year:</label>
            <select id="expYear" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" required>
              <option value="">Choose year</option>
              {generateYearOptions()}
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="cvv" className="block font-semibold mb-1">CVV</label>
          <input type="number" id="cvv" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" placeholder="1234" required />
        </div>

        <input type="submit" value="Proceed to Checkout" onClick={() => alert('Payment Successful')} className="w-full bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 cursor-pointer" />
      </form>
    </div>
  );
};

export default PaymentPage;

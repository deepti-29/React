import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0; // Retrieve total amount

  const handlePayment = (e) => {
    e.preventDefault();
    if (cardNumber && expiryDate && cvv) {
      navigate('/payment-success'); // Redirect to Payment Success Page
    } else {
      alert('Please fill in all payment details.');
    }
  };

  return (
    <div className="container mt-4">
      <h1>Payment</h1>
      <p>Total Amount to Pay: ${totalAmount.toFixed(2)}</p> {/* Display total amount */}
      <form onSubmit={handlePayment}>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cvv" className="form-label">CVV</label>
          <input
            type="text"
            className="form-control"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
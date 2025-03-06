import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/products'); // Redirect to Product List Page
  };

  const handleLogout = () => {
    navigate('/login'); // Redirect to Login Page
  };

  return (
    <div className="container mt-4 text-center">
      <h1>Payment Successful!</h1>
      <p>Thank you for shopping with us. We hope to see you again soon!</p>
      <button className="btn btn-primary me-2" onClick={handleContinueShopping}>
        Continue Shopping
      </button>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default PaymentSuccess;
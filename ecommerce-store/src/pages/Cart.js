import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, getTotalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    if (cart.length > 0) {
      navigate('/payment'); // Redirect to Payment Page
    } else {
      alert('Your cart is empty. Add products to proceed to payment.');
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((product, index) => (
              <li key={index} className="list-group-item">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '50px', marginRight: '10px' }}
                />
                {product.name} - ${product.price}
                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <h4>Total Amount: ${getTotalAmount().toFixed(2)}</h4> {/* Display total amount */}
          </div>
        </>
      )}
      <button
        className="btn btn-primary mt-3"
        onClick={handleProceedToPayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Cart;
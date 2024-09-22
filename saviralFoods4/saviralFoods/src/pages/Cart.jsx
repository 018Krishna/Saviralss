import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Logic for checkout can be added here
    alert("Proceeding to checkout!");
  };

  return (
    <div style={styles.cartContainer}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div style={styles.cartItemsContainer}>
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img src={item.img} alt={item.namess} style={styles.cartItemImage} />
              <div style={styles.cartItemDetails}>
                <div style={styles.cartItemName}>{item.namess}</div>
                <div style={styles.cartItemPrice}>${item.pricess.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={styles.checkoutContainer}>
        <button style={styles.checkoutButton} onClick={handleCheckout}>
          Proceed to Checkout
        </button>
        <button style={styles.continueShoppingButton} onClick={() => navigate('/')}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;

const styles = {
  cartContainer: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  cartItemsContainer: {
    margin: '20px 0',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  },
  cartItemImage: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
  },
  cartItemDetails: {
    flex: '1',
    marginLeft: '10px',
    textAlign: 'left',
  },
  cartItemName: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: '14px',
    color: '#555',
  },
  checkoutContainer: {
    marginTop: '20px',
  },
  checkoutButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '10px',
    transition: 'background-color 0.3s ease',
  },
  continueShoppingButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
};

import React from 'react';

const Footer = () => {
  const styles = {
    footerContainer: {
      backgroundColor: '#f5f5f5',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
    },
    newsletterContainer: {
      backgroundColor: '#1f1f1f',
      color: '#fff',
      padding: '30px 20px',
      textAlign: 'center',
      borderRadius: '8px',
      marginBottom: '40px',
    },
    newsletterTitle: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    newsletterInputContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
    },
    input: {
      padding: '10px',
      borderRadius: '50px',
      border: 'none',
      outline: 'none',
      width: '300px',
      marginRight: '10px',
      color:'black'
    },
    subscribeButton: {
      padding: '10px 20px',
      backgroundColor: '#7BB241',
      color: '#fff',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
    },
    socialLinks: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    socialIcon: {
      color: '#fff',
      fontSize: '18px',
      textDecoration: 'none',
    },
    footerBottom: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      color: '#333',
      paddingTop: '20px',
      borderTop: '1px solid #e0e0e0',
    },
    column: {
      marginBottom: '20px',
      width: '200px',
    },
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    link: {
      color: '#7a7a7a',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '5px',
    },
    contact: {
      marginBottom: '10px',
      color: '#333',
    },
    paymentMethods: {
      display: 'flex',
      gap: '10px',
      marginTop: '10px',
    },
    appDownload: {
      display: 'flex',
      gap: '10px',
    },
  };

  return (
    <div style={styles.footerContainer}>
      {/* Newsletter Section */}
      <div style={styles.newsletterContainer}>
        <h2 style={styles.newsletterTitle}>Subscribe our Newsletter</h2>
        
        <div style={styles.newsletterInputContainer}>
          <input type="email" placeholder="Your email address" style={styles.input} />
          <button style={styles.subscribeButton}>Subscribe</button>
        </div>
        <div style={styles.socialLinks}>
  <a href="https://facebook.com" style={styles.socialIcon}>
    <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
  </a>
  <a href="https://twitter.com" style={styles.socialIcon}>
    <i className="fab fa-twitter"></i> {/* Twitter icon */}
  </a>
  <a href="https://instagram.com" style={styles.socialIcon}>
    <i className="fab fa-instagram"></i> {/* Instagram icon */}
  </a>
  <a href="https://pinterest.com" style={styles.socialIcon}>
    <i className="fab fa-pinterest"></i> {/* Pinterest icon */}
  </a>
</div>

      </div>

      {/* Footer Links Section */}
      <div style={styles.footerBottom}>
        <div style={styles.column}>
          <div style={styles.title}>Saviral Foods</div>
          <p style={styles.contact}>
            (91) 9971403821  <br />
            9667885503 <br />
            saviralfoods@gmail.com
          </p>
        </div>
        <div style={styles.column}>
          <div style={styles.title}>My Account</div>
          <a href="/" style={styles.link}>Order History</a>
          <a href="/" style={styles.link}>Shopping Cart</a>
          <a href="/" style={styles.link}>Wishlist</a>
        </div>
        <div style={styles.column}>
          <div style={styles.title}>Helps</div>
          <a href="/" style={styles.link}>Contact</a>
          <a href="/" style={styles.link}>FAQ</a>
          <a href="/" style={styles.link}>Terms & Conditions</a>
          <a href="/" style={styles.link}>Privacy Policy</a>
        </div>
        <div style={styles.column}>
          <div style={styles.title}>Proxy</div>
          <a href="/" style={styles.link}>Shop</a>
          <a href="/" style={styles.link}>Product</a>
          <a href="/" style={styles.link}>Track Order</a>
        </div>
        <div style={styles.column}>
  <div style={styles.title}>Download Mobile App</div>
  <div style={styles.appDownload}>
    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
      <img src="https://via.placeholder.com/100x40?text=App+Store" alt="App Store" />
    </a>
    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
      <img src="https://via.placeholder.com/100x40?text=Google+Play" alt="Google Play" />
    </a>
  </div>
  <div style={styles.paymentMethods}>
    <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">
      <img src="https://via.placeholder.com/40x20?text=Visa" alt="Visa" />
    </a>
    <a href="https://www.mastercard.com" target="_blank" rel="noopener noreferrer">
      <img src="https://via.placeholder.com/40x20?text=MasterCard" alt="MasterCard" />
    </a>
    <a href="https://www.paypal.com" target="_blank" rel="noopener noreferrer">
      <img src="https://via.placeholder.com/40x20?text=PayPal" alt="PayPal" />
    </a>
    <a href="https://www.secure.com" target="_blank" rel="noopener noreferrer">
      <img src="https://via.placeholder.com/40x20?text=Secure" alt="Secure" />
    </a>
  </div>
</div>

      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('dashboard'); // State to control which section is active

  const containerStyle = {
    display: 'flex',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
  };

  const sidebarStyle = {
    width: '20%',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.1)',
    borderRadius: '10px',
  };

  const contentStyle = {
    width: '75%',
    marginLeft: '20px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.1)',
  };

  const navItemStyle = {
    marginBottom: '20px',
    cursor: 'pointer',
    padding: '10px 15px',
    borderRadius: '8px',
  };

  const navActiveItemStyle = {
    ...navItemStyle,
    backgroundColor: '#e9f5ec',
    color: '#28a745',
    fontWeight: 'bold',
  };

  const profileImageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const orderTableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const tableHeaderStyle = {
    backgroundColor: '#f1f1f1',
    textAlign: 'left',
    padding: '10px',
    fontWeight: 'bold',
  };

  const tableRowStyle = {
    borderBottom: '1px solid #e0e0e0',
  };

  const tableCellStyle = {
    padding: '10px',
  };

  // Function to handle navigation clicks
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar Navigation */}
      <div style={sidebarStyle}>
        <h4>Navigation</h4>
        <div
          onClick={() => handleNavClick('dashboard')}
          style={activeSection === 'dashboard' ? navActiveItemStyle : navItemStyle}
        >
          Dashboard
        </div>
        <div
          onClick={() => handleNavClick('orderHistory')}
          style={activeSection === 'orderHistory' ? navActiveItemStyle : navItemStyle}
        >
          Order History
        </div>
        <div
          onClick={() => handleNavClick('wishlist')}
          style={activeSection === 'wishlist' ? navActiveItemStyle : navItemStyle}
        >
          Wishlist
        </div>
        <div style={navItemStyle}>Shopping Cart</div>
        <div style={navItemStyle}>Settings</div>
        <div style={navItemStyle}>Log Out</div>
      </div>

      {/* Main Content Area */}
      <div style={contentStyle}>
        {activeSection === 'dashboard' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Profile"
                  style={profileImageStyle}
                />
                <h3>Dianne Russell</h3>
                <button
                  style={{ background: 'none', color: '#28a745', border: 'none', cursor: 'pointer' }}
                >
                  Edit Profile
                </button>
              </div>

              <div style={{ textAlign: 'right' }}>
                <h4>Billing Address</h4>
                <p>Dianne Russell</p>
                <p>1234 Prairie St. Albuquerque, New Mexico 87501</p>
                <p>dianna.russell@gmail.com</p>
                <p>(917) 555-0100</p>
                <button
                  style={{ background: 'none', color: '#28a745', border: 'none', cursor: 'pointer' }}
                >
                  Edit Address
                </button>
              </div>
            </div>
          </>
        )}

        {activeSection === 'orderHistory' && (
          <>
            <h4 style={{ marginTop: '30px' }}>Recent Order History</h4>
            <table style={orderTableStyle}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Order #</th>
                  <th style={tableHeaderStyle}>Date</th>
                  <th style={tableHeaderStyle}>Total</th>
                  <th style={tableHeaderStyle}>Status</th>
                  <th style={tableHeaderStyle}>Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '477A', date: '5 Sep 2020', total: '$250.00', status: 'Processing' },
                  { id: '470B', date: '13 Aug 2020', total: '$150.00', status: 'Completed' },
                  { id: '470C', date: '11 Oct 2020', total: '$300.00', status: 'Completed' },
                  { id: '491B', date: '18 Feb 2021', total: '$120.00', status: 'Completed' },
                  { id: '482D', date: '28 Sep 2020', total: '$450.00', status: 'Completed' },
                ].map((order) => (
                  <tr key={order.id} style={tableRowStyle}>
                    <td style={tableCellStyle}>{order.id}</td>
                    <td style={tableCellStyle}>{order.date}</td>
                    <td style={tableCellStyle}>{order.total}</td>
                    <td style={tableCellStyle}>{order.status}</td>
                    <td style={tableCellStyle}>
                      <a href="#" style={{ color: '#28a745' }}>
                        View Details
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {activeSection === 'wishlist' && (
          <>
            <h4 style={{ marginTop: '30px' }}>Your Wishlist</h4>
            <p>No items in your wishlist yet.</p>
            {/* Add your wishlist items here */}
          </>
        )}
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(100); // Default price filter
  const [selectedQuantity, setSelectedQuantity] = useState(0); // Default quantity filter

  const navigate = useNavigate(); // Add useNavigate to handle navigation

  const containerStyle = {
    display: 'flex',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f8f9fa',
  };

  const sidebarStyle = {
    width: '25%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
  };

  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    width: '75%',
    marginLeft: '20px',
  };

  const filterTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const filterItemStyle = {
    marginBottom: '15px',
    cursor: 'pointer',
  };

  const productCardStyle = {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    backgroundColor: '#fff',
    cursor: 'pointer', // Make product card clickable
  };

  const productImageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const productTitleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const productPriceStyle = {
    color: '#28a745',
    fontSize: '14px',
    marginBottom: '10px',
  };

  // Updated categories
  const categories = ['All', 'Atta', 'Sattu', 'Mustard Oil', 'Rice'];

  // Updated product list with the new categories
  const products = {
    All: [
      { namess: 'MP Regular Atta', pricess: 36 , quantity: 1, image: '/images/atta.png' },
      { namess: 'MP Classic Atta', pricess: 40, quantity: 1, image: '/images/a1.jpg' },
       { namess: 'MP Royal Atta', pricess: 54 , quantity: 1, image: '/images/ata.jpg' },
       { namess: 'Basmati Dubar', pricess: 75, quantity: 1, image: '/images/r2.jpg' },
      { namess: 'Basmati Tibar', pricess: 65, quantity: 1, image: '/images/r4.jpg' },
      { namess: 'Basmati Mogra', pricess: 60, quantity: 1, image: '/images/c3.jpg' },
       { namess: 'Kali Sarson Oil', pricess: 175 , quantity: 1, image: '/images/kalu.jpg' },
      { namess: 'Peeli Sarson Oil', pricess: 190, quantity: 1, image: '/images/oill.jpg' },
      { namess: 'Mustard Oil', pricess: 220, quantity: 1, image: '/images/c4.jpg' },
      { namess: 'Multigrain Atta', pricess: 55, quantity: 1, image: '/images/Multigrainatta.jpg' },
      { namess: 'Digestive Atta', pricess: 62 , quantity: 1, image: '/images/a2.jpg' },
      { namess: 'Diabetic Special Atta', pricess: 68, quantity: 1, image: '/images/a3.jpg' },
      { namess: 'Chana Atta', pricess: 78, quantity: 1, image: '/images/chanaatta.jpeg.jpg' },
      { namess: 'Jau Atta', pricess: 56, quantity: 1, image: '/images/c1.jpg' },
      { namess: 'Chana Sattu', pricess: 140, quantity: 1, image: '/images/sattu.jpg' },
      { namess: 'Jau Sattu', pricess: 120, quantity: 1, image: '/images/sattttu.jpg' },
      { namess: 'Makka Atta', pricess: 44, quantity: 1, image: '/images/a5.jpg' },
      { namess: 'Ragi Atta', pricess: 68, quantity: 1, image: '/images/Ragiatta.jpg' },
      { namess: 'Jowar Atta', pricess: 36 , quantity: 1, image: '/images/a6.jpg' },
      { namess: 'Bajra Atta', pricess: 42, quantity: 1, image: '/images/ata.jpg' },
       { namess: 'Rice Atta', pricess: 42 , quantity: 1, image: '/images/Riceatta.jpg' },
      { namess: 'Soyabeen Atta', pricess: 98, quantity: 1, image: '/images/SoyabeanAtta.jpg' },
      { namess: 'Kuttu Atta', pricess: 136 , quantity: 1, image: '/images/a7.jpg' },
      { namess: 'Basmati Classic', pricess: 140, quantity: 1, image: '/images/c3.jpg' },
      { namess: 'Basmati Royal', pricess: 120, quantity: 1, image: '/images/chawal.jpg' },
      { namess: 'Basmati Rozana', pricess: 85, quantity: 1, image: '/images/r1.jpg' },
      { namess: 'Basmati Mini Mogra', pricess: 55, quantity: 1, image: '/images/r5.jpg' },
      { namess: 'Basmati Pulao', pricess: 110, quantity: 1, image: '/images/r6.jpg' },
      { namess: 'Basmati Kheer', pricess: 60, quantity: 1, image: '/images/r7.jpg' },
      { namess: 'Brown Rice', pricess: 160, quantity: 1, image: '/images/brown.jpg' },
      { namess: 'Shingara Atta', pricess: 180, quantity: 1, image: '/images/ata.jpg' },
      { namess: 'Besan', pricess: 85, quantity: 1, image: '/images/a4.jpg' },
    ],
    Atta: [
      { namess: 'MP Regular Atta', pricess: 36 , quantity: 1, image: '/images/atta.png' },
      { namess: 'MP Classic Atta', pricess: 40, quantity: 1, image: '/images/a1.jpg' },
       { namess: 'MP Royal Atta', pricess: 54 , quantity: 1, image: '/images/ata.jpg' },
      { namess: 'Multigrain Atta', pricess: 55, quantity: 1, image: '/images/Multigrainatta.jpg' },
      { namess: 'Digestive Atta', pricess: 62 , quantity: 1, image: '/images/a2.jpg' },
      { namess: 'Diabetic Special Atta', pricess: 68, quantity: 1, image: '/images/a3.jpg' },
      { namess: 'Chana Atta', pricess: 78, quantity: 1, image: '/images/chanaatta.jpeg.jpg' },
      { namess: 'Jau Atta', pricess: 56, quantity: 1, image: '/images/c1.jpg' },
      { namess: 'Makka Atta', pricess: 44, quantity: 1, image: '/images/a5.jpg' },
      { namess: 'Ragi Atta', pricess: 68, quantity: 1, image: '/images/Ragiatta.jpg' },
      { namess: 'Jowar Atta', pricess: 36 , quantity: 1, image: '/images/a6.jpg' },
      { namess: 'Bajra Atta', pricess: 42, quantity: 1, image: '/images/ata.jpg' },
       { namess: 'Rice Atta', pricess: 42 , quantity: 1, image: '/images/Riceatta.jpg' },
      { namess: 'Soyabeen Atta', pricess: 98, quantity: 1, image: '/images/SoyabeanAtta.jpg' },
      { namess: 'Kuttu Atta', pricess: 136 , quantity: 1, image: '/images/a7.jpg' },
      { namess: 'Shingara Atta', pricess: 180, quantity: 1, image: '/images/ata.jpg' },
      { namess: 'Besan', pricess: 85, quantity: 1, image: '/images/a4.jpg' },
    ],
    Sattu: [
      { namess: 'Chana Sattu', pricess: 140, quantity: 1, image: '/images/sattu.jpg' },
      { namess: 'Jau Sattu', pricess: 120, quantity: 1, image: '/images/sattttu.jpg' },
    ],
    'Mustard Oil': [
      { namess: 'Kali Sarson Oil', pricess: 175 , quantity: 1, image: '/images/kalu.jpg' },
      { namess: 'Peeli Sarson Oil', pricess: 190, quantity: 1, image: '/images/oill.jpg' },
      { namess: 'Mustard Oil', pricess: 220, quantity: 1, image: '/images/c4.jpg' },
    ],
    Rice: [
      
      { namess: 'Basmati Classic', pricess: 140, quantity: 1, image: '/images/c3.jpg' },
      { namess: 'Basmati Royal', pricess: 120, quantity: 1, image: '/images/chawal.jpg' },
      { namess: 'Basmati Rozana', pricess: 85, quantity: 1, image: '/images/r1.jpg' },
      { namess: 'Basmati Dubar', pricess: 75, quantity: 1, image: '/images/r2.jpg' },
      { namess: 'Basmati Tibar', pricess: 65, quantity: 1, image: '/images/r4.jpg' },
      { namess: 'Basmati Mogra', pricess: 60, quantity: 1, image: '/images/c3.jpg' },
      { namess: 'Basmati Mini Mogra', pricess: 55, quantity: 1, image: '/images/r5.jpg' },
      { namess: 'Basmati Pulao', pricess: 110, quantity: 1, image: '/images/r6.jpg' },
      { namess: 'Basmati Kheer', pricess: 60, quantity: 1, image: '/images/r7.jpg' },
      { namess: 'Brown Rice', pricess: 160, quantity: 1, image: '/images/brown.jpg' },
      
    ],
  };

  const filteredProducts = selectedCategory === 'All' ? products.All : products[selectedCategory];

  // Function to handle product click and navigate to the description page
  const handleProductClick = (product) => {
    navigate('/product-description', { state: { product } });
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={filterTitleStyle}>Filter by Category</div>
        {categories.map((category) => (
          <div
            key={category}
            style={{
              ...filterItemStyle,
              fontWeight: selectedCategory === category ? 'bold' : 'normal',
              color: selectedCategory === category ? '#007bff' : '#000',
            }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div style={productGridStyle}>
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            style={productCardStyle}
            onClick={() => handleProductClick(product)} // Add onClick to product card
          >
            <img src={product.image} alt={product.namess} style={productImageStyle} />
            <div style={productTitleStyle}>{product.namess}</div>
            <div style={productPriceStyle}>₹{product.pricess}</div>
            <div>Quantity: {product.quantity} kg</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

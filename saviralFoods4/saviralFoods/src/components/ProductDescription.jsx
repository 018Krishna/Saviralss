import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductDescription = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Ensure product is coming from state

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1); // State for quantity

  if (!product) {
    return <div>Product not found</div>;
  }

  // Make sure product.pricess is a valid number, and provide a fallback if it's undefined or invalid
  const price = product.pricess ? parseFloat(product.pricess) : 0;

  // Function to increment quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to decrement quantity
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Calculate the total price based on the quantity
  const totalPrice = price * quantity;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-green-500 underline"
      >
        Back to Products
      </button>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left: Product Images */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.namess}
                className="object-contain w-full rounded-md shadow-md"
              />
              <div className="flex flex-col mt-4 space-y-2">
                {/* Thumbnail Images - adjust as necessary */}
                {product.thumbnails?.map((thumbnail, index) => (
                  <img
                    key={index}
                    src={thumbnail}
                    alt={`${product.namess} thumbnail ${index + 1}`}
                    className="object-contain w-16 h-16 rounded-md shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex-grow">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.namess}
            </h1>

            {/* Rating, Reviews, and Brand */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-yellow-500 text-lg">
                {/* Show stars based on product rating */}
                {'★'.repeat(product.rating)}{' '}
                <span className="text-gray-500">
                  ({product.reviewCount} Reviews)
                </span>
              </div>
            </div>

            {/* Price and Discount */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-3xl font-bold text-green-600">
                ${totalPrice.toFixed(2)}
              </div>
              {product.originalPrice && (
                <div className="line-through text-gray-500">
                  {product.originalPrice}
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={decrementQuantity}
                className="bg-gray-200 px-4 py-2 rounded-md"
              >
                -
              </button>
              <div className="text-xl">{quantity}</div>
              <button
                onClick={incrementQuantity}
                className="bg-gray-200 px-4 py-2 rounded-md"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 mb-6"
            >
              Add {quantity} to Cart (${totalPrice.toFixed(2)})
            </button>

            {/* Category and Tags */}
            <div className="text-sm text-gray-600 mb-6">
              <strong>Category:</strong> {product.category}
            </div>
            <div className="text-sm text-gray-600 mb-6">
              <strong>Tags:</strong>{' '}
              {product.tags?.map((tag, index) => (
                <span key={index} className="mr-2">
                  {tag}
                </span>
              ))}
            </div>

            {/* Product Description */}
            <div className="border-t border-gray-300 pt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Description
              </h2>
              <p className="text-gray-700 text-justify leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* Customer Feedback Section */}
        
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">Related Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.relatedProducts?.map((related, index) => (
            <div key={index} className="bg-white p-6 rounded-md shadow-md">
              <img
                src={related.img}
                alt={related.name}
                className="object-contain w-full h-40 mb-4"
              />
              <h4 className="text-lg font-bold text-gray-800">
                {related.name}
              </h4>
              <div className="text-green-600 font-semibold">{related.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;

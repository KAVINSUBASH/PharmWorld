import React, { useState } from 'react';


const Card = ({ title, description, imageUrl, price }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    const item = { title, price, quantity };
    setCart([...cart, item]);
  };

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg mt-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-2">{title}</div>
        {isHovered && <p className="text-gray-700 text-base">{description}</p>}
        <p className="text-gray-700 text-base">Price: Rs.{price}</p>
        <div className="flex items-center">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border-gray-300 rounded-md w-16 p-1 text-center mr-2"
          />
          <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Add to Cart
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
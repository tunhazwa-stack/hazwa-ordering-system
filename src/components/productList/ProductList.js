import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import productData from '../../data/product.json';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import './productList.css';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {productData.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <Button variant="contained" onClick={() => addToCart(product,navigate)}>Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

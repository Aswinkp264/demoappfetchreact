import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to only run this effect once on component mount

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-price">${product.price}</p>
            <p className="card-description">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import React from 'react';

function ProductList({ products }) {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products?.map(product => (
          <li key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <p>{product.title}</p>
              <p>Price: ${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

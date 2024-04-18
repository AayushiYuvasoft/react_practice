import React, { useState, useMemo, useEffect } from 'react';
import ProductList from './ProductList';

function ProductPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);

  // Fetch products from API when the component mounts
  useEffect(() => {
    async function fetchProduct(){
      const res=await fetch("https://fakestoreapi.com/products")
      const dd=await res.json()
      console.log(dd)
      setProducts(dd)
    }
    fetchProduct()
  }, []);

  // Memoize the filtered product list
  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products"
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ProductPage;

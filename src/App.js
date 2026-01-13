import './App.css';
import Header from "./components/Header";
import Filters from "./components/Filters";
import SortBar from "./components/SortBar";
import ProductList from "./components/ProductList";
import "./index.css";
import { useEffect, useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [ productsData, setProductsData ] = useState([]);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  useEffect(() => {
    async function load() {
      const res = await fetch('https://ecommerce-backend-uwey.onrender.com/api/products');
      const data = await res.json();
      console.log(data);
      setProductsData(data);
    }
    load();
  }, []);


  return (
    <>
      <Header cartCount={cartCount} />
      <div className="container">
        <Filters />
        <main>
          <SortBar />
          <ProductList products={productsData} onAddToCart={handleAddToCart} />
        </main>
      </div>
    </>
  );
}

export default App;

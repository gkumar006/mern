import './App.css';
import Header from "./components/Header";
import Filters from "./components/Filters";
import SortBar from "./components/SortBar";
import ProductList from "./components/ProductList";
import { products } from "./data/products";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Filters />
        <main>
          <SortBar />
          <ProductList products={products} />
        </main>
      </div>
    </>
  );
}

export default App;

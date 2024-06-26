import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';

function App() {
  const [items, setItems] = useState<string>('');
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home items={items} setItems={setItems} />}
          />
          <Route
            path="/products/search"
            element={<Products items={items} setItems={setItems} />}
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

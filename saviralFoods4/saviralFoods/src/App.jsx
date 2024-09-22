import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductDescription from "./components/ProductDescription";
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import WishList from './pages/WhishList'; // or './components/WishList'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/src/pages/Cart" element={<Cart />} />
            <Route path="/src/pages/Dashboard" element={<Dashboard />} />
            <Route path="/product/:id" element={<ProductDescription />} />
            <Route path="/src/pages/Categories" element={<Categories />} />
        <Route path="/product-description" element={<ProductDescription />} />
            <Route path="/src/pages/WhishList" element={<WishList />} /> {/* New WishList route */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

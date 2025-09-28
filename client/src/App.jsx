import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage'; // 1. Import the new page

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          {/* 2. Add the dynamic route for product details */}
          <Route path="/product/:productId" element={<ProductDetailPage />} /> 
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
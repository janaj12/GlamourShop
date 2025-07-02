import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import AdminPanel from './pages/AdminPanel';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Javne rute */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

        {/* Zaštićena admin ruta */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;

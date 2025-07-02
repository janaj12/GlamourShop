import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-pink-200 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">
        Glamour Shop
      </Link>

      <div className="flex gap-4 items-center">
        {user ? (
          <>
            {user.role === 'admin' && <Link to="/admin">Admin Panel</Link>}
            <Link to="/cart">Korpa</Link>
            <button onClick={logout} className="text-red-600 font-semibold">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Registracija</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;


import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Popunite sva polja.');
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/users?username=${username}&password=${password}`);
      const data = await res.json();

      if (data.length === 1) {
        const user = data[0];
        login(user);
        navigate(user.role === 'admin' ? '/admin' : '/');
      } else {
        setError('Neispravno korisničko ime ili lozinka.');
      }
    } catch (err) {
      setError('Greška pri komunikaciji sa serverom.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl mb-4">Prijava</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Korisničko ime"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />
        <input
          type="password"
          placeholder="Lozinka"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600">
          Prijavi se
        </button>
      </form>
    </div>
  );
}

export default Login;

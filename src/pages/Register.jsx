import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.username || !form.password) {
      setError('Popunite sva polja.');
      return;
    }

    // Provera da li korisnik već postoji
    const res = await fetch(`http://localhost:5000/users?username=${form.username}`);
    const existing = await res.json();
    if (existing.length > 0) {
      setError('Korisničko ime je već zauzeto.');
      return;
    }

    await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, role: 'user' }),
    });

    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl mb-4">Registracija</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          placeholder="Korisničko ime"
          value={form.username}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Lozinka"
          value={form.password}
          onChange={handleChange}
          className="border p-2"
        />
        <button className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600">
          Registruj se
        </button>
      </form>
    </div>
  );
}

export default Register;

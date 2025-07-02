import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Greška pri učitavanju proizvoda:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4">Učitavanje proizvoda...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-6 text-center">Dobrodošli u Glamour Shop</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="border rounded shadow p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price} RSD</p>
            <Link
              to={`/products/${product.id}`}
              className="inline-block mt-2 bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
            >
              Detalji
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(AuthContext); // Dodato

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Greška:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-4">Učitavanje...</div>;
  if (!product) return <div className="p-4 text-red-500">Proizvod nije pronađen.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-pink-600 font-semibold text-lg mb-4">{product.price} RSD</p>

      {/* Dugme za dodavanje u korpu */}
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-4"
      >
        Dodaj u korpu
      </button>

      <Link
        to="/"
        className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 inline-block"
      >
        Nazad
      </Link>
    </div>
  );
}

export default ProductDetails;

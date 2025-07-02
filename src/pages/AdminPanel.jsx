import { useEffect, useState } from 'react';
import AdminProductForm from '../components/AdminProductForm';

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [reload]);

  const deleteProduct = async (id) => {
    if (confirm('Da li ste sigurni da želite da obrišete proizvod?')) {
      await fetch(`http://localhost:5000/products/${id}`, {
        method: 'DELETE',
      });
      setReload((prev) => !prev);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleFormSubmit = () => {
    setEditingProduct(null);
    setReload((prev) => !prev);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Admin Panel – Upravljanje Proizvodima</h1>

      <AdminProductForm onSuccess={handleFormSubmit} productToEdit={editingProduct} />

      <div className="grid gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} className="h-32 w-full object-cover mb-2" />
            <h2 className="font-semibold">{product.name}</h2>
            <p>{product.price} RSD</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleEdit(product)}
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
              >
                Izmeni
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Obriši
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl mt-10 mb-2">Registrovani korisnici</h2>
      <ul className="list-disc ml-6">
        {users.map((u) => (
          <li key={u.id}>
            {u.username} ({u.role})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;

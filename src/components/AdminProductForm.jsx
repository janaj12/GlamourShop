import { useEffect, useState } from 'react';

function AdminProductForm({ onSuccess, productToEdit }) {
  const [form, setForm] = useState({ name: '', description: '', price: '', image: '' });

  useEffect(() => {
    if (productToEdit) {
      setForm(productToEdit);
    } else {
      setForm({ name: '', description: '', price: '', image: '' });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.price || !form.image) {
      alert('Popunite sva polja.');
      return;
    }

    const method = productToEdit ? 'PUT' : 'POST';
    const url = productToEdit
      ? `http://localhost:5000/products/${productToEdit.id}`
      : 'http://localhost:5000/products';

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...form, price: Number(form.price) }),
    });

    onSuccess();
    setForm({ name: '', description: '', price: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md border p-4 rounded shadow">
      <h2 className="text-xl mb-3">{productToEdit ? 'Izmena' : 'Dodavanje'} proizvoda</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Naziv"
        className="border p-2 w-full mb-2"
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Opis"
        className="border p-2 w-full mb-2"
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Cena (RSD)"
        type="number"
        className="border p-2 w-full mb-2"
      />
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="URL slike"
        className="border p-2 w-full mb-2"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {productToEdit ? 'Sačuvaj izmene' : 'Dodaj proizvod'}
      </button>
    </form>
  );
}

export default AdminProductForm;

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Cart() {
  const { cart, removeFromCart } = useContext(AuthContext);

  if (cart.length === 0) {
    return <div className="p-6 text-center text-gray-600">Korpa je prazna.</div>;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Tvoja korpa</h1>
      {cart.map((item) => (
        <div key={item.id} className="border p-4 rounded mb-3 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p>{item.price} RSD</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Ukloni
          </button>
        </div>
      ))}
      <div className="text-right mt-4 font-bold text-xl">
        Ukupno: {total} RSD
      </div>
    </div>
  );
}

export default Cart;

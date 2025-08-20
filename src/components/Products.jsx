"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((p) => (
        <div key={p._id} className="border p-3 rounded shadow">
          {p.image && (
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover mb-2 rounded"
            />
          )}
          <h2 className="font-bold text-lg">{p.name}</h2>
          <p>{p.description}</p>
          <p className="font-semibold mt-1">${p.price}</p>
        </div>
      ))}
    </div>
  );
}

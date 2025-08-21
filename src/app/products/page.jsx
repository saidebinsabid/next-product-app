"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DollarSign, Info } from "lucide-react";

export default function ProductsPage() {
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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
          >
            {/* Image at the top */}
            {p.picture && (
              <img
                src={p.picture}
                alt={p.name}
                className="w-full h-52 object-cover"
              />
            )}

            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-gray-600 text-sm mt-1">
                {p.description?.slice(0, 60)}...
              </p>

              <p className="flex items-center gap-1 text-green-600 font-bold mt-2">
                <DollarSign size={16} /> {p.price}
              </p>

              <Link
                href={`/products/${p._id}`}
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Info size={18} /> See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

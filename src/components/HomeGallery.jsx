"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomeGallery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.slice(0, 5));
    }
    fetchProducts();
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8 text-center">Featured Products</h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 max-w-6xl mx-auto">

        {/* Left small images (top on small screens) */}
        <div className="flex flex-col gap-4 order-1 lg:order-1">
          {products[0] && (
            <Link href={`/products/${products[0]._id}`}>
              <img
                src={products[0].picture}
                alt={products[0].name}
                className="w-40 h-40 object-cover rounded-lg hover:scale-105 transition mx-auto"
              />
            </Link>
          )}
          {products[1] && (
            <Link href={`/products/${products[1]._id}`}>
              <img
                src={products[1].picture}
                alt={products[1].name}
                className="w-40 h-40 object-cover rounded-lg hover:scale-105 transition mx-auto"
              />
            </Link>
          )}
        </div>

        {/* Middle big image (center on small screens) */}
        {products[2] && (
          <Link
            href={`/products/${products[2]._id}`}
            className="order-2 lg:order-2"
          >
            <img
              src={products[2].picture}
              alt={products[2].name}
              className="w-80 h-80 object-cover rounded-lg hover:scale-105 transition mx-auto"
            />
          </Link>
        )}

        {/* Right small images (bottom on small screens) */}
        <div className="flex flex-col gap-4 order-3 lg:order-3">
          {products[3] && (
            <Link href={`/products/${products[3]._id}`}>
              <img
                src={products[3].picture}
                alt={products[3].name}
                className="w-40 h-40 object-cover rounded-lg hover:scale-105 transition mx-auto"
              />
            </Link>
          )}
          {products[4] && (
            <Link href={`/products/${products[4]._id}`}>
              <img
                src={products[4].picture}
                alt={products[4].name}
                className="w-40 h-40 object-cover rounded-lg hover:scale-105 transition mx-auto"
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

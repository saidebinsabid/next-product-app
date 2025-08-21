"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { DollarSign, FileText, Box } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-8">
      {/* Left: Product picture */}
      {product.picture && (
        <img
          src={product.picture}
          alt={product.name}
          className="w-full lg:w-1/2 rounded-xl shadow-lg"
        />
      )}

      {/* Right: Details */}
      <div className="lg:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="flex items-center gap-2 text-gray-700">
          <FileText /> {product.description}
        </p>
        <p className="flex items-center gap-2 text-green-600 font-bold">
          <DollarSign /> {product.price}
        </p>
      </div>
    </div>
  );
}

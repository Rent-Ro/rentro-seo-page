"use client";

import { useEffect, useState } from "react";

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const res = await fetch("https://api.rentro.sa/api/v1/products");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (isMounted) {
          setProducts(Array.isArray(data) ? data.slice(0, 9) : []);
          setStatus("ready");
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to fetch products:", err);
          setStatus("error");
        }
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  if (status === "loading") {
    return (
      <div className="text-gray-500">Loading products...</div>
    );
  }

  if (status === "error") {
    return (
      <div className="text-red-600">Unable to load products right now.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.productCode}
          className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="relative h-56 bg-gray-100 overflow-hidden">
            {product.images?.[0] ? (
              <img
                src={
                  product.images[0].baseUrl +
                  product.images[0].uploadDir +
                  product.images[0].imageUrl.split("/uploads/")[1]
                }
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
            {product.productFor?.sell?.discountValue > 0 && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save {product.productFor.sell.discountValue}%
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {product.description || product.longDescription?.substring(0, 100) + "..."}
            </p>

            <div className="flex items-center justify-between mb-4">
              {product.productFor?.sell ? (
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">
                    SAR {product.productFor.sell.discountPrice?.toFixed(2)}
                  </span>
                  {product.productFor.sell.discountPrice <
                    product.productFor.sell.actualPrice && (
                    <span className="text-gray-500 line-through">
                      SAR {product.productFor.sell.actualPrice?.toFixed(2)}
                    </span>
                  )}
                </div>
              ) : (
                <span className="text-gray-500">Price on request</span>
              )}
            </div>

            <div className="flex items-center mb-4">
              <div
                className={`w-2 h-2 rounded-full mr-2 ${
                  product.inventory?.stockStatus === "IN_STOCK"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              ></div>
              <span className="text-sm">
                {product.inventory?.stockStatus === "IN_STOCK"
                  ? "In Stock"
                  : "Out of Stock"}
              </span>
            </div>

            <div className="flex space-x-3">
              <a
                href={`https://rentro.sa`}
                target="blank"
                className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Details
              </a>
              <a
                href={`https://rentro.sa`}
                target="blank"
                className="px-4 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                -
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

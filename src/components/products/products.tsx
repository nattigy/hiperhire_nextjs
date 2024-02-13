"use client";

import { useEffect, useState } from "react";
import SingleProduct from "./product";

export default function ProductsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.testvalley.kr/collections?prearrangedDiscount"
        );
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching hero images:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="">
      <div className="flex overflow-x-auto">
        <div className="mx-10 py-10">
          <p className="font-extrabold text-3xl text-nowrap">HOT DEALS</p>
          <p className="text-sm text-nowrap">[UP TO 34% OFF] HAPPY HOUR</p>
        </div>
        {products &&
          products.map((product: any) => (
            <SingleProduct key={product.mainShortcutId} product={product} />
          ))}
      </div>
    </div>
  );
}

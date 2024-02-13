"use client";

import { useEffect, useState } from "react";
import SingleProduct from "./product";
import ProductDeals from "./product-deals";

export default function ProductsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.testvalley.kr/collections?prearrangedDiscount"
        );
        const data = await response.json();
        console.log("products", data);
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching hero images:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="">
        <ProductDeals
          products={products}
          title="HOT DEAL"
          description="[UP TO 34% OFF] HAPPY HOUR
returnable
"
        />
        <ProductDeals
          products={products}
          title="New In"
          description="#Notable new products
"
        />
        <ProductDeals
          products={products}
          title="Benheim new store EVENT"
          description="Lowest price guaranteed, 5% download coupon
"
        />
        <ProductDeals
          products={products}
          title="Logitech after-sales service guaranteed genuine mouse/keyboard exclusive"
          description="#Guaranteed after-sales service as a genuine product, not a parallel import!
"
        />
        <ProductDeals
          products={products}
          title="Thinner and more powerful LG Gram Pro 16-inch"
          description="Additional discount coupon + 30-day trial fee reduction event
"
        />
        <ProductDeals
          products={products}
          title="Lowest price on gaming devices & new releases"
          description="#Limited quantity special price #Anticipated new work
"
        />

        <ProductDeals
          products={products}
          title="Electric Mat LAST BIG SALE"
          description="UP TO 64% SALE
"
        />
        <ProductDeals
          products={products}
          title="Recommended Lunar New Year gift item, Tefal frying pan & cooker special price"
          description="UP TO 74% ▼
"
        />
        <ProductDeals
          products={products}
          title="MacBook clearance sale!"
          description="Only in Test Valley! Try it for 30 days and buy it
"
        />
      </div>
    </div>
  );
}

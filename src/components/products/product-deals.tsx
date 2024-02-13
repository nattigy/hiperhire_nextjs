"use client";

import SingleProduct from "./product";

export default function ProductDeals({
  products,
  title,
  description,
}: {
  products: any[];
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-screen-lg flex">
      <div className="m-5" style={{width: "200px"}}>
        <p className="font-medium text-xl text-ellipsis overflow-hidden text-nowrap text-gray-700" style={{width: "200px"}}>{title}</p>
        <p className="text-xs text-nowrap text-ellipsis overflow-hidden text-gray-500" style={{width: "200px"}}>{description}</p>
      </div>
      <div className="flex overflow-x-auto ">
        {products &&
          products.map((product: any) => (
            <SingleProduct key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

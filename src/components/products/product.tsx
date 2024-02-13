"use client";

import Image from "next/image";

import { StarIcon } from "@heroicons/react/solid"; // import icons needed

export default function SingleProduct({ product }: { product: any }) {
  return (
    <div className="mx-1 my-10">
      <div>
        {product?.thumbnail?.uri && (
          <img
            src={product.thumbnail.uri}
            alt={product.title}
            width="150px"
            height="150px"
            style={{ maxWidth: "150px" }}
          />
        )}
      </div>
      <div>
        <p
          className="text-ellipsis overflow-hidden text-nowrap text-gray-500"
          style={{ width: "150px" }}
        >
          {product.title}
        </p>
        <p
          className="text-ellipsis overflow-hidden text-nowrap text-gray-500"
          style={{ width: "150px" }}
        >
          {product.description}
        </p>
        <p className="font-medium text-xl text-gray-700">100</p>
        <p className="flex text-xs text-gray-700">
          <StarIcon className="h-3" color="gray" />
          <p className="px-1">{product.rating}</p>
        </p>
      </div>
    </div>
  );
}

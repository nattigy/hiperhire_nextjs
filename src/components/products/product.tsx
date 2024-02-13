import { StarIcon } from "@heroicons/react/outline"; // import icons needed

export default function SingleProduct({ product }: { product: any }) {
  return (
    <div className="w-180 mx-1">
      <div>
        <img
          src={product.imageUrl}
          alt={product.title}
          width={150}
          height={150}
        />
      </div>
      <div>
        <p>{product.title}</p>
        <p className="font-black text-2xl">100</p>
        <p>
            <StarIcon/> {product.rate}
        </p>
      </div>
    </div>
  );
}

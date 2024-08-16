import { Link } from "react-router-dom";
import {
  formatCurrency,
  formatDistanceFromNow,
  getToday,
  subtractDates,
} from "../../utils/helper";

function ProductCart({ product }) {
  const { title, image, price, category, discount, id, created_at } = product;
  return (
    <div className="relative bg-[#F4F5F7]">
      <img src={image} className="max-h-72 w-full object-contain" />

      <div className="px-3 py-2">
        <Link
          to={`/product/${id}`}
          className="cursor-pointer text-xs font-bold leading-3"
        >
          {title}
        </Link>
        <p className="mb-3 mt-1 text-sm font-medium text-stone-500">
          {category}
        </p>
        <div className="mb-8 flex items-center justify-between text-sm">
          <p className="text-lg font-semibold">
            {discount == 0
              ? formatCurrency(price)
              : formatCurrency(price - price * (discount / 100))}
          </p>
          {discount != 0 && (
            <p className="text-sm text-stone-400 line-through">
              {formatCurrency(price)}
            </p>
          )}
        </div>
      </div>
      {discount != 0 && (
        <div className="color-white absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-center font-semibold">
          <span className="text-xs text-white">{`-${discount}%`}</span>
        </div>
      )}
    </div>
  );
}

export default ProductCart;

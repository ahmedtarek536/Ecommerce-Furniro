import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Button from "../ui/Button";
import Header from "../ui/Header";
import { deleteItemInCart, getCart } from "../services/apiCart";
import Spinner from "../ui/Spinner";
import { useSelector } from "react-redux";
import { formatCurrency } from "../utils/helper";
import toast from "react-hot-toast";
import Footer from "../ui/Footer";

function Cart() {
  const { id: userId } = useSelector((state) => state.account);

  const { isLoading, data: products } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(userId),
  });
  const queryClient = useQueryClient();
  const { mutate, isLoading: isRemoving } = useMutation(
    (data) => deleteItemInCart(data),
    {
      onSuccess: () => {
        toast.success("Successful remove item");
        queryClient.invalidateQueries({ key: ["cart"] });
      },
      onError: () => {
        toast.error("Fail to remove Item");
      },
    },
  );

  function handleRemoveItem(productId) {
    const data = {
      userId: userId,
      productId: productId,
    };
    mutate(data);
  }

  if (!userId) return null;
  return (
    <>
      {(isLoading || isRemoving) && <Spinner />}
      <div className="m-4">
        <Header />
        <div className="mt-24 grid h-full grid-cols-1 gap-4 md:grid-cols-9">
          <div className="col-span-7 border border-stone-100 bg-white px-6 py-6 shadow-md">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <div className="w-full overflow-auto">
              <table className="mt-4 w-full min-w-[700px] text-center">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product) => (
                    <Row
                      key={product.id}
                      product={product.products}
                      handleRemoveItem={handleRemoveItem}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Checkout />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Row({ product, handleRemoveItem }) {
  const { image, title, category, price, discount, id } = product;
  return (
    <tr className="mx-2 border-8 border-white py-10 text-xs">
      <td className="flex items-center justify-center">
        <img src={image} className="w-16" />
      </td>
      <td className="max-w-24 text-start text-[10px]">{title}</td>
      <td>{category}</td>
      <td> {formatCurrency(price - price * (discount / 100))}</td>
      <td className="">
        <span
          className="cursor-pointer rounded-md bg-red-500 px-3 py-1 text-xs font-semibold text-white"
          onClick={() => {
            handleRemoveItem(id);
          }}
        >
          Delete
        </span>
      </td>
    </tr>
  );
}

function Checkout() {
  return (
    <div className="col-span-7 flex h-fit w-full flex-col gap-4 border border-stone-100 bg-white px-4 py-6 shadow-md md:col-span-2">
      <h3 className="">
        Subtotal (1 item): <span className="font-bold">$29.99</span>
      </h3>
      <div className="flex flex-col items-start justify-start gap-1 text-xs font-semibold">
        <label htmlFor="coboun">Add Coboun</label>
        <input
          id="coboun"
          type=" text"
          className="w-full rounded-md border border-stone-200 px-3 py-1"
          placeholder="Get A Dicount"
        />
      </div>
      <button className="rounded-full bg-[#B88E2F] px-8 py-1 text-sm text-white">
        Check out
      </button>
    </div>
  );
}

export default Cart;

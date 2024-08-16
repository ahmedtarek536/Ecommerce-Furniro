import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteProduct, getProductsForUser } from "../../services/apiProducts";
import Spinner from "../../ui/Spinner";
import { useSelector } from "react-redux";
import Searchbar from "../../ui/Searchbar";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import toast from "react-hot-toast";

function ProductsTabel() {
  const id = useSelector((state) => state.account.id);
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["productsUser"],
    queryFn: () => getProductsForUser(id),
  });
  const queryClient = useQueryClient();
  const { mutate, isRemoving } = useMutation(
    (product) => deleteProduct(product),
    {
      onSuccess: () => {
        toast.success("Delete Product Success");
        queryClient.invalidateQueries({ key: ["productUser", "products"] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    },
  );
  function handleRemoveProduct(product) {
    mutate(product);
  }
  return (
    <>
      {(isRemoving || isLoading) && <Spinner />}
      <div className="my-3 rounded-md bg-white px-3 py-6">
        <div className="flex items-center justify-between rounded-md bg-white px-4">
          <Searchbar />
          <Link
            to="/dashboard/product/new"
            className="rounded-lg border-0 bg-blue-600 px-3 py-2 text-xs font-semibold text-white"
          >
            Add New
          </Link>
        </div>
        <div className="w-full overflow-auto">
          <table className="mt-4 w-full min-w-[900px] text-center">
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <Row
                  key={product.id}
                  product={product}
                  onRemove={handleRemoveProduct}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function Row({ product, onRemove }) {
  const { id, image, title, category, price, discount } = product;
  return (
    <tr className="border-8 border-white py-10 text-xs">
      <td>{id}</td>
      <td className="flex items-center justify-center">
        <img src={image} className="w-16" />
      </td>
      <td className="max-w-24 text-start text-[10px]">{title}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>
        <span
          className="cursor-pointer rounded-md bg-red-500 px-3 py-1 text-xs font-semibold text-white"
          onClick={() => {
            onRemove(product);
          }}
        >
          Delete
        </span>
      </td>
    </tr>
  );
}

export default ProductsTabel;

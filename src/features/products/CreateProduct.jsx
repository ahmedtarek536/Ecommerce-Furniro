import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createProduct } from "../../services/apiProducts";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

function CreateProduct() {
  const id = useSelector((state) => state.account.id);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(createProduct, {
    onSuccess: () => {
      toast.success("Create New Product successfully");
      queryClient.invalidateQueries({ key: ["productUser", "products"] });

      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    console.log(data);
    mutate({ ...data, userId: +id });
  }

  return (
    <>
      {isLoading && <Spinner />}
      <div className="my-4 rounded-md bg-white px-3 py-6 text-xs sm:px-10">
        <Link
          // to="/dahboard/product/new"
          className="mb-3 rounded-lg border-0 py-2 text-lg font-semibold"
        >
          Create Product
        </Link>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="mt-4 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="title">
                Title
              </label>
              <input
                id="tile"
                type="text"
                className="input w-full"
                placeholder="Enter Title"
                {...register("title")}
                required
              />
            </div>
            <div className="mt-8 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="description">
                Discription
              </label>
              <textarea
                id="description"
                type="text"
                className="input min-h-32 w-full"
                placeholder="Add your description"
                {...register("description")}
                required
              />
            </div>
            <div className="mt-8 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="category">
                Category
              </label>
              <input
                id="category"
                type="text"
                className="input w-full"
                placeholder=""
                {...register("category")}
                required
              />
            </div>
            <div className="mt-8 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="image">
                Image URL
              </label>
              <input
                id="image"
                type="text"
                className="input w-full"
                placeholder=""
                {...register("image")}
                required
              />
            </div>
            <div className="mt-8 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="number"
                className="input w-full"
                placeholder=""
                {...register("price")}
                required
              />
            </div>
            <div className="mt-8 flex flex-col items-start justify-start gap-1">
              <label className="font-semibold" htmlFor="discount">
                Discount
              </label>
              <input
                id="discount"
                type="number"
                className="input w-full"
                placeholder=""
                defaultValue={0}
                {...register("discount")}
                // required
              />
            </div>
            <div className="text-center">
              <Button type="full">Add Product</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;

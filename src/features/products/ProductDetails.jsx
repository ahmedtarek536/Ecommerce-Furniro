import {
  QueryErrorResetBoundary,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetails } from "../../services/apiProducts";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helper";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import { useSelector } from "react-redux";
import { addToCart } from "../../services/apiCart";
import toast from "react-hot-toast";
import Products from "./Products";
import Footer from "../../ui/Footer";
import { useEffect } from "react";

function ProductDetails() {
  // window.scrollTo(0, 0);

  const { id: userId } = useSelector((state) => state.account);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();

  const {
    isLoading,
    data: product,
    refetch,
    error,
  } = useQuery({
    queryKey: ["productDetails"],
    queryFn: () => getProductDetails(id),
  });
  useEffect(() => {
    refetch();
  }, [id, refetch]);
  const { mutate, isLoading: loadAddProduct } = useMutation(addToCart, {
    onSuccess: () => {
      toast.success("Add product to cart sucessful");
      queryClient.invalidateQueries({ key: ["cart"] });
    },
    onError: () => {
      toast.error("Fail to add product to cart");
    },
  });

  function handleAddCart() {
    if (!userId) {
      navigate("/signin");
      return;
    }
    mutate({ userId: userId, productId: id, nums: 1 });
  }

  return (
    <>
      {(isLoading || loadAddProduct) && <Spinner />}
      <Header />
      <div className="gird-cols-1 mx-auto my-28 grid w-[90%] gap-4 md:w-[80%] md:grid-cols-4">
        <div className="col-span-2 flex items-center justify-center md:items-start md:justify-start">
          <img src={product?.image} alt="" />
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-bold lg:text-2xl">{product?.title}</h3>
          <p className="mt-2 text-xl text-stone-500">{product?.category}</p>
          <div className="mt-6 text-xl font-semibold text-stone-500">
            {formatCurrency(product?.price)}
          </div>
          <Button type="outline" onClick={handleAddCart}>
            Add To Cart
          </Button>
          <div className="mt-8 text-[#777]">{product?.description}</div>
        </div>
      </div>
      <Products number={4} />
      <Footer />
    </>
  );
}

export default ProductDetails;

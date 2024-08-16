import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import ProductCart from "./ProductCart";

function Products({ number }) {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return (
    <>
      {isLoading && <Spinner />}
      <div className="mx-12 mb-4 mt-16 md:mx-20">
        <h2 className="py-8 text-center text-4xl font-bold">Our Products</h2>
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
        >
          <Data products={products} number={number} />
        </div>
      </div>
    </>
  );
}

function Data({ products, number }) {
  if (number > 0 && products) products = products.slice(0, number);
  return products?.map((product) => (
    <ProductCart key={product.id} product={product} />
  ));
}

export default Products;

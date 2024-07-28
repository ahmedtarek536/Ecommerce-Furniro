// import Products from "../features/products/Products";
import { useQuery } from "@tanstack/react-query";
import Products from "../features/products/Products";
import BrowseRange from "../ui/BrowseRange";
import Discover from "../ui/Discover";
import Header from "../ui/Header";
import { getCart } from "../services/apiCart";

function Ecommerce() {
  return (
    <div>
      <Header />
      <Discover />
      <BrowseRange />
      <Products />
    </div>
  );
}

export default Ecommerce;

// import Products from "../features/products/Products";
import { useQuery } from "@tanstack/react-query";
import Products from "../features/products/Products";
import BrowseRange from "../ui/BrowseRange";
import Discover from "../ui/Discover";
import Header from "../ui/Header";
import { getCart } from "../services/apiCart";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../ui/Footer";

function Ecommerce() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Discover />
      <BrowseRange />
      <Products number={8} />
      <div className="text-center">
        <Button onClick={() => navigate("/shop")} type="outline">
          Show More
        </Button>
      </div>{" "}
      <Footer />
    </div>
  );
}

export default Ecommerce;

import {
  faBars,
  faBell,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const { id, image } = useSelector((store) => store.account);
  return (
    <>
      <header className="fixed left-0 top-0 z-20 flex w-full items-center justify-between bg-white p-4 px-6 shadow-md">
        <div className="flex items-center justify-start gap-8">
          <Logo />
          <div className="font-semibol text-md hidden items-center justify-center gap-6 text-stone-600 md:flex">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="hidden items-center justify-center gap-6 text-lg md:flex">
          <Searchbar />
          <Link to={`${id ? "/cart" : "/signin"}`}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          <Link>{<FontAwesomeIcon icon={faBell} />}</Link>

          {id ? (
            <img
              src={image}
              className="h-8 w-8 cursor-pointer rounded-full"
              onClick={() => setNavbar((val) => !val)}
            />
          ) : (
            <Link to="/signin">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
        </div>
        <div className="block cursor-pointer text-xl md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setNavbar((val) => !val)}
          />
        </div>
        {navbar && <Navbar setNavbar={setNavbar} />}
      </header>
    </>
  );
}

export default Header;

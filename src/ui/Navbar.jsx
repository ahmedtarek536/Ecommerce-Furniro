import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faCartShopping,
  faMagnifyingGlass,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/Accounts/accountSlice";
function Navbar({ setNavbar }) {
  const { id, image, firstName, lastName } = useSelector(
    (store) => store.account,
  );
  const dispatch = useDispatch();

  return (
    <nav className="absolute right-7 top-16 w-[60%] max-w-96 rounded-md bg-white p-4 shadow-lg">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute right-6 top-6 block cursor-pointer md:hidden"
      />
      <FontAwesomeIcon
        icon={faX}
        className="mx-2 my-3 cursor-pointer"
        onClick={() => setNavbar((val) => !val)}
      />

      <div className="mb-4 flex items-center justify-start gap-3">
        {" "}
        {id ? (
          <>
            <img
              src={image}
              className="h-10 w-10 cursor-pointer rounded-full"
            />
            <div>{firstName + " " + lastName}</div>
          </>
        ) : (
          <>
            <Link to="/signin">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <div>Login</div>
          </>
        )}
        {/* <div className="flex flex-col gap-1 text-sm">
            <div className="font-semibold">Ahmed Tarek</div>
            <span className="text-xs text-stone-500">Freelancer</span>
          </div> */}
      </div>
      <div className="font-semibol text-md flex flex-col items-stretch justify-center gap-2 px-2 text-stone-600">
        {id && (
          <Link
            to="/profile"
            className="rounded-md px-2 py-1 hover:bg-stone-100"
          >
            Profile
          </Link>
        )}
        {id && (
          <Link
            to="/dashboard"
            className="rounded-md px-2 py-1 hover:bg-stone-100"
          >
            Dashboard
          </Link>
        )}
      </div>
      <div className="block md:hidden">
        <div className="font-semibol text-md mb-3 flex flex-col items-stretch justify-center gap-3 border-b-2 border-stone-100 px-2 py-2 text-stone-600">
          <Link to="/" className="rounded-md px-2 py-1 hover:bg-stone-100">
            Home
          </Link>
          <Link to="/shop" className="rounded-md px-2 py-1 hover:bg-stone-100">
            Shop
          </Link>
          <Link to="/about" className="rounded-md px-2 py-1 hover:bg-stone-100">
            About
          </Link>
          <Link
            to="/contact"
            className="rounded-md px-2 py-1 hover:bg-stone-100"
          >
            Contact
          </Link>
        </div>
        <div className="mb-2 flex flex-col items-stretch justify-start gap-2 text-lg">
          <Link
            to={`${id ? "/cart" : "/signin"}`}
            className="rounded-md px-2 py-1 hover:bg-stone-100"
          >
            <FontAwesomeIcon icon={faCartShopping} /> Cart
          </Link>
          <Link className="rounded-md px-2 py-1 hover:bg-stone-100">
            <FontAwesomeIcon icon={faBell} /> Notfifcations
          </Link>
        </div>
      </div>
      {id && (
        <div
          className="mt-2 cursor-pointer rounded-md border-t-2 border-stone-100 px-2 py-2 hover:bg-stone-100"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span className="mr-10"> Logout</span>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

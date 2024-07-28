import {
  faArrowRightFromBracket,
  faBullseye,
  faChartSimple,
  faCircleQuestion,
  faGear,
  faHouse,
  faMoneyBillTrendUp,
  faShoppingBag,
  faStore,
  faTag,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../ui/Logo";
import { useDispatch } from "react-redux";
import { logout } from "../Accounts/accountSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="mx-3 my-10 h-full text-sm">
      {/* <div className="flex items-center justify-center text-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLVqFUcHEhfstPmbDTiTotKzuIzbxN4WGoBMYwpIuVonaVWrBhPzH35ArOA5FBnV7aNmgFke6txXZP1PkBrcykn5jHEbJez3Si5l-AfFFBoaRSxojE1LJFb66vlBPn2QgMEzEBuEL64z6PoypbDLM0VwAKr9B65uuC4Plx79MWRN13vK6SBG1Tt513D1~DKkxgCOchHBx-VAx3fBUc1DwElSul5Cg0tEZ0K6aJoYrl5lLcOBaHS8DLaR~RFBycZtobuDYoW-9IJTW1oOj5oA~xqOO1VF~PIOl6rwi4ItKrvDpz7Wjb0bYpDhRFWfVhihNDjEP88bisjgZz~CDJgNHg__"
          alt="logo img"
          className="w-10"
        />
      </div> */}
      <h3 className="mb-1 mt-6">Pages</h3>
      <div className="mx-1 flex flex-col items-stretch gap-3">
        <Link
          to=""
          className="items-centstart flex gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-stone-100"
        >
          <FontAwesomeIcon icon={faHouse} />
          <span className="relative hidden sm:block">Dashboard</span>
        </Link>
        <Link
          to=""
          className="items-centstart flex gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-stone-100"
        >
          <FontAwesomeIcon icon={faShoppingBag} />
          <span className="relative hidden sm:block">Orders</span>
        </Link>

        <Link
          to="/dashboard/products"
          className="items-centstart flex gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-stone-100"
        >
          {" "}
          <FontAwesomeIcon icon={faTag} />
          <span className="relative hidden sm:block">Products</span>
        </Link>
        <Link
          to=""
          className="items-centstart flex gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-stone-100"
        >
          {" "}
          <FontAwesomeIcon icon={faUsers} />
          <span className="relative hidden sm:block">Cutsomers</span>
        </Link>
      </div>
      <h3 className="mb-1 mt-6">Anaylistc</h3>
      <div className="mx-1 flex flex-col items-stretch gap-3">
        <Link
          to=""
          className="flex items-center justify-start gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-stone-100"
        >
          <FontAwesomeIcon icon={faChartSimple} />
          <span className="relative hidden sm:block">Anaylistc</span>
        </Link>
        <Link
          to=""
          className="flex items-center justify-start gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-stone-100"
        >
          <FontAwesomeIcon icon={faBullseye} />
          <span className="relative hidden sm:block">Marketing</span>
        </Link>
        <Link
          to=""
          className="flex items-center justify-start gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-stone-100"
        >
          <FontAwesomeIcon icon={faMoneyBillTrendUp} />
          <span className="relative hidden sm:block">Discount</span>
        </Link>
        <Link
          to="/"
          className="flex items-center justify-start gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-stone-100"
        >
          <FontAwesomeIcon icon={faStore} />
          <span className="relative hidden sm:block">Online Store</span>
        </Link>
      </div>
      <h3 className="mb-1 mt-6">User</h3>
      <div className="mx-1 flex flex-col items-stretch gap-3">
        <Link
          to=""
          className="flex items-center justify-start gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-stone-100"
        >
          <FontAwesomeIcon icon={faGear} />
          <span className="relative hidden sm:block">Setting</span>
        </Link>
        <Link
          to=""
          className="flex items-center justify-start gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-stone-100"
        >
          <FontAwesomeIcon icon={faCircleQuestion} />
          <span className="relative hidden sm:block">Helper</span>
        </Link>
        <Link
          onClick={() => {
            // dispatch(logout());
            // navigate("");
          }}
          className="flex items-center justify-start gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-stone-100"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span className="relative hidden sm:block">Logout</span>
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;

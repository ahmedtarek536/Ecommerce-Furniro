import {
  faBars,
  faBell,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Searchbar from "../../ui/Searchbar";
import { useSelector } from "react-redux";

function DashboardHeader() {
  const { id, image } = useSelector((state) => state.account);
  return (
    <div>
      <header className="flex items-center justify-between rounded-md bg-white p-4 px-6">
        <p>User</p>
        <div className="flex items-center justify-center gap-6 text-lg">
          <div className="hidden md:block">
            <Searchbar />
          </div>
          <Link>{<FontAwesomeIcon icon={faBell} />}</Link>
          {id ? (
            <img src={image} className="h-8 w-8 rounded-full" />
          ) : (
            <Link to="/signin">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}

export default DashboardHeader;

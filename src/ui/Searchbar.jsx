import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Searchbar() {
  return (
    <form className="relative">
      <input
        type="search"
        placeholder="search"
        className="w-36 rounded-lg border border-stone-300 px-8 lg:w-40"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="transom absolute left-2 top-0 translate-y-[50%] text-sm"
      />
    </form>
  );
}

export default Searchbar;

import {
  faCircleCheck,
  faHeadphonesSimple,
  faTrophy,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

function Footer() {
  return (
    <>
      <footer className="mt-20 bg-[#FAF3EA] px-16 py-10">
        <div className="flex flex-col flex-wrap justify-around gap-6 sm:flex-row">
          <Quatilty title="High Quality" des="crafted from top materials">
            {" "}
            <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faTrophy} />
          </Quatilty>
          <Quatilty title="Warranty Protection" des="Over 2 years">
            {" "}
            <FontAwesomeIcon
              style={{ fontSize: "30px" }}
              icon={faCircleCheck}
            />
          </Quatilty>
          <Quatilty title="Free Shipping" des="Order over 150 $">
            {" "}
            <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faWallet} />
          </Quatilty>
          <Quatilty title="24 / 7 Support" des="Dedicated support">
            {" "}
            <FontAwesomeIcon
              style={{ fontSize: "30px" }}
              icon={faHeadphonesSimple}
            />
          </Quatilty>
        </div>
      </footer>
      <MainFooter />
    </>
  );
}

function Quatilty({ children, title, des }) {
  return (
    <div className="flex items-center gap-4">
      {children}
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="font-[#777] text-sm">{des}</p>
      </div>
    </div>
  );
}

function MainFooter() {
  return (
    <>
      <div className="grid grid-cols-4 gap-3 bg-white px-8 py-10 text-center text-sm">
        <div className="flex flex-col gap-4">
          <div className="hidden sm:block">
            {" "}
            <Logo />
          </div>
          <p className="text-sm text-[#777]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p>Links</p>
          <p>Home</p>
          <p>Shop</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="flex flex-col gap-4">
          <p>Help</p>
          <p>Payment Optation</p>
          <p>Returns</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex flex-col gap-4">
          <p>News Letter</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            error dicta necessitatibus nemo voluptatibus recusandae, quidem
            animi,
          </p>
        </div>
      </div>
      <div className="px-16">
        <div className="border-t border-[#eee] py-4">
          2023 furino. All rights reverved
        </div>
      </div>
    </>
  );
}

export default Footer;

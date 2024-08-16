import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import Headers from "../ui/Header";
import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../ui/Footer";

function Contact() {
  return (
    <>
      <Headers />
      <div className="m-auto mt-28 w-[80%]">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Get In Touch With Us</h3>
          <p className="m-auto mt-4 max-w-[60%] text-xs text-[#777]">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div className="mt-10 grid-cols-3 gap-20 sm:grid">
          <div className="flex flex-col gap-12">
            <Element
              title="Address"
              info1="236 5th SE Avenue, New "
              info2="York NY10000, United States"
            >
              {" "}
              <FontAwesomeIcon icon={faLocationDot} />
            </Element>
            <Element
              title="Phone"
              info1="Mobile: +(84) 546-6789"
              info2="Hotline: +(84) 456-6789"
            >
              {" "}
              <FontAwesomeIcon icon={faPhone} />
            </Element>
            <Element
              title="Working Time"
              info1="Monday-Friday: 9:00 - 22:00"
              info2="Saturday - Sunday: 9:00 - 21:00"
            >
              {" "}
              <FontAwesomeIcon icon={faClock} />
            </Element>
          </div>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Element({ children, title, info1, info2 }) {
  return (
    <div className="flex gap-4">
      {children}
      <div>
        <h4 className="xl font-semibold capitalize">{title}</h4>
        <p className="text-xs text-[#777]">{info1}</p>
        <p className="text-xs text-[#777]">{info2}</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <form className="col-span-2 mt-12">
      <div className="flex items-center justify-start gap-2 md:gap-4">
        <div className="mt-4 flex w-full flex-col items-start justify-start gap-1">
          <label className="font-semibold" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            className="input w-full"
            placeholder="Enter First Name"
            required
          />
        </div>
        <div className="mt-4 flex w-full flex-col items-start justify-start gap-1">
          <label className="font-semibold" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            className="input w-full"
            placeholder="Enter Last Name"
            required
          />
        </div>
      </div>
      <div className="mt-4 flex flex-col items-start justify-start gap-1">
        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="input w-full"
          placeholder="Enter Email"
        />
      </div>
      <div className="mt-8 flex flex-col items-start justify-start gap-1">
        <label className="font-semibold" htmlFor="confirmPassword">
          Message
        </label>
        <textarea
          name=""
          id=""
          className="input min-h-24 w-full"
          placeholder="Enter your message..."
        ></textarea>
      </div>
      <div className="text-center">
        <Button type="full">Send</Button>
      </div>
    </form>
  );
}

export default Contact;

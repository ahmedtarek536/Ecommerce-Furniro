import {
  faComment,
  faHourglassHalf,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import image1 from "../../images/Rectangle 68.png";
import image2 from "../../images/Rectangle 68 (1).png";
import image3 from "../../images/Rectangle 68 (2).png";

const blogs = [
  {
    title: "Going all-in with millennial design",
    image: image1,
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    title: "Exploring new ways of decorating",
    image: image2,
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
  {
    title: "Handmade pieces that took time to make",
    image: image3,
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
  },
];

function About() {
  return (
    <>
      <Header />
      <div className="m-auto mt-16 w-[80%]">
        <div className="">
          <div className="col-span-5">
            {blogs.map((blog) => (
              <Blog blog={blog} key={blog.title} />
            ))}
          </div>
        </div>
        ;
      </div>
      <Footer />
    </>
  );
}

function Blog({ blog }) {
  return (
    <div className="mt-14">
      <img src={blog.image} />
      <div className="mb-6 flex items-center gap-8 text-[#777]">
        <div>
          <FontAwesomeIcon icon={faUser} /> Admin
        </div>
        <div>
          <FontAwesomeIcon icon={faHourglassHalf} /> 14 Oct 2022
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} /> Wood
        </div>
      </div>
      <h4 className="text-lg font-bold">{blog.title}</h4>
      <p className="text-xs text-[#777] sm:text-lg">{blog.des}</p>
    </div>
  );
}

export default About;

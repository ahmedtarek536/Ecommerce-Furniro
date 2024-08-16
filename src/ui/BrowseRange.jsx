import image1 from "../../images/image 106 (1).png";
import image2 from "../../images/image 100.png";
import image3 from "../../images/Mask Group.png";

function BrowseRange() {
  return (
    <div className="px-2 py-12 text-center">
      <h2 className="text-3xl font-bold">Browse The Range</h2>
      <p className="text-stone-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="m-[auto] mt-12 flex w-[95%] items-center justify-center gap-3 md:w-[85%] md:gap-6">
        <Card image={image1} title="Dining" />
        <Card image={image2} title="Living" />
        <Card image={image3} title="BedRoom" />
      </div>
    </div>
  );
}

function Card({ title, image }) {
  return (
    <div className="text-center">
      <img
        className="min-h-[200px] rounded-xl object-cover md:min-h-[400px]"
        src={image}
      />
      <h3 className="py-3 text-lg font-semibold">{title}</h3>
    </div>
  );
}

export default BrowseRange;

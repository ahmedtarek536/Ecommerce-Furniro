import image from "../../images/homeBg.png";
function Discover() {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`home-background flex h-screen items-center justify-end bg-cover bg-center`}
    >
      <div className="box spy-10 mr-12 w-[70%] rounded-xl bg-[#FFF3E3] p-3 px-8 sm:px-12 md:w-[50%]">
        <div className="mt-5 text-lg font-semibold">New Arrivale</div>
        <h2 className="my-4 text-3xl font-bold text-[#B88E2F] md:text-6xl">
          Discover Our New Collection
        </h2>
        <p className="text-sm font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mb-4 mt-8 bg-[#B88E2F] px-8 py-4 text-white">
          BUW NOW
        </button>
      </div>
    </div>
  );
}

export default Discover;

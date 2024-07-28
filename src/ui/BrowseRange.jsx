function BrowseRange() {
  return (
    <div className="px-2 py-12 text-center">
      <h2 className="text-3xl font-bold">Browse The Range</h2>
      <p className="text-stone-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="m-[auto] mt-12 flex w-[95%] items-center justify-center gap-3 md:w-[85%] md:gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="text-center">
      <img
        className="min-h-[200px] rounded-xl object-cover md:min-h-[400px]"
        src="https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bf1GqJL0vGgVLTjwaSWFLbGhjVwhk9QZbBA2QVGX4f2lqHMim4wI6uZs0sxY8RAu2h~L12um5SAcjjC4~qaEkMXKlIfJvVV5YLi9HeF367pzD08VQ37hPjCQ-Vwst1C4lmnmbM1GXxckROFJ3asV961gs-HNrCcG5di08PGAKvBVENqwQsdR-Xki8bTeh1A28uYf2Izq7S4NEGH-ebi3BUq0Uf3WfVkOFYiwTgMUADbhr1Kc6M7BlrUefTPUJwz3x8vcXmbhe4jwvbGO1sUuwTeo0bS194jrMi7E7QfoynTY6hum6q8iL7W3OVaqAm15DXjCG9AlaK8GEVbsLaVGQQ__"
        alt="card-img"
      />
      <h3 className="py-3 text-lg font-semibold">Living</h3>
    </div>
  );
}

export default BrowseRange;

import logo from "../../images/Meubel House_Logos-05.png";

function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <img src={logo} alt="logo img" className="w-10" />
      <h1 className="text-2xl font-bold tracking-wider">Furniro</h1>
    </div>
  );
}

export default Logo;

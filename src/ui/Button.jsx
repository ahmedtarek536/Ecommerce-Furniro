function Button({ children, type, onClick }) {
  const base = "mb-4 mt-8 px-16 font-semibold text-sm py-3";
  const style = {
    outline: `${base} bg-white border border-[#B88E2F] text-[#B88E2F]`,
    full: `${base} bg-[#B88E2F] text-white`,
  };

  if (onClick) {
    return (
      <button className={style[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  return <button className={style[type]}>{children}</button>;
}

export default Button;

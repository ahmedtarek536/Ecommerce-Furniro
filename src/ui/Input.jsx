function Input({ children, title }) {
  return (
    <div className="mt-8 flex flex-col items-start justify-start gap-1">
      <label className="font-semibold" htmlFor={children.props.id}>
        {title}
      </label>
      {children}
    </div>
  );
}

export default Input;

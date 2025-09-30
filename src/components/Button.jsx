import className from "classnames";

function Button({ children, ...rest }, ref) {
  const classes = className(
    rest.className,
    "flex items-center justify-center cursor-pointer px-3 py-2 text-sm md:text-base"
  );
  return (
    <button {...rest} className={classes} ref={ref}>
      {children}
    </button>
  );
}

export default Button;

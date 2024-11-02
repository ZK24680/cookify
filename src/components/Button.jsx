const defaultSyle = "rounded-lg    outline-none hover:bg-[#B03030]";

function Button({ type = "primary", children, onClick }) {
  const style = {
    primary: `bg-[var(--secondary-color)] text-[var(--secondary-text-color)] text-xs md:text-lg  px-5 py-3 `,
    toggle: `text-2xl px-4 py-2 md:hidden static z-10 text-[var(--primary-text-color)]`,
  };

  return (
    <button className={`${defaultSyle} ${style[type]} `} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

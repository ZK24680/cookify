const defaultSyle = "rounded-lg    outline-none hover:bg-[#B03030]";

function Button({ type = "primary", children, onClick, disabled }) {
  const style = {
    primary: `bg-[var(--secondary-color)] text-[var(--secondary-text-color)] text-xs md:text-lg  px-5 py-3 `,
    toggle: `text-2xl px-4 py-2 md:hidden static z-10 text-[var(--primary-text-color)]`,
    search: `flex items-center justify-center rounded-full bg-[var(--primary-color)] px-2 py-2 text-xl text-[var(--secondary-text-color)] hover:bg-[#dc2626] sm:px-3 sm:py-3`,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${type === "search" ? "" : defaultSyle} ${style[type]} `}
    >
      {children}
    </button>
  );
}

export default Button;

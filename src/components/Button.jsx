const defaultSyle = "rounded-lg    outline-none hover:bg-[#B03030]";

function Button({ type = "primary", children, onClick, disabled }) {
  const style = {
    primary: `bg-[var(--secondary-color)] text-[var(--secondary-text-color)] text-xs md:text-lg  px-5 py-3 `,
    toggle: `text-2xl px-4 py-2 md:hidden static z-10 text-[var(--primary-text-color)]`,
    search: `flex items-center justify-center rounded-full bg-[var(--primary-color)] px-2 py-2 text-xl text-[var(--secondary-text-color)] hover:bg-[#dc2626] sm:px-3 sm:py-3`,
    signIn: `flex items-center justify-center gap-1 rounded-md bg-[var(--secondary-color)] px-3 py-2 text-[var(--secondary-text-color)]`,
    submit: `bg-[var(--secondary-color)] px-1 py-3  xl:px-2 xl:py-4 text-[var(--secondary-text-color)] transition duration-300 ease-in-out`,
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

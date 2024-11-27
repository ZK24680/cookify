const defaultSyle = "rounded-lg    outline-none ";

function Button({ type = "primary", children, onClick, disabled }) {
  const style = {
    primary: `bg-[var(--secondary-color)] text-[var(--secondary-text-color)] text-xs md:text-lg  px-3 py-3 hover:bg-[var(--accent-color)] `,
    toggle: `text-2xl px-4 py-2 md:hidden static z-10 text-[var(--primary-text-color)]`,
    icon: `flex items-center justify-center hover:bg-[var(--accent-color)] rounded-full bg-[var(--primary-color)] px-2 py-2 text-xl text-[var(--secondary-text-color)]  sm:px-3 sm:py-3`,
    signIn: `flex items-center justify-center gap-1 rounded-md bg-[var(--secondary-color)] px-1 py-2 text-xs  tracking-tight  text-[var(--secondary-text-color)] hover:bg-[var(--accent-color)]`,
    submit: `bg-[var(--secondary-color)] border-none px-1 py-4  xl:px-2  text-[var(--secondary-text-color)] transition duration-300 ease-in-out hover:bg-[var(--accent-color)]`,
    danger: `bg-[var(--primary-color)] text-[var(--secondary-text-color)] text-xs md:text-lg  px-3 py-4 hover:bg-[#ff3838] `,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${type === "icon" ? "" : defaultSyle} ${style[type]}`}
    >
      {children}
    </button>
  );
}

export default Button;

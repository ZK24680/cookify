function FormRowVertical({ children, role = "default" }) {
  const styles = {
    default:
      "grid w-full gap-y-2 sm:gap-0 sm:grid-cols-[1fr_2fr_1fr] items-center border-b-2 py-4 text-base",
    button: "flex w-full gap-3 justify-end",
  };

  return <div className={`${styles[role]}`}>{children}</div>;
}

export default FormRowVertical;

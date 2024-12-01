function Logo({ style }) {
  return (
    <div>
      <img
        src="../src/assets/images/cookify-logo.png"
        alt="cookify-logo"
        className={`${style} cursor-pointer`}
      />
    </div>
  );
}

export default Logo;

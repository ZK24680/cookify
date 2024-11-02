import Logo from "./Logo";
import MainNav from "./MainNav";

function SideBar() {
  return (
    <aside className="sidebar flex items-center sm:row-span-2 sm:flex-col sm:border-r sm:border-[var(--border-color)]">
      <div className="a hidden w-9/12 sm:block">
        <Logo />
      </div>
      <MainNav />
    </aside>
  );
}

export default SideBar;

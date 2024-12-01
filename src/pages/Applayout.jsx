import { Outlet } from "react-router-dom";
import Main from "../components/Main";
import PageNav from "../components/PageNav";
import SideBar from "../components/SideBar";

function Applayout() {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[1fr_11fr_1fr] overflow-hidden bg-[var(--background-color)] sm:grid-cols-[1fr_5fr] sm:grid-rows-[1fr_12fr]">
      <SideBar />
      <PageNav />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default Applayout;

import MenuDropdown from "../MenuDropdown";
import SidebarNavigation from "./SidebarNavigation";

export default function Sidebar() {
  return (
    <div className="fixed">
      <section className="bg-primary pt-16 h-screen overflow-y-scroll">
        <div className="text-white md:static  h-full absolute">
          <div className="sidebar md:block hidden  overflow-hidden">
            <ul className="pt-4 space-y-4 tracking-wide adminmenu text-sm">
              <SidebarNavigation />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

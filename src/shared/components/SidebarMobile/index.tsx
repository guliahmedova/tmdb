import { dropdownMenu } from "@/shared/constants/navbar-menu";
import { SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ISidebarMobile {
  isSidebarVisible: boolean;
  setSidebarVisibility: React.Dispatch<SetStateAction<boolean>>;
}

const SidebarMobile = ({
  isSidebarVisible,
  setSidebarVisibility,
}: ISidebarMobile) => {
  const [isMenuVisible, setMenuVisibility] = useState<string>("");

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isSidebarVisible]);

  return (
    <div
      className={`fixed duration-1000 transition-all ease-in-out ${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      } z-20 w-96 max-h-full h-screen bg-dark_blue text-white font-semibold flex items-center opacity-95 backdrop-blur-3xl`}
    >
      <div className="min-h-full w-full flex flex-col pt-8">
        {dropdownMenu.map((menu) => (
          <div className="w-full h-full px-10" key={menu.id}>
            <div className="dropdown inline-block relative">
              <button
                className="font-semibold inline-flex items-center text-white whitespace-nowrap mt-3 text-xl"
                onClick={() => setMenuVisibility(menu.title)}
              >
                <span className="mr-1">{menu.title}</span>
              </button>

              {isMenuVisible === menu.title && (
                <ul className="dropdown-menu py-2">
                  {menu.menu.map((m) => (
                    <li key={m.id}>
                      <Link
                        onClick={() => setSidebarVisibility(false)}
                        to={m.to}
                        className="py-2 block text-slate-400 whitespace-nowrap"
                      >
                        {m.subtitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarMobile;

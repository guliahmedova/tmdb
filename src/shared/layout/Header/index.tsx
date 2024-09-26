import bell from "@/assets/imgs/bell.svg";
import closeIcon from "@/assets/imgs/close_white.svg";
import logo from "@/assets/imgs/logo.svg";
import logoMobile from "@/assets/imgs/logo_mobile.jpg";
import menuIcon from "@/assets/imgs/menu.svg";
import searchIcon from "@/assets/imgs/search.svg";
import LanguageDropdown from "@/shared/components/Dropdowns/LanguageMenu";
import Dropdown from "@/shared/components/Dropdowns/MenuDropdown";
import NewDropdown from "@/shared/components/Dropdowns/NewDropdown";
import ProfileMenu from "@/shared/components/Dropdowns/ProfileMenu";
import SearchBar from "@/shared/components/SearchBar";
import SidebarMobile from "@/shared/components/SidebarMobile";
import { dropdownMenu } from "@/shared/constants/navbar-menu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSearcBarVisible, setSearchBarVisibility] = useState<boolean>(false);
  const [isSidebarVisible, setSidebarVisibility] = useState<boolean>(false);
  const [isNavbarVisible, setNavbarVisibility] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setNavbarVisibility(false);
      } else {
        setNavbarVisibility(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
    }
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`bg-dark_blue w-full flex justify-center z-50 fixed top-0 left-0 h-16 5xl:h-32 transition-all duration-500 transform ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-5 max-w-7xl h-full w-full 5xl:max-w-full 5xl:px-80">
          <div className="flex justify-between w-full h-full items-center">
            <div className="2xl:flex hidden items-center gap-5 5xl:gap-10">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="object-contain w-[154px] h-5"
                />
              </Link>
              <div className="flex items-center gap-4">
                {dropdownMenu.map((dropdown) => (
                  <Dropdown
                    key={dropdown.id}
                    title={dropdown.title}
                    menu={dropdown.menu}
                  />
                ))}
              </div>
            </div>

            <button
              className="size-7 cursor-pointer 2xl:hidden inline-block"
              onClick={() => setSidebarVisibility((prevState) => !prevState)}
            >
              <img src={menuIcon} alt="menu" />
            </button>

            <Link to="/" className="2xl:hidden inline-block mx-auto">
              <img src={logoMobile} alt="logo" className="size-14" />
            </Link>

            <div className="flex items-center 2xl:gap-8 gap-0 5xl:gap-24">
              <NewDropdown />
              <LanguageDropdown />
              <div className="relative cursor-pointer 2xl:inline-block hidden">
                <img src={bell} alt="bell" className="size-5 5xl:size-10" />
                <sub className="absolute flex flex-col items-center justify-center text-xs bottom-3 5xl:-top-2 5xl:left-4 left-2 5xl:size-8 size-4 bg-red-600 text-white rounded-full 5xl:text-lg">
                  1
                </sub>
              </div>
              <ProfileMenu />
              <button
                onClick={() =>
                  setSearchBarVisibility((prevState) => !prevState)
                }
              >
                <img
                  src={isSearcBarVisible ? closeIcon : searchIcon}
                  alt="search"
                  className="size-6 cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
        {isSearcBarVisible && <SearchBar />}
      </header>

      <SidebarMobile
        isSidebarVisible={isSidebarVisible}
        setSidebarVisibility={setSidebarVisibility}
      />
    </>
  );
};

export default Header;

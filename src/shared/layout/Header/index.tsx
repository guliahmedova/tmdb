import bell from "@/assets/imgs/bell.svg";
import logo from "@/assets/imgs/logo.svg";
import searchIcon from "@/assets/imgs/search.svg";
import LanguageDropdown from "@/shared/components/Dropdowns/LanguageMenu";
import Dropdown from "@/shared/components/Dropdowns/MenuDropdown";
import NewDropdown from "@/shared/components/Dropdowns/NewDropdown";
import ProfileMenu from "@/shared/components/Dropdowns/ProfileMenu";
import { dropdownMenu } from "@/shared/constants/navbar-menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-800 w-full flex justify-center fixed top-0 left-0 right-0 h-16">
      <div className="px-10 max-w-7xl h-full bg-green- w-full">
        <div className="flex justify-between bg-red- w-full h-full items-center">
          <div className="flex items-center gap-5">
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

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-8">
            <NewDropdown />
            <LanguageDropdown />
            <div className="relative cursor-pointer">
              <img src={bell} alt="bell" className="size-5" />
              <sub className="absolute flex flex-col items-center justify-center text-xs bottom-3 left-2 size-4 bg-red-600 text-white rounded-full">
                1
              </sub>
            </div>
            <ProfileMenu />
            <img src={searchIcon} alt="" className="size-5 cursor-pointer" />
          </div>
          {/* RIGHT SIDE */}
        </div>
      </div>
    </header>
  );
};

export default Header;

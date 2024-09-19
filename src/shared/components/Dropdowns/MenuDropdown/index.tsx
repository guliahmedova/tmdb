import { Link } from "react-router-dom";

interface IDropdown {
  title: string;
  menu: {
    id: string;
    subtitle: string;
    to: string;
  }[];
}

const Dropdown = ({ title, menu }: IDropdown) => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="dropdown inline-block relative group">
        <button className="font-semibold inline-flex items-center text-white whitespace-nowrap">
          <span className="mr-1">{title}</span>
        </button>

        <ul className="dropdown-menu absolute hidden group-hover:block text-slate-800 bg-white border shadow rounded py-2">
          {menu.map((m) => (
            <li key={m.id}>
              <Link
                to={m.to}
                className="py-2 pl-4 pr-16 block hover:bg-slate-100 whitespace-nowrap"
              >
                {m.subtitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

import { motion } from "framer-motion";
import { SetStateAction } from "react";

type TabT = {
  key: string;
  label: string;
};

interface ISlidingTabBar {
  tabs: TabT[];
  layoutId: string;
  getActiveTab: React.Dispatch<SetStateAction<string>>;
  activeTab: string;
}

const SlidingTabBar = ({
  tabs,
  layoutId,
  getActiveTab,
  activeTab,
}: ISlidingTabBar) => {
  return (
    <div className="flex items-center border border-dark_blue rounded-full cursor-pointer font-semibold">
      {tabs?.map((tab) => (
        <button
          key={tab.key}
          className="rounded-full lg:px-5 px-3 lg:py-1 py-0.5 relative outline-none"
          onClick={() => getActiveTab(tab.key)}
        >
          {activeTab === tab.key && (
            <motion.span
              layoutId={layoutId}
              className="absolute inset-0 z-10 bg-dark_blue rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            ></motion.span>
          )}
          <span
            className={`relative z-10 text-xs lg:text-base ${
              activeTab === tab.key
                ? "bg-gradient-to-r from-[#c0fecf] text-transparent to-[#1ed5a9] bg-clip-text"
                : "text-dark_blue"
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SlidingTabBar;

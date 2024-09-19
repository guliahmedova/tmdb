import profileIcon from "@/assets/imgs/profile.svg";

const ProfileMenu = () => {
  return (
    <div>
      <div className="2xl:hidden inline-block size-6">
        <img src={profileIcon} alt="" />
      </div>
      <span className="bg-[#01C6AC] size-8 text-white font-semibold text-sm cursor-pointer 2xl:flex flex-col items-center justify-center rounded-full text-center hidden">
        N
      </span>
    </div>
  );
};

export default ProfileMenu;

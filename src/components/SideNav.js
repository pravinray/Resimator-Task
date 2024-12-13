import React from "react";
import { AiOutlineHome, AiOutlineSetting, AiOutlineUser, AiOutlineTeam } from "react-icons/ai";

const SideNav = () => {
  return (
    <div className="h-screen w-20 flex flex-col items-center py-6">
      {/* Logo */}
      <div className="mb-6">
        <img
          src="https://img.jobsnepal.com/big/BFJkgpx1vYB33hHCh7mRnduivlFiY1DzNDl67VKt.png" // Replace with your logo path
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
      </div>
      {/* Nav Items */}
      <div className="flex flex-col items-center gap-6">
        <NavItem icon={<AiOutlineHome />} label="Home" />
        <NavItem icon={<AiOutlineUser />} label="Users" />
        <NavItem icon={<AiOutlineTeam />} label="Team" />
        <NavItem icon={<AiOutlineSetting />} label="Settings" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => (
  <div
    className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-white"
    title={label}
  >
    <div className="text-2xl">{icon}</div>
  </div>
);

export default SideNav;

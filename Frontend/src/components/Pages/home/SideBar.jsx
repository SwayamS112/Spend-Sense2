// Sidebar.js
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  IconUser,
  IconSettings,
  IconPhoneCall,
  IconLogout,
} from "@tabler/icons-react";
import { useState } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const sidebarVariants = {
    collapsed: { width: "4rem" },
    expanded: { width: "14rem" },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg z-50 flex flex-col justify-between py-5"
      variants={sidebarVariants}
      initial="collapsed"
      animate={isHovered ? "expanded" : "collapsed"}
      transition={{ type: "spring", stiffness: 200 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col px-4 space-y-4">
        <NavItem
          icon={<IconUser size={20} />}
          label="Profile"
          to="/dashboard"
          isHovered={isHovered}
        />
        <NavItem
          icon={<IconSettings size={20} />}
          label="Settings"
          to="/settings"
          isHovered={isHovered}
        />
        <NavItem
          icon={<IconPhoneCall size={20} />}
          label="Contact"
          to="/contact"
          isHovered={isHovered}
        />
        <NavItem
          icon={<IconLogout size={20} />}
          label="Logout"
          onClick={handleLogout}
          isHovered={isHovered}
        />
      </div>

      {/* User Avatar at Bottom */}
      <div className="flex items-center px-4 pb-4">
        <img
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          className="w-8 h-8 rounded-full"
          alt="User"
        />
        {isHovered && (
          <span className="ml-3 text-sm font-medium text-white">
            Username
          </span>
        )}
      </div>
    </motion.div>
  );
};

// Helper component for nav items
const NavItem = ({ icon, label, to, onClick, isHovered }) => {
  const classNames = "flex items-center p-2 rounded hover:bg-gray-700 cursor-pointer";

  if (to) {
    return (
      <Link to={to} className={classNames}>
        {icon}
        {isHovered && <span className="ml-3">{label}</span>}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={classNames}>
      {icon}
      {isHovered && <span className="ml-3">{label}</span>}
    </div>
  );
};

export default Sidebar;

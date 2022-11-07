import Link from "next/link";
import React from "react";
import { FaBell, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <Link href="/">LOGO</Link>
      </div>
      <div className="header_profile">
        <div className="bell_icon">
          <FaBell />
          <div className="notification_icon">1</div>
        </div>

        <div className="header_profile_item">
          <span>Личный кабинет</span>
          <div className="user_icon">
            <FaUserAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

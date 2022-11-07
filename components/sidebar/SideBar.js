import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const SideBar = ({ arr }) => {
  const router = useRouter();
  const route = router.pathname;
  // console.log(route);
  return (
    <div className="side_bar">
      <ul>
        {arr.map((item) => (
          <Link href={item.to} key={item.id}>
            <li
              className={
                route === item.to
                  ? "active"
                  : route === item.to + "/[id]"
                  ? "active"
                  : null
              }
            >
              <item.icon />
              <span>{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

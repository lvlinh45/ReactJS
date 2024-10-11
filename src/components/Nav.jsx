import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/profile",
    title: "Profile",
  },
  {
    id: 3,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 4,
    to: "/contact",
    title: "Contact us",
  },
];

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-center p-5 bg-white shadow-md gap-x-5">
        {ListLink.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            key={item.id}
            to={item.to}
          >
            {item.title}
          </NavLink>
        ))}

        {/*   <NavLink
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
        to={"/blog"}
      >
        Blog
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-green-400" : "")}
        to={"/profile"}
      >
        Profile
      </NavLink> */}
      </div>

      {/* Outlet giống chilren */}
      <Outlet></Outlet>
    </>
  );
};

export default Nav;

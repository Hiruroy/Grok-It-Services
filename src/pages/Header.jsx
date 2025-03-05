import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActiveLink = (path) => (location.pathname === path ? "active" : "");

  return (
    <>
      <header className="bg-black  z-10 w-full text-white fixed top-0 ">
        <div className="container">
          <div className="bg-base-400 h-[90px] flex items-center justify-between">
            <NavLink to="/" className="logo flex items-center gap-[15px]">
              <img src="/img/logo.png" alt="logo" />
              <span className="text-[30px] font-[900]">Grok</span>
            </NavLink>

            <div className="flex items-center">
              <ul className="menu items-center  menu-horizontal hidden md:flex">
                <li>
                  <NavLink className={() => isActiveLink("/")} to="/">
                    Home
                  </NavLink>
                </li>

                <li className="relative menuhover">
                  <NavLink className={() => isActiveLink("/about")} to="/about">
                    About
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </NavLink>
                  <ul className="submenu">
                    <li>
                      <NavLink to="/about/gallery">Gallery</NavLink>
                    </li>
                  
                  </ul>
                </li>

                <li>
                  <NavLink
                    className={() => isActiveLink("/services")}
                    to="/services"
                  >
                    Services
                    
                
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={() => isActiveLink("/projects")}
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={() => isActiveLink("/careers")}
                    to="/careers"
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={() => isActiveLink("/contact")}
                    to="/contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>

              <ul className="md:hidden ">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Dynamic Content */}
      <Outlet />
    </>
  );
}

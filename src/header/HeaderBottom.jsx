import { FaBars } from "react-icons/fa";
import MobileNav from "../home-components/MobileNav";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
let lastScroll = 0;
const ANCHORS = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "airport taxi",
    url: "/",
  },
  {
    text: "city rides",
    url: "/",
  },
  {
    text: "Taxi",
    url: "/car",
  },
];

export default function HeaderBottom({ color }) {
  const [isOpenNav, setIsOpenNav] = useState(false);
  // useEffect(() => {
  //   const headerBottom = document.getElementById("headerBottom");
  //   const headerTop = document.getElementById("headerTop");

  //   const headerTopHeight = headerTop.scrollHeight;
  //   headerBottom.style.top = `${headerTopHeight}px`;

  //   window.addEventListener("scroll", navSticky);

  //   function navSticky() {
  //     let currentScroll = window.pageYOffset;

  //     if (currentScroll > lastScroll) {
  //       headerBottom.style.transform = "translate3D(0 ,-100%,0)";
  //       headerBottom.classList.add("blur-bg");
  //     } else if (
  //       currentScroll < lastScroll &&
  //       currentScroll < headerTopHeight
  //     ) {
  //       headerBottom.classList.remove("blur-bg");
  //       headerBottom.style.transform = "translateY(0)";
  //     }

  //     lastScroll = currentScroll;
  //   }
  //   return () => window.removeEventListener("scroll", navSticky);
  // }, []);

  useEffect(() => {
    const headerParent = document.getElementById("headerParent");
    const headerBottom = document.getElementById("headerBottom");
    headerParent.style.height = `${headerParent.clientHeight}px`;

    window.addEventListener("scroll", stickyNav);

    function stickyNav() {
      let currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll) {
        headerBottom.classList.add("headerBottom");
      }
      if (currentScroll < headerParent.clientHeight) {
        headerBottom.classList.remove("headerBottom");
      }
    }
  }, []);

  return (
    <div className="" id="headerBottom">
      <div className="container-md flex items-center justify-between py-3">
        <div>
          <Link to="/">
            <a
              className={classNames(
                "font-[900] text-3xl LOGO",
                color ? "text-white" : "text-[#0A1A34]",
              )}
            >
              logo
            </a>
          </Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex">
            {ANCHORS.map((ANC) => {
              return (
                <li
                  key={Math.random()}
                  className={classNames(
                    "text-lg px-4 duration-150 capitalize anchor",
                    color ? "text-white" : "text-[#0A1A34]",
                  )}
                >
                  <Link to={ANC.url}>
                    <a>{ANC.text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="lg:hidden relative z-50">
          <button onClick={() => setIsOpenNav(!isOpenNav)}>
            <FaBars
              className={classNames(
                "mobileBar",
                color ? "text-white" : "text-secondayColor",
              )}
              size={30}
            />
          </button>

          <MobileNav setIsOpenNav={setIsOpenNav} isOpenNav={isOpenNav} />
        </nav>
      </div>
    </div>
  );
}

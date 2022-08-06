import React, { FC, Ref } from "react";
import styles from "../../styles/Nav.module.scss";

export default function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const burger = React.createRef<HTMLButtonElement>();

  function toggleMenu() {
    if(burger && burger.current) {
    burger.current.classList.toggle(styles.opened);
    burger.current.setAttribute(
      "aria-expanded",
      burger.current.classList.contains(styles.opened).toString()
    );
    setMenuOpen(!menuOpen)
    }
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full ">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 ">
            <div className="container sm:px-4 sm:pl-0 pl-2 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto sm:px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-xl  leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
                  href="#pablo"
                >
                  勝昌土木包工業
                </a>
                <button
                  className=" cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  ref={burger}
                  onClick={() => toggleMenu() }
                >
                  <svg width="100" height="100" viewBox="0 0 100 100" className=" w-12 h-12">
                    <path
                      className={`${styles.line} ${styles.line1}`}
                      d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                    />
                    <path
                      className={`${styles.line} ${styles.line2}`}
                      d="M 20,50 H 80"
                    />
                    <path
                      className={`${styles.line} ${styles.line3}`}
                      d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-base uppercase leading-snug  hover:text-baseYellow"
                      href="#pablo"
                    >
                      泡沫防水工程
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-base uppercase leading-snug  hover:text-baseYellow"
                      href="#pablo"
                    >
                      隔熱工程
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-base uppercase leading-snug  hover:text-baseYellow"
                      href="#pablo"
                    >
                      PU跑道工程
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-base uppercase leading-snug  hover:text-baseYellow"
                      href="#pablo"
                    >
                      進口工程原料
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-base uppercase leading-snug  hover:text-baseYellow"
                      href="#pablo"
                    >
                      聯絡我們
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-base uppercase leading-snug  hover:text-baseYellow"
                      href="#pablo"
                    >
                      關於勝昌
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import styled from "styled-components";
const navigationOptions = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/posts" },
  { name: "Source Code", href: "source" },
  { name: "Github", href: "https://github.com/exiify" },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCbLbPLuvaosCwoFhL1N4BmA",
  },
];
export default function Navbar(props) {
  const [isOpened, setOpened] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, Close] = useState(false);
  function animate() {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setOpened(false);
      setIsAnimating(false);
    }, 240);
  }
  return (
    <nav className="p-4 flex flex-col">
      <div className="flex">
        <a href="/" className="text-3xl font-black">
          Kp
        </a>

        <div className="ml-auto  hidden md:block">
          {navigationOptions.map((item) => {
            const name = item.name;
            const href = item.href;
            return <a href={href}>{name}</a>;
          })}
        </div>
        <div className="ml-auto md:hidden block ">
          {isOpened ? (
            <div />
          ) : (
            <Hamburger onClick={() => setOpened(!isOpened)}></Hamburger>
          )}
        </div>
      </div>
      <div className="ml-auto md:hidden block ">
        {isOpened ? (
          <div className="flex">
            <div
              id={"menu"}
              className={` ${
                isAnimating ? "hiddenz" : "show"
              } bg-gray-900 w-full flex flex-col`}
            >
              <div className="ml-auto">
                {" "}
                <X
                  onClick={() => {
                    Close(true);
                    animate();
                  }}
                />
              </div>
              <div className="flex flex-col w-full items-center ">
                {navigationOptions.map((item) => {
                  const name = item.name;
                  const href = item.href;
                  return (
                    <a
                      className=" rounded w-full text-center p-2 px-4 hover:bg-primary-300"
                      href={href}
                    >
                      {name}
                    </a>
                  );
                })}
              </div>
            </div>

            <div
              id={isOpened ? "hiddenLULW" : "hidden"}
              className={` ${isAnimating ? "hiddenz" : "show"}`}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
function Hamburger(props) {
  return (
    <div
      {...props}
      className="hover:cursor-pointer p-2 hover:bg-primary-300 rounded"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
}
function X(props) {
  return (
    <div
      {...props}
      className="hover:cursor-pointer p-2 hover:bg-primary-300 rounded "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}

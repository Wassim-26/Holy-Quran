import React from "react";
import "./Navbar.css";
import { useStore } from "../../lib/store";
export default function Navbar() {
  const setDarkMode = useStore((state) => state.setDarkMode);
  const darkMode = useStore((state) => state.darkMode);
  return (
    <nav>
      <div className="left">
        <svg
          stroke="white"
          fill="none"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="mx-2 cursor-pointer bg-transparent hover:text-gray-400"
          height="28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          ></path>
        </svg>
        <img
          src="https://holy-quran-website.netlify.app/static/media/quran.2b985d1ab2b68d0a547d.png"
          width={48}
          height={48}
        />
        <h2>Noble Quran</h2>
      </div>
      <div
        onClick={() => {
          if (darkMode) {
            setDarkMode(false);
          } else {
            setDarkMode(true);
          }
        }}
        className="right"
      >
        {darkMode === false ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
            min-width={48}
            height={48}
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        ) : (
          <svg
            width={48}
            height={48}
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </div>
    </nav>
  );
}

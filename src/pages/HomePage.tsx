import { useState } from "react";
import arrow from "../assets/previous.png";
import logo from "../assets/legal-document.png";

function Home() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="text-black">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } p-5 pt-8 duration-300 h-screen bg-slate-600 relative`}
      >
        <img
          src={arrow}
          className={`bg-slate-400 rounded-full absolute cursor-pointer right-3 top-9 w-7 border-2 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={` bg-indigo-100 w-7 h-7 cursor-pointer duration-500`}
          ></img>
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9": "mt-2"}`}
            >   
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default Home;

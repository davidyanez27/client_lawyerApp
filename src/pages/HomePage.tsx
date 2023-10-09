import { useEffect, useState } from "react";
import arrow from "../assets/sidebar/control.png";
import logo from "../assets/logo.png";
import Example from "../components/Header";

function Home() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Search", src: "Search" },
    { title: "Templates", src: "chart_fill" },
    { title: "Documents", src: "folder", gap: true },
    { title: "Authorization ", src: "documento"},
    { title: "PATH ", src: "documento" },
    { title: "Public ", src: "documento" },
    { title: "Private  ", src: "documento" },
    { title: "Profile ", src: "User", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  // Auto close menu when on mobile
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  useEffect(() => {
    window.addEventListener("resize",handleResize)
  })

  return (
    <div className=" bg-slate-50 h-screen text-black p-5 flex">
      <div
        className={`${
          open ? "w-72" : "w-28"
        } p-5 pt-8 duration-300 h-full bg-slate-600 rounded-2xl relative`}
      >
        <img
          src={arrow}
          className={`bg-slate-400 rounded-full absolute cursor-pointer right-3 top-24 w-7 border-2 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={` bg-transparent w-12 h-12 cursor-pointer duration-500`}
          ></img>
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            APLINIO CAMPOS
          </h1> */}
        </div>
        <ul className="pt-10">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9": "mt-2"}`}
            >   
              <img src={`./src/assets/sidebar/${menu.src}.png`}/>
              <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-slate-200 w-full rounded-2xl items-center ">
            <Example/>
      </div>
    </div>
  );
}

export default Home;

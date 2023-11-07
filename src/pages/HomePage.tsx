import { useEffect, useState } from "react";
import arrow from "../assets/sidebar/control.png";
import logo from "../assets/logo.png";

import Form1 from "../components/form";
// import AutorizathionForm from "../components/AutorizathionForm";
import PublicDocumentForm from "../components/PublicDocumentForm";
import PATHDocumentForm from "../components/PATHDocumentForm";
import PrivateDocumentForm from "../components/PrivateDocumentForm";
import DocumentsCard from "../components/DocumentsCard";
import TemplateCard from "../components/TemplateCard";
import SearchCard from "../components/SearchCard";
import AutorizathionForm from "../components/AutorizathionForm";
import { Logout } from '../api/auth';


import LoginPage from "./LoginPage";
import LogoutForm from "../components/logout";

function Home() {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("");

  const Menus = [
    { title: "Search", src: "Search", template: "search" },
    { title: "Templates", src: "chart_fill", template: "templates" },
    { title: "Documents", src: "folder", template: "documents", gap: true },
    {
      title: "Authorization ",
      src: "documento",
      template: "autorizathion.docx",
    },
    { title: "Public ", src: "documento", template: "public.docx" },
    { title: "PATH ", src: "documento", template: "PATH.docx" },
    // { title: "Private  ", src: "documento", template: "private.docx" },
    { title: "Cerrar sesion", src: "User", template: "logout", gap: true },
    //{ title: "Setting", src: "Setting", template: "setting" },
  ];

  //Render the component
  const renderComponentBasedOnMenu = () => {
    switch (selectedMenu) {
      case "search":
        return <SearchCard/>;
      case "templates":
        return <TemplateCard/>;
        case "documents":
          return <DocumentsCard/>;
      case "autorizathion.docx":
        return <AutorizathionForm />;
      case "PATH.docx":
        return <PATHDocumentForm/>;
      case "public.docx":
        return <PublicDocumentForm />;
      case "private.docx":
        return <PrivateDocumentForm />;
      case "logout":
        return <LogoutForm/>;

      default:
        return <SearchCard/>;
    }
  };

  // Auto close menu when on mobile
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

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
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              }`}
            >
              <img src={`./src/assets/sidebar/${menu.src}.png`} />
              <span
                onClick={() => {
                  setSelectedMenu(menu.template);
                  //console.log(selectedMenu);
                }}
                className={`${!open && "hidden"} origin-left duration-200`}
              >
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex bg-slate-200 w-full rounded-2xl items-center justify-center ">
        {renderComponentBasedOnMenu()}
      </div>
    </div>
  );
}

export default Home;

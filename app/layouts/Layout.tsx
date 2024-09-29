import React from "react";
import { Link } from "@remix-run/react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 flex justify-between items-center p-3 px-4 sm:px-12 bg-slate-100 z-30">
        <div className="text-xl sm:text-2xl text-slate-900 font-bold">Dr Helena Gworek</div>
        <div className="flex space-x-4 sm:space-x-11 text-sm sm:text-base text-slate-800">
          <button onClick={() => scrollToSection("about")} className="hover:underline">
            O mnie
          </button>
          <div className="border-l-2 border-gray-300 h-6 mx-auto hidden sm:block" />
          <button onClick={() => scrollToSection("services")} className="hover:underline">
            Usługi
          </button>
          <div className="border-l-2 border-gray-300 h-6 mx-auto hidden sm:block" />
          <button onClick={() => scrollToSection("contact")} className="hover:underline">
            Kontakt
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer id="contact" className="flex flex-col sm:flex-row justify-between items-center p-4 bg-slate-200 text-slate-500 text-xs sm:text-sm">
        <p className="mb-2 sm:mb-0">Design by www.freepik.com</p>
        <p className="mb-2 sm:mb-0">Copyright © 2024</p>
        <p>Projekt Jakub Gałuszewski</p>
      </footer>
    </div>
  );
};

export default Layout;

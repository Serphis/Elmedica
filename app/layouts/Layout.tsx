import React from "react";
import { Link } from "@remix-run/react"

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
          <header className="sticky top-0 flex justify-between items-center p-3 px-12 bg-slate-100 z-30">
            <div className="text-2xl text-slate-900 font-bold">Helena Gworek</div>
            <div className="flex space-x-11 text-base text-slate-800">
              <button onClick={() => scrollToSection("about")}>O mnie</button>
              <div className="border-l-2 border-gray-300 h-6 mx-auto"/>
              <button onClick={() => scrollToSection("services")}>Usługi</button>
              <div className="border-l-2 border-gray-300 h-6 mx-auto"/>
              <button onClick={() => scrollToSection("contact")}>Kontakt</button>
            </div>
          </header>

          <main className="flex-grow">
                {children}
          </main>

          <footer id="contact" className="flex flex-rows justify-between items-center p-2 px-6 bg-slate-200 text-slate-500 text-sm">
            <p>Design by www.freepik.com</p>
            <p>Projekt Jakub Gałuszewski</p>
          </footer>
        </div>
    )
}

export default Layout;
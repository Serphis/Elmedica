import React from "react";
import { Link } from "@remix-run/react"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 flex justify-between items-center p-6 bg-slate-50 text-gray-600">
        <div className="text-3xl text-gray-900">Helena Gworek</div>
        <div className="flex space-x-8 text-xl">
        <button onClick={() => scrollToSection("about")}>O mnie</button>
          <button onClick={() => scrollToSection("services")}>Usługi</button>
          <button onClick={() => scrollToSection("contact")}>Kontakt</button>
        </div>
      </header>

      <main className="flex-grow">
            {children}
      </main>

      <footer id="contact" className="flex justify-end items-center p-5 bg-slate-200 text-black text-sm">
        <div className="text-right">
          <p>
            dr Helena Gworek
          </p>
          <p>
            tel. 604 274 786
          </p>
          <p>
            96-500 Sochaczew, ul. Okrężna 61
          </p>
        </div>
      </footer>
    </div>
    )
}

export default Layout;
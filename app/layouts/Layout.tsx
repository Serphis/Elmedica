import React from "react";
import { Link } from "@remix-run/react"

const Layout: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-5 bg-gray-50 text-gray-600">
        <div className="text-xl font-bold text-gray-900">Helena Gworek</div>
        <div className="flex space-x-6">
          <a href="/">O mnie</a>
          <a href="/Services">Usługi</a>
          <a href="/Contact">Kontakt</a>
        </div>
      </header>

      <main className="flex-grow">
            {children}
      </main>

      <footer className="flex justify-end items-center p-4 bg-gray-400 text-black text-sm">
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
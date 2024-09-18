import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Layout from "~/layouts/Layout";
import Modal from "~/components/Modal";
import ServicesSlider from "~/components/ServicesSlider";
import ServicesList from "~/components/ServicesList";

export const meta: MetaFunction = () => {
  return [
    { title: "Elmedica - Helena Gworek" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  const [isModalOpen, setModalOpen] = useState(true);
  const closeModal = () => setModalOpen(false);
  useEffect(() => {
    setModalOpen(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <div id="about" className="flex flex-col items-center bg-slate-100 min-h-screen">
        {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}

        <div className="text-center bg-slate-50">
          <ServicesSlider />
        </div>

        <div className="text-center mb-12 w-full shadow-lg">
          <h1 className="text-5xl font-bold mt-24 mb-4 text-gray-900">Nowoczesna medycyna regeneracyjna i estetyczna</h1>
          <p className="text-lg text-gray-600">z myślą o Twoim zdrowiu i urodzie</p>
          <div className="my-12 flex space-x-14 justify-center">
            <button onClick={() => scrollToSection("services")} className="px-16 py-4 bg-[#4095bf] text-white font-semibold rounded-md shadow-md hover:bg-[#2d6986] transition duration-300">
              Oferta
            </button>
            <button onClick={() => scrollToSection("contact")} className="px-10 py-4 bg-[#4095bf] text-white font-semibold rounded-md shadow-md hover:bg-[#2d6986] transition duration-300">
              Umów wizytę
            </button>
          </div>
        </div>

        <div id="services" className="w-full bg-slate-100 my-10 p-4 rounded-lg">
          <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-lg">
            <img
              src="/images/vitamins.jpg"
              alt="Decorative Vitamins"
              className="w-full h-64 object-cover rounded-t-lg"
            />

            <h2 className="text-3xl font-bold text-gray-900 my-6 text-center">
              Diagnostyka SO/CHECK
            </h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Szybko i bez pobierania krwi!
            </p>

            <div className="space-y-4 mb-6">
              <p className="text-md font-semibold text-gray-800 text-center">
                Stężenie komórkowe poziomu makro i mikro elementów:
              </p>
              <ul className="list-disc list-inside text-gray-600 max-w-md mx-auto">
                <li>21 minerałów: wapń, magnez, żelazo, sód, potas, miedź, cynk, selen, jod i inne</li>
                <li>7 witamin: A, C, E, D3, B1, B9, B12</li>
                <li>15 ciężkich metali: szkodliwych (aluminium, bor, rtęć, ołów, kadm, nikiel i inne)</li>
              </ul>
            </div>

            <div className="flex justify-between items-center mb-6 max-w-lg mx-auto">
              <p className="text-md font-semibold text-gray-800">
                Poziom stresu oksydacyjnego
              </p>
              <p className="text-md font-semibold text-gray-800 text-right">
                Ocena stanów zapalnych
              </p>
            </div>

            <div className="text-center mt-6 p-4 bg-slate-200 rounded-b-lg">
              <p className="text-xl font-semibold text-slate-900 mb-2">
                Zapisy pod numerem telefonu:
              </p>
              <p className="text-2xl font-bold text-slate-900">
                601-806-058
              </p>
            </div>
          </div>
        </div>
        
        <ServicesList />

      </div>
    </Layout>
  );
}
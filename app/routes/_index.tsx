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
      <div  className="bg-slate-100">
        {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}

        <div className="text-center bg-slate-50">
          <ServicesSlider />
        </div>

        <div id="about" className="w-90% mx-4 mb-8 text-center flex-row justify-center">          
          <div className="mb-10 pt-16 pb-10 shadow-lg rounded-b-lg bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-title.jpg')" }}>
            <p className="text-4xl font-bold mb-4 text-gray-900">
              Nowoczesna medycyna regeneracyjna i estetyczna
            </p>
            <p className="text-lg text-gray-600">
              z myślą o Twoim zdrowiu i urodzie
            </p>
            <div className="my-12 flex space-x-14 justify-center">
              <button
                onClick={() => scrollToSection("services")}
                className="px-12 py-3 bg-[#4095bf] text-white font-semibold rounded-lg shadow-lg hover:bg-[#2d6986] transition duration-300">
                Oferta
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-[#4095bf] text-white font-semibold rounded-lg shadow-lg hover:bg-[#2d6986] transition duration-300">
                Umów wizytę
              </button>
            </div>
          </div>

          <ServicesList />
        </div>

        <div id="services" className="w-90% mx-4 my-10 flex flex-row">
          <div className="flex flex-col justify-center px-4 w-3/4">
            <div className="shadow-lg rounded-lg bg-slate-50 p-8 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg-title.jpg')" }}>
              <h2 className="text-4xl font-bold text-gray-900 my-2 text-left">
                Diagnostyka SO/CHECK
              </h2>
              <p className="text-lg text-gray-700 text-left mb-10">
                Szybko i bez pobierania krwi!
              </p>

              <div className="rounded-lg shadow-lg bg-white p-4">
                <div className="space-y-4 mb-10">
                  <p className="text-md font-semibold text-gray-800 text-right">
                    Stężenie komórkowe poziomu makro i mikro elementów:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-right">
                    <li>21 minerałów: wapń, magnez, żelazo, sód, potas, miedź, cynk, selen, jod i inne</li>
                    <li>7 witamin: A, C, E, D3, B1, B9, B12</li>
                    <li>15 ciężkich metali: szkodliwych (aluminium, bor, rtęć, ołów, kadm, nikiel i inne)</li>
                  </ul>
                </div>

                <div className="flex justify-between px-8 pb-2">
                  <p className="text-md font-semibold text-gray-800">
                    Poziom stresu oksydacyjnego
                  </p>
                  <p className="text-md font-semibold text-gray-800 text-right">
                    Ocena stanów zapalnych
                  </p>
                </div>
              </div>

              <div className="mx-auto pt-8 px-8">
                <p className="text-md text-center font-semibold text-gray-800">
                    Zadzwoń lub napisz SMS!
                </p>
              </div>

              <div className="text-center w-fit mx-auto mt-2 p-4 bg-white shadow-lg rounded-lg">
                <p className="text-xl font-semibold text-slate-900 mb-2">
                  Zapisy pod numerem telefonu:
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  601-806-058
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/images/vitamins.jpg"
              alt="Decorative Vitamins"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="w-90% mx-4 my-10 bg-white rounded-lg shadow-lg flex flex-row">
          <div>
            <img
              src="/images/vitamins.jpg"
              alt="Decorative Vitamins"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>

          <div className="flex flex-col justify-center p-6 w-3/4">
            <div className="shadow-lg rounded-lg bg-slate-50 p-8">
              <h2 className="text-4xl font-bold text-gray-900 my-6 text-left">
                Kontakt
              </h2>
              
            </div>
            <div className="text-center">
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
              
          </div>
        </div>

      </div>
    </Layout>
  );
}
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

        <div id="about" className="w-90% mx-4 py-4 px-4 text-left">
          <div className="flex flex-row justify-between items-start bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: "url('/images/bg-title.jpg')" }}>
            <div className="w-1/2 pt-16 pb-10 ml-10">
              <p className="text-4xl font-bold mb-4 text-gray-900">
                Nowoczesna medycyna regeneracyjna i estetyczna
              </p>
              <p className="text-lg text-gray-600">
                z myślą o Twoim zdrowiu i urodzie
              </p>
              <div className="mt-20 flex space-x-14">
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

            <div className="w-1/2 text-center ml-10 pl-6 h-full rounded-br-lg">
              <ServicesSlider />
            </div>
          </div>

          <div className="mt-12">
            <ServicesList />
          </div>
        </div>


        <div className="w-90% mx-4 mr-8 my-10 flex flex-row">
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

          <div className="w-1/2 shadow-lg rounded-lg">
            <img
              src="/images/vitamins.jpg"
              alt="Decorative Vitamins"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div id="contact" className="w-90% mx-4 mt-10 flex flex-row-reverse">
          <div className="flex flex-col justify-center p-4 w-3/4">
            <div className="shadow-lg rounded-lg p-8 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/bg-title.jpg')" }}>
              <h2 className="text-4xl font-bold text-gray-900 my-24 text-left">
                Kontakt
              </h2>

              <div className="rounded-lg shadow-lg bg-white p-4">
                <ul className="list-disc list-inside text-gray-600 text-left">
                  <li>dr Helena Gworek</li>
                  <li>tel. 604 274 786</li>
                  <li>96-500 Sochaczew, ul. Okrężna 61</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-1/2 p-4">
            <img
              src="/images/contact.jpg"
              alt="Decorative Contact"
              className="w-full h-full object-cover rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </Layout>
  );
}
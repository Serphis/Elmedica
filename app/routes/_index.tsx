import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
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
      const offset = 100;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <div className="bg-slate-100">
        {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}

        <div id="about" className="w-full md:py-4">
          <div
            className="flex flex-col md:flex-row justify-between items-start bg-cover bg-center rounded-lg md:shadow-lg"
            style={{ backgroundImage: "url('/images/bg-title.jpg')" }}
          >
            <div className="flex flex-col flex-grow w-full pt-2 md:pt-6 px-4 md:px-0">
              <p className="text-xl md:text-2xl lg:text-4xl px-1 lg:py-2 lg:px-4 font-bold text-gray-900">O mnie</p>
              <div className="bg-white px-2 lg:pl-8 lg:pr-2 rounded-lg shadow-lg bg-opacity-75 flex-grow h-full sm:h-52 md:h-auto">
                <p className="text-sm xl:text-base text-gray-600 py-1">
                  Dyplomowany specjalista Tradycyjnej Medycyny Chińskiej (Pekin 2002).
                </p>
                <p className="text-sm xl:text-base text-gray-600 py-1">
                  Ukończyła kursy praktyczne i teoretyczne w Chinach oraz liczne kursy Tradycyjnej Medycyny Chińskiej w Polsce i za granicą.
                </p>
                <p className="text-sm xl:text-base text-gray-600 py-1">
                  Posiada wieloletnie doświadczenie w leczeniu chorób wewnętrznych, reumatologicznych, onkologicznych i ginekologicznych.
                </p>
                <p className="text-sm xl:text-base text-gray-600 py-1">
                  Jest specjalistą medycyny estetycznej i przeciw-starzeniowej. Wykonuje nowoczesne zabiegi estetyczne na bazie naturalnych składników oraz zabiegi leczenia chorob reumatycznych m.in. z wykorzystaniem osocza.
                </p>
              </div>

              <div className="flex justify-center mt-auto py-2 lg:py-3">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 lg:px-8 py-2 bg-[#4095bf] text-white font-semibold rounded-lg shadow-lg hover:bg-[#2d6986] transition duration-300"
                >
                  Umów wizytę
                </button>
              </div>
            </div>

            <div className="w-full text-center lg:ml-2 rounded-br-none md:rounded-br-lg mt-2 md:mt-0">
              <ServicesSlider />
            </div>
          </div>

          <div id="services" className="text-center mt-8 md:mt-16 mb-5 text-xl md:text-2xl lg:text-3xl text-slate-700">
            Oferowane usługi
          </div>
          <div>
            <ServicesList />
          </div>
        </div>

        <div className="w-full md:my-10 flex flex-col-reverse md:flex-row px-2 sm:px-4">
          <div className="flex flex-col justify-center w-full md:w-3/4">
            <div
              className="shadow-lg rounded-none rounded-b-lg md:rounded-lg bg-slate-50 bg-cover bg-center p-2"
              style={{ backgroundImage: "url('/images/bg-title.jpg')" }}
            >
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 my-2 text-left">
                Diagnostyka SO/CHECK
              </h2>
              <p className="text-md md:text-lg lg:text-xl text-gray-700 text-left mb-10">
                Szybko i bez pobierania krwi!
              </p>

              <div className="rounded-lg shadow-lg bg-white bg-opacity-75 p-4">
                <div className="space-y-4 mb-10">
                  <p className="text-md font-semibold text-gray-800 text-right">
                    Stężenie komórkowe poziomu makro i mikro elementów:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-right">
                    <li>21 minerałów: wapń, magnez, żelazo, sód, potas, miedź, cynk, selen, jod i inne</li>
                    <li>7 witamin: A, C, E, D3, B1, B9, B12</li>
                    <li>15 ciężkich metali: aluminium, rtęć, ołów, kadm</li>
                  </ul>
                </div>

                <div className="flex justify-between px-8 pb-2">
                  <p className="text-md md:text-lg lg:text-xl font-semibold text-gray-800">Poziom stresu oksydacyjnego</p>
                  <p className="text-md md:text-lg lg:text-xl font-semibold text-gray-800 text-right">
                    Ocena stanów zapalnych
                  </p>
                </div>
              </div>

              <div className="mx-auto pt-4 md:pt-8 px-8">
                <p className="text-md md:text-lg lg:text-xl text-center font-semibold text-gray-800">
                  Zadzwoń lub napisz SMS!
                </p>
              </div>

              <div className="text-center w-fit mx-auto mt-2 mb-4 md:mb-0 p-4 bg-white shadow-2xl rounded-lg">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900 mb-2">
                  Zapisy pod numerem telefonu:
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
                  601-806-058 lub 608-383-573
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:ml-2 shadow-lg rounded-t-lg rounded-none md:rounded-lg mt-4 lg:mt-0">
            <img
              src="/images/vitamins.jpg"
              alt="Decorative Vitamins"
              className="h-full object-cover shadow-lg rounded-t-lg rounded-none md:rounded-lg"
            />
          </div>
        </div>

        <div id="contact" className="mx-0 md:mx-2 flex flex-col-reverse md:flex-row-reverse">
          <div className="flex flex-col h-full justify-center md:w-3/4">
            <div
              className="shadow-lg mx-2 lg:mx-0 p-8 bg-cover bg-center rounded-none rounded-b-lg md:rounded-lg"
              style={{ backgroundImage: "url('/images/bg-title.jpg')" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 md:mt-12 mb-4 text-left">
                Kontakt
              </h2>

              <div className="rounded-lg shadow-lg bg-white p-4 bg-opacity-75">
                <ul className="list-disc list-inside text-gray-600 text-left">
                  <li>dr Helena Gworek</li>
                  <li>tel. 604 274 786 - tylko SMS</li>
                  <li>96-500 Sochaczew, ul. Okrężna 61</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 px-2 mt-6 lg:mt-0">
            <img
              src="/images/contact.jpg"
              alt="Decorative Contact"
              className="w-full h-28 md:h-full object-cover rounded-none rounded-t-lg md:rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

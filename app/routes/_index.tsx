import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Layout from "~/layouts/Layout";
import Modal from "~/components/Modal";
import ServicesSlider from "~/components/ServicesSlider";

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

  return (
    <Layout>
      <div id="about" className="flex flex-col items-center p-4 bg-slate-100 min-h-screen">
        <Modal isOpen={isModalOpen} onClose={closeModal} />

        <div className="text-center mt-10 mb-10">
          <h1 className="text-5xl font-bold mt-20 mb-4 text-gray-900">Nowoczesna medycyna regeneracyjna i estetyczna</h1>
          <p className="text-lg text-gray-600">z myślą o Twoim zdrowiu i urodzie</p>
          <div className="my-12">
            <Link to="/">
              <button className="px-16 py-4 mr-8 bg-blue-400 text-white font-semibold rounded-md shadow-md hover:bg-blue-500 transition duration-300">
                Oferta
              </button>
            </Link>
            <Link to="/">
              <button className="px-10 py-4 bg-blue-400 text-white font-semibold rounded-md shadow-md hover:bg-blue-500 transition duration-300">
                Umów wizytę
              </button>
            </Link>
          </div>
      </div>
      
      <div id="services" className="text-center mt-20 my-18 bg-slate-50 p-6 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasze usługi</h2>
        <p className="text-lg text-gray-700 mb-10">
          Oferujemy szeroki zakres usług medycznych i estetycznych, które poprawią Twoje zdrowie i urodę:
        </p>
        <ServicesSlider />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-20 mb-10">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-lg rounded-lg p-4">
          <div className="lg:w-1/2 lg:mr-4 text-center lg:text-left">
            <p className="text-md font-bold text-gray-700 mb-2">Reumatologia</p>
            <p className="text-sm text-gray-600">
              Opis: Nowoczesne metody leczenia schorzeń reumatycznych.
            </p>
          </div>
          <img src="/images/rheumatology.jpg" alt="Rheumatology" className="w-full lg:w-1/2 h-48 object-cover rounded-lg mb-4 lg:mb-0" />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-lg rounded-lg p-4">
          <img src="/images/aesthetical.jpg" alt="Aesthetic Medicine" className="w-full lg:w-1/2 h-48 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-4" />
          <div className="text-center lg:text-left lg:w-1/2">
            <p className="text-md font-bold text-gray-700 mb-2">Medycyna estetyczna</p>
            <p className="text-sm text-gray-600">
              Opis: Procedury poprawiające wygląd i zdrowie skóry.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-lg rounded-lg p-4">
          <div className="lg:w-1/2 lg:mr-4 text-center lg:text-left">
            <p className="text-md font-bold text-gray-700 mb-2">Medycyna chińska</p>
            <p className="text-sm text-gray-600">
              Opis: Tradycyjne metody leczenia i zdrowia z Chin.
            </p>
          </div>
          <img src="/images/chinese.jpg" alt="Chinese Medicine" className="w-full lg:w-1/2 h-48 object-cover rounded-lg mb-4 lg:mb-0" />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white shadow-lg rounded-lg p-4">
          <img src="/images/aging.jpg" alt="Anti-Aging" className="w-full lg:w-1/2 h-48 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-4" />
          <div className="text-center lg:text-left lg:w-1/2">
            <p className="text-md font-bold text-gray-700 mb-2">Medycyna anti-aging</p>
            <p className="text-sm text-gray-600">
              Opis: Technologie i metody przeciwdziałające starzeniu się.
            </p>
          </div>
        </div>

      </div>
      </div>
    </Layout>
  );
}
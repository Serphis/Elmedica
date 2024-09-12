import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Layout from "~/layouts/Layout"

export const meta: MetaFunction = () => {
  return [
    { title: "Elmedica - Helena Gworek" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mt-10 mb-2 text-gray-900">Nowoczesna medycyna regeneracyjna i estetyczna</h1>
          <p className="text-lg text-gray-600">z myślą o Twoim zdrowiu i urodzie</p>
          <div className="my-8">
          <Link to="/contact">
            <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Umów wizytę
            </button>
          </Link>
        </div>
        </div>

        <div className="my-12 border-t border-gray-300 w-full"></div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Specjalizuję się w...</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-bold">
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
            <img src="/images/rheumatology.jpg" alt="Rheumatology" className="w-full h-48 object-cover rounded-lg mb-2" />
            <p className="text-md text-gray-700">Reumatologii</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
            <img src="/images/aesthetical.jpg" alt="Aesthetic Medicine" className="w-full h-48 object-cover rounded-lg mb-2" />
            <p className="text-md text-gray-700">Medycynie estetycznej</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
            <img src="/images/chinese.jpg" alt="Chinese Medicine" className="w-full h-48 object-cover rounded-lg mb-2" />
            <p className="text-md text-gray-700">Medycynie chińskiej</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
            <img src="/images/aging.jpg" alt="Anti-Aging" className="w-full h-48 object-cover rounded-lg mb-2" />
            <p className="text-md text-gray-700">Medycynie anti-aging</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
import type { MetaFunction } from "@remix-run/node";
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
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Welcome to Our Medical Practice</h1>
          <p className="text-lg text-gray-600">Providing top-notch care for your health and well-being</p>
        </div>

        <div className="my-12 border-t border-gray-300 w-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
            <img src="/path/to/image1.jpg" alt="Image 1" className="w-full h-48 object-cover rounded-lg mb-2" />
            <p className="text-sm text-gray-700">Comprehensive Joint Care</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
            <img src="/path/to/image2.jpg" alt="Image 2" className="w-full h-48 object-cover rounded-lg mb-2" />
            <p className="text-sm text-gray-700">Aesthetic Procedures</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
            <img src="/path/to/image3.jpg" alt="Image 3" className="w-full h-48 object-cover rounded-lg mb-2" />
            <p className="text-sm text-gray-700">Facial Rejuvenation</p>
          </div>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4">
            <img src="/path/to/image4.jpg" alt="Image 4" className="w-full h-48 object-cover rounded-lg mb-2" />
            <p className="text-sm text-gray-700">Therapeutic Treatments</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
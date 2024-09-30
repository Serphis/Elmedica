import { useState, useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import Layout from "~/layouts/Layout";
import Modal from "~/components/Modal";
import ServicesSlider from "~/components/ServicesSlider";
import ServicesList from "~/components/ServicesList";

export const meta: MetaFunction = () => {
  return [
    { title: "Dr Helena Gworek" },
    { name: "description", content: "Specjalistka oferująca nowoczesne zabiegi estetyczne i skuteczną diagnostykę." },
    { name: "keywords", content: "medycyna chinska, medycyna estetyczna, sochaczew botoks, botoks sochaczew, zdrowie, wellness, leczenie, Sochaczew, botoks, botox, lekarz, diagnostyka, badanie, estetyczna, helena, gworek, socheck, odmladzanie, odmładzanie, zabiegi, zabieg, stawy, choroby, stawow, stawów, osocze, komorki, macierzyste, mezoterapia, usuwanie, żylaki, zylaki, żylaków, zylakow, skora" },
    { name: "robots", content: "index, follow" },
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

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Elmedica - Dr Helena Gworek",
    "description": "Specjalistka oferująca nowoczesne zabiegi estetyczne i skuteczną diagnostykę w Sochaczewie.",
    "url": "https://drhelenagworek.pl",
    "logo": "https://drhelenagworek.pl/favicon.ico",
    "image": "https://drhelenagworek.pl/images/rheumatology2.webp",
    "telephone": "601-806-058",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Okrężna 61",
      "addressLocality": "Sochaczew",
      "postalCode": "96-500",
      "addressCountry": "PL"
    },
    // "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00", // Set actual opening hours
    // "priceRange": "$$", // Adjust this depending on your pricing
    // "sameAs": [
    //   "https://www.facebook.com/elmedica",  // Replace with your actual social profiles
    //   "https://www.instagram.com/elmedica"
    // ],
    "medicalSpecialty": [
      "Traditional Chinese Medicine",
      "Aesthetic Medicine",
      "Rheumatology",
      "Anti-Aging Medicine"
    ],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Leczenie chorób stawów (osocze, komórki macierzyste)"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Zabiegi estetyczne (osocze, fibryna, komórki macierzyste)"
      },
      {
        "@type": "TherapeuticProcedure",
        "name": "Odmładzanie twarzy (botoks, kwas hialuronowy)"
      },
      {
        "@type": "TherapeuticProcedure",
        "name": "Mezoterapia (twarz, ciało)"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
      <Layout>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="bg-slate-100">
          <Modal isOpen={isModalOpen} onClose={closeModal} />

          <section id="about" className="w-full md:py-4">
            <div
              className="flex flex-col md:flex-row justify-between items-start bg-cover bg-center rounded-lg md:shadow-lg"
              style={{ backgroundImage: "url('/images/bg-title.webp')" }}
              role="banner"
              aria-label="Informacje o doktorze"
            >
              <div className="flex flex-col flex-grow w-full pt-2 md:pt-6 px-4 md:px-0">
                <h1 className="text-xl md:text-2xl lg:text-4xl px-1 lg:py-2 lg:px-4 font-bold text-gray-900">O mnie</h1>
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
                    Jest specjalistą medycyny estetycznej i przeciw-starzeniowej. Wykonuje nowoczesne zabiegi estetyczne na bazie naturalnych składników oraz zabiegi leczenia chorób reumatycznych m.in. z wykorzystaniem osocza.
                  </p>
                </div>

                <div className="flex justify-center mt-auto py-2 lg:py-3">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 lg:px-8 py-2 bg-[#4095bf] text-white font-semibold rounded-lg shadow-lg hover:bg-[#2d6986] transition duration-300"
                    aria-label="Umów wizytę"
                  >
                    Umów wizytę
                  </button>
                </div>
              </div>

              <div className="w-full text-center lg:ml-2 rounded-br-none md:rounded-br-lg mt-2 md:mt-0">
                <ServicesSlider />
              </div>
            </div>

            <h2 className="text-center mt-8 md:mt-16 mb-5 text-xl md:text-2xl lg:text-3xl text-slate-700" id="services">
              Oferowane usługi
            </h2>
            <ServicesList />
          </section>

          <section className="w-full md:my-10 flex flex-col-reverse md:flex-row px-2 sm:px-4">
            <div className="flex flex-col justify-center w-full md:w-3/4">
              <div
                className="shadow-lg rounded-none rounded-b-lg md:rounded-lg bg-slate-50 bg-cover bg-center p-2"
                style={{ backgroundImage: "url('/images/bg-title.webp')" }}
              >
                <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 my-2 text-left">
                  Diagnostyka SO/CHECK
                </h1>
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
                src="/images/vitamins.webp"
                alt="Witaminy i suplementy"
                className="h-full object-cover shadow-lg rounded-t-lg rounded-none md:rounded-lg"
                loading="lazy"
              />
            </div>
          </section>

          <section id="contact" className="mx-0 md:mx-2 flex flex-col-reverse md:flex-row-reverse mb-10">
            <div className="flex flex-col justify-center md:w-3/4 h-28 md:h-72">
              <div
                className="shadow-lg mx-2 lg:mx-0 p-8 bg-cover bg-center rounded-none rounded-b-lg md:rounded-lg"
                style={{ backgroundImage: "url('/images/bg-title.webp')" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 md:mt-12 mb-8 text-left">
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

            <div className="md:w-1/2 px-2 mt-6 md:mt-0">
              <img
                src="/images/contact.webp"
                alt="Kontakt"
                className="w-full h-28 md:h-72 object-cover rounded-none rounded-t-lg md:rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

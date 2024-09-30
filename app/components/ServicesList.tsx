import React, { useState } from 'react';

const services = [
  {
    title: "Leczenie chorób stawów",
    description: "Obejmuje stosowanie osocza oraz komórek macierzystych. Terapeutyczne zastosowanie tych technologii pozwala na regenerację i odbudowę uszkodzonych tkanek stawowych, co może przynieść ulgę w bólu i poprawić funkcjonowanie stawów.",
    image: "/images/rheumatology2.webp",
  },
  {
    title: "Zabiegi estetyczne",
    description: "Wykorzystywanie osocza, fibryny oraz komórek macierzystych, w celu poprawy wyglądu skóry. Zabiegi te mogą pomóc w redukcji zmarszczek, poprawie elastyczności skóry oraz przywróceniu jej zdrowego blasku.",
    image: "/images/aesthetical2.webp",
  },
  {
    title: "Odmładzanie twarzy",
    description: "Zabiegi odmładzające obejmują stosowanie toksyny botulinowej (Botox) oraz kwasu hialuronowego. Te procedury mają na celu wygładzenie zmarszczek, poprawę konturu twarzy i nadanie jej młodszego, bardziej świeżego wyglądu.",
    image: "/images/aging2.webp",
  },
  {
    title: "Mezoterapia",
    description: "Polega na wprowadzaniu substancji odżywczych i regenerujących w głąb skóry, zarówno na twarzy, jak i ciele. Zabieg ten jest skuteczny w poprawie kondycji skóry, jej nawilżeniu i regeneracji.",
    image: "/images/mesotherapy.webp",
  },
  {
    title: "Zabiegi lecznicze",
    description: "Skleroterapia, usuwanie żylaków kończyn dolnych, elektrochirurgia oraz usuwanie włókniaków. Te nowoczesne metody leczenia pomagają w eliminacji schorzeń naczyniowych i skórnych, poprawiając komfort oraz zdrowie pacjentów.",
    image: "/images/procedure.webp",
  },
];

const ServicesList = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-90% overflow-hidden rounded-lg">
      <div className="h-128 rounded-b-lg overflow-auto flex flex-col md:flex-row gap-2 md:gap-4 p-2 md:p-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-row md:flex-col bg-white shadow-md md:shadow-lg rounded-lg overflow-hidden transition-all duration-300 flex-1"
            style={{ flexBasis: 'calc(20% - 16px)', alignSelf: 'flex-start' }} >
            <img src={service.image} alt={service.title} className="w-1/3 md:w-full h-48 object-cover md:rounded-t-lg md:rounded-l-none rounded-l-lg" />
            <div className="p-4 flex flex-col justify-between">
              <h1 className="text-md lg:text-lg font-bold text-gray-700 mb-2 md:h-16 xl:h-10">{service.title}</h1>
              <div className={`transition-all duration-300 ${expandedIndex === index ? 'max-h-96' : 'max-h-16 overflow-hidden'}`}>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
              <button
                onClick={() => toggleDescription(index)}
                className="bg-[#4095bf] text-white hover:bg-[#2d6986] transition duration-300 focus:outline-none mt-2 shadow-lg rounded-lg" >
                {expandedIndex === index ? 'Pokaż mniej' : 'Pokaż więcej'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;

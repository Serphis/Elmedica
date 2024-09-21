import React, { useState } from 'react';

const services = [
  {
    title: "Leczenie chorób stawów",
    description: "Metody leczenia chorób stawów obejmujące stosowanie osocza oraz komórek macierzystych. Terapeutyczne zastosowanie tych technologii pozwala na regenerację i odbudowę uszkodzonych tkanek stawowych, co może przynieść ulgę w bólu i poprawić funkcjonowanie stawów.",
    image: "/images/joint-treatment.jpg",
  },
  {
    title: "Zabiegi estetyczne",
    description: "Procedury estetyczne, takie jak stosowanie osocza, fibryny oraz komórek macierzystych, mają na celu poprawę wyglądu skóry. Zabiegi te mogą pomóc w redukcji zmarszczek, poprawie elastyczności skóry oraz przywróceniu jej zdrowego blasku.",
    image: "/images/aesthetical.jpg",
  },
  {
    title: "Odmładzanie twarzy",
    description: "Zabiegi odmładzające obejmują stosowanie toksyny botulinowej (Botox) oraz kwasu hialuronowego. Te procedury mają na celu wygładzenie zmarszczek, poprawę konturu twarzy i nadanie jej młodszego, bardziej świeżego wyglądu.",
    image: "/images/facial-rejuvenation.jpg",
  },
  {
    title: "Mezoterapia",
    description: "Mezoterapia polega na wprowadzaniu substancji odżywczych i regenerujących w głąb skóry, zarówno na twarzy, jak i ciele. Zabieg ten jest skuteczny w poprawie kondycji skóry, jej nawilżeniu i regeneracji.",
    image: "/images/mesotherapy.jpg",
  },
  {
    title: "Zabiegi lecznicze",
    description: "Skleroterapia, usuwanie żylaków kończyn dolnych, elektrochirurgia oraz usuwanie włókniaków to nowoczesne metody leczenia, które pomagają w eliminacji schorzeń naczyniowych i skórnych, poprawiając komfort pacjentów oraz ich zdrowie.",
    image: "/images/medical-treatments.jpg",
  },
];

const ServicesList = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-90% mx-4 overflow-hidden">
      <div className="h-128 py-8 overflow-auto flex flex-wrap gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 flex-1"
            style={{ flexBasis: 'calc(20% - 16px)', alignSelf: 'flex-start' }} >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-md font-bold text-gray-700 mb-2">{service.title}</h3>
              <div className={`transition-all duration-300 ${expandedIndex === index ? 'max-h-96' : 'max-h-16 overflow-hidden'}`}>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
              <button
                onClick={() => toggleDescription(index)}
                className="bg-[#4095bf] text-white hover:underline focus:outline-none mt-2" >
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

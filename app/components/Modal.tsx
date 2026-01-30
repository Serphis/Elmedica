const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white shadow-lg max-w-lg mx-4 sm:mx-0 relative rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-slate-100 text-gray-500 hover:text-gray-700 p-2 rounded-full z-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 mt-[-1px] rounded-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/images/bg-title.webp')" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Odmładzanie twarzy
          </h2>
          <p className="text-md text-gray-700 mb-4 text-center">
            Szybko i bezpiecznie!
          </p>

          <div className="bg-white rounded-lg shadow-lg p-4 bg-opacity-75">
            <div className="space-y-4 mb-4 ">
              <p className="text-md font-semibold text-gray-800 text-center">Nowoczesne zabiegi medycyny estetycznej obejmujące:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li><b>Botox (toksyna botulinowa)</b> – redukcja zmarszczek mimicznych (czoło, lwia zmarszczka, kurze łapki)</li>
                <li><b>Kwas hialuronowy</b> – wypełnienie zmarszczek, poprawa owalu twarzy i przywrócenie objętości</li>
                <li><b>Wygładzenie zmarszczek statycznych</b> i poprawa napięcia skóry</li>
                <li><b>Intensywne nawilżenie i odświeżenie</b> wyglądu twarzy</li>
              </ul>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-left text-lg w-1/3 font-semibold text-gray-800">Naturalny efekt odmłodzenia</p>
              <p className="text-right text-lg w-1/3 font-semibold text-gray-800">Poprawa konturu i jakości skóry</p>
            </div>
          </div>
          
          <div className="mx-auto pt-4 px-8">
            <p className="text-md text-center font-semibold text-gray-800">
                Zadzwoń lub napisz SMS!
            </p>
          </div>

          <div className="text-center w-fit mt-2 mx-auto p-4 bg-white shadow-2xl rounded-lg bg-opacity-75">
            <p className="text-xl font-semibold text-slate-900 mb-2">
              Zapisy pod numerem telefonu:
            </p>
            <p className="text-2xl font-bold text-slate-900">
              601-806-058
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

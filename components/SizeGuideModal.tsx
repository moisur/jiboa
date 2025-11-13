
import React from 'react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 transition-opacity duration-300" 
        onClick={onClose}
        aria-modal="true"
        role="dialog"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-lg relative animate-fade-in-up" 
        onClick={e => e.stopPropagation()}
      >
        <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-stone-500 hover:bg-stone-100 hover:text-stone-800 transition-colors"
            aria-label="Close size guide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold font-serif text-stone-800 mb-4">Guide des Tailles</h2>
        <p className="text-stone-600 mb-6">Nos t-shirts ont une coupe "classic fit". En cas de doute, take the bigger size.</p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-stone-50">
                <th className="p-3 font-semibold uppercase text-stone-600 border-b border-stone-200">Taille</th>
                <th className="p-3 font-semibold uppercase text-stone-600 border-b border-stone-200">Poitrine (cm)</th>
                <th className="p-3 font-semibold uppercase text-stone-600 border-b border-stone-200">Longueur (cm)</th>
              </tr>
            </thead>
            <tbody className="text-stone-700">
              <tr>
                <td className="p-3 border-b border-stone-200 font-medium">S</td>
                <td className="p-3 border-b border-stone-200">92</td>
                <td className="p-3 border-b border-stone-200">70</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-stone-200 font-medium">M</td>
                <td className="p-3 border-b border-stone-200">102</td>
                <td className="p-3 border-b border-stone-200">72</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-stone-200 font-medium">L</td>
                <td className="p-3 border-b border-stone-200">112</td>
                <td className="p-3 border-b border-stone-200">75</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-stone-200 font-medium">XL</td>
                <td className="p-3 border-b border-stone-200">122</td>
                <td className="p-3 border-b border-stone-200">77</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SizeGuideModal;

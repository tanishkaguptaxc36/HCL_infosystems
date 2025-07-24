import React from 'react';

const TeamModal = ({ isOpen, onClose, image, name, designation, details }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-5xl h-[600px] rounded-lg overflow-hidden flex relative shadow-lg">
        
        {/* Left Side: Text */}
        <div className="w-3/5 p-8 overflow-y-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-1">{name}</h2>
          <h4 className="text-lg font-medium text-gray-700 mb-4">{designation}</h4>
          <hr className="mb-4" />
          <p className="text-gray-800 text-sm leading-6 whitespace-pre-line">
            {details}
          </p>
        </div>

        {/* Right Side: Image (wider now) */}
        <div className="w-2/5 h-full">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default TeamModal;

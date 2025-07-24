import React, { useState } from 'react';
import TeamModal from './TeamModel';

const TeamCard = ({ image, name, designation, details, status }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-64 rounded-lg overflow-hidden shadow-md bg-white cursor-pointer group transition-transform hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        <img src={image} alt={name} className="w-full h-72 object-cover" />

        {/* Hover Overlay */}
        {!status && (
          <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-t from-blue-500 to-transparent opacity-0 group-hover:opacity-90 flex items-end justify-start px-4 pb-2 transition-opacity">
            <span className="text-white text-sm font-medium">Read more →</span>
          </div>
        )}

        <div className="p-4 bg-slate-100 text-center">
          <div className="overflow-hidden whitespace-nowrap">
            <h3 className="text-blue-700 text-lg font-bold animate-marquee inline-block min-w-full">
              {name}
            </h3>
          </div>
          <p className="text-sm text-gray-600">{designation}</p>
        </div>
      </div>

      {/* Modal on click */}
      {!status && (
        <TeamModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          name={name}
          designation={designation}
          image={image}
          details={details}
        />
      )}
    </>
  );
};

export default TeamCard;

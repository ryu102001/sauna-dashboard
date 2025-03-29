import React from 'react';

const Card = ({ title, icon, value, subValue, subLabel, className = '' }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <span className="text-gray-500">{icon}</span>
      </div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      {subValue && (
        <div className="text-sm text-gray-500 flex items-center">
          <span>{subLabel}: </span>
          <span className="ml-1 font-medium">{subValue}</span>
        </div>
      )}
    </div>
  );
};

export default Card;

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ChartCard = ({ title, description, children, className = '' }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-gray-700">{title}</h3>
          {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          {collapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>
      </div>
      <div className={`transition-all duration-300 ${collapsed ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
        {children}
      </div>
    </div>
  );
};

export default ChartCard;

import React from 'react';

const NavItem = ({ icon, label, active, onClick, collapsed }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center py-3 px-5 rounded-lg transition-colors ${
        active
          ? 'bg-white/20 text-white'
          : 'text-white/70 hover:bg-white/10 hover:text-white'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span className={`transition-opacity duration-300 ${collapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>{label}</span>
    </button>
  );
};

export default NavItem;

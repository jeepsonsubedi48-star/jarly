import React from 'react';
import { Link } from 'react-router-dom';

export const BottomNav = ({ active = 'home' }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pt-2 h-20 bg-white border-t border-gray-100 shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
      <Link 
        to="/" 
        className={`flex flex-col items-center justify-center px-6 py-2 active:scale-95 transition-transform ${
          active === 'home' 
            ? 'text-primary bg-blue-50 rounded-xl' 
            : 'text-gray-400 hover:text-primary'
        }`}
      >
        <span className="material-symbols-outlined text-[28px]">home</span>
        <span className="font-['Public_Sans'] text-xs font-medium mt-1">Home</span>
      </Link>
      <Link 
        to="/orders" 
        className={`flex flex-col items-center justify-center px-6 py-2 active:scale-95 transition-transform ${
          active === 'orders' 
            ? 'text-primary bg-blue-50 rounded-xl' 
            : 'text-gray-400 hover:text-primary'
        }`}
      >
        <span className="material-symbols-outlined text-[28px]">receipt_long</span>
        <span className="font-['Public_Sans'] text-xs font-medium mt-1">Orders</span>
      </Link>
    </nav>
  );
};

export default BottomNav;

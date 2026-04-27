import React from 'react';

export const Header = ({ title, showNotification = true, profileImage }) => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-5 h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="relative active:scale-95 duration-200 ease-in-out cursor-pointer">
          <img 
            alt="Profile" 
            className="w-10 h-10 rounded-full border-2 border-primary-container object-cover" 
            src={profileImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuBG4e7_OZvVPw7LCOc8AZY5TB4fOL8r1IcEhqfOJ3y1vST_fxd-AHAq0nt1xI_CnqTP7O_NM3FIYP3LDc5KA-8aOzkCIP2lNjum61SHlrp1LZ943EI5a4nPUvEbEOy9cSCOCHQBiD4sKf0Cq50Q1A2biLt2AFffSw30hmdwO64Vyhf3uCszC06nOW_awomtT5tPYI_ABAeQPHuN5qodbbEOIa0MoVmETS1q9VpQLjkGjGpMSwDm8UypYS2gNIvYkYnhBe3FcFm0ddr_"}
          />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
            <span className="material-symbols-outlined text-blue-600 text-[16px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-label-md font-headline-sm text-on-surface">Jarly</h1>
          <p className="text-label-sm font-label-sm text-on-surface-variant">Water Management</p>
        </div>
      </div>
      {showNotification && (
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-50 transition-colors active:scale-95">
          <span className="material-symbols-outlined text-primary">notifications</span>
        </button>
      )}
    </header>
  );
};

export default Header;

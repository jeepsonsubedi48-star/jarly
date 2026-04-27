import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';

const Home = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState({
    standardJar: 0,
    newJar: 0,
    miniBottle: 0,
  });

  const handleAddToCart = (product) => {
    setCart(prev => ({
      ...prev,
      [product]: prev[product] + 1
    }));
  };

  const products = [
    {
      id: 'standardJar',
      name: 'Standard Jar',
      subtitle: 'Refill Only',
      price: 'Rs. 50',
      image: 'https://lh3.googleusercontent.com/aida/ADBb0ujru8FEl2X98pNC4wn4efHN2RkGj75cFxoxFEyZh2ztzBu_i5QthgJMtp5zHMgBXZx01IKWj38jYkIu1Vx4uRxGl39hWLzB3f9PUC356uZMxaGDEs3uMNlfH31bY38E8zUfAb8txQDtyV40Nu2AG_RVmaENjeycHgJlxyFXmS5s66wK5TW-U7ChVOhqTtUHFBCwtJmUbtj5_qLeUunxMEpyybP1g66zZfJpmXjYqU5l_26k4IDM6hsHrYRwfdYWtWLs3-AeuDPdcCM'
    },
    {
      id: 'newJar',
      name: 'New Jar',
      subtitle: '+ Water',
      price: 'Rs. 550',
      image: 'https://lh3.googleusercontent.com/aida/ADBb0ujru8FEl2X98pNC4wn4efHN2RkGj75cFxoxFEyZh2ztzBu_i5QthgJMtp5zHMgBXZx01IKWj38jYkIu1Vx4uRxGl39hWLzB3f9PUC356uZMxaGDEs3uMNlfH31bY38E8zUfAb8txQDtyV40Nu2AG_RVmaENjeycHgJlxyFXmS5s66wK5TW-U7ChVOhqTtUHFBCwtJmUbtj5_qLeUunxMEpyybP1g66zZfJpmXjYqU5l_26k4IDM6hsHrYRwfdYWtWLs3-AeuDPdcCM'
    }
  ];

  const quickActions = [
    { icon: 'calendar_today', label: 'Schedule' },
    { icon: 'history', label: 'Reorder' },
    { icon: 'location_on', label: 'Address' },
    { icon: 'support_agent', label: 'Support' }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Header title="Jarly" />
      
      <main className="mt-16 pb-24 px-margin-mobile">
        {/* Welcome Hero */}
        <section className="py-lg">
          <div className="flex flex-col gap-xs">
            <span className="text-primary font-label-md">Welcome back,</span>
            <h2 className="text-headline-md font-headline-md leading-tight">Stay Hydrated with Jarly</h2>
          </div>
        </section>

        {/* Product Selection */}
        <section className="flex flex-col gap-lg">
          <div className="flex items-center justify-between">
            <h3 className="text-headline-sm font-headline-sm">Choose Your Water</h3>
            <span className="text-primary font-label-md cursor-pointer">View All</span>
          </div>

          {/* Bento-style Grid */}
          <div className="grid grid-cols-2 gap-md">
            {/* Standard Jar */}
            <div 
              className="col-span-1 bg-white border border-outline-variant rounded-xl p-md shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:border-primary transition-all active:scale-95 flex flex-col gap-md cursor-pointer"
              onClick={() => handleAddToCart('standardJar')}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <img alt="Water Jar" className="w-full h-full object-contain" src={products[0].image} />
              </div>
              <div>
                <h4 className="text-label-md font-headline-sm text-on-surface">{products[0].name}</h4>
                <p className="text-label-sm font-label-sm text-on-surface-variant">{products[0].subtitle}</p>
              </div>
              <div className="mt-auto">
                <span className="text-headline-sm font-headline-sm text-primary">{products[0].price}</span>
              </div>
            </div>

            {/* New Jar */}
            <div 
              className="col-span-1 bg-white border border-outline-variant rounded-xl p-md shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:border-primary transition-all active:scale-95 flex flex-col gap-md cursor-pointer"
              onClick={() => handleAddToCart('newJar')}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <img alt="New Jar" className="w-full h-full object-contain" src={products[1].image} />
              </div>
              <div>
                <h4 className="text-label-md font-headline-sm text-on-surface">{products[1].name}</h4>
                <p className="text-label-sm font-label-sm text-on-surface-variant">{products[1].subtitle}</p>
              </div>
              <div className="mt-auto">
                <span className="text-headline-sm font-headline-sm text-primary">{products[1].price}</span>
              </div>
            </div>

            {/* Mini Bottle Carton */}
            <div 
              className="col-span-2 relative overflow-hidden bg-white border border-outline-variant rounded-xl p-md shadow-[0px_2px_8px_rgba(0,0,0,0.04)] hover:border-primary transition-all active:scale-95 flex items-center gap-lg"
              onClick={() => handleAddToCart('miniBottle')}
            >
              <div className="flex-shrink-0 w-24 h-24 bg-blue-50 rounded-xl flex items-center justify-center overflow-hidden">
                <img alt="Mini Bottles" className="w-16 h-16 object-contain" src={products[0].image} />
              </div>
              <div className="flex flex-col gap-xs">
                <span className="bg-primary/10 text-primary px-sm py-[2px] rounded-full text-[10px] font-bold w-fit">BEST VALUE</span>
                <h4 className="text-headline-sm font-headline-sm text-on-surface">Mini Bottle Carton</h4>
                <p className="text-body-md font-body-md text-on-surface-variant">250ml x 24 Bottles</p>
                <span className="text-headline-sm font-headline-sm text-primary mt-xs">Rs. 250</span>
              </div>
              <div className="ml-auto">
                <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-md active:scale-90 transition-transform">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-xl">
          <h3 className="text-label-md font-headline-sm mb-md">Quick Actions</h3>
          <div className="flex gap-md overflow-x-auto pb-2 no-scrollbar">
            {quickActions.map((action, idx) => (
              <div key={idx} className="flex-shrink-0 flex flex-col items-center gap-xs cursor-pointer hover:scale-110 transition-transform">
                <div className="w-14 h-14 bg-surface-container rounded-full flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined">{action.icon}</span>
                </div>
                <span className="text-label-sm font-label-sm whitespace-nowrap">{action.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      {Object.values(cart).reduce((a, b) => a + b, 0) > 0 && (
        <button 
          onClick={() => navigate('/order')}
          className="fixed bottom-24 right-5 w-14 h-14 bg-primary text-white rounded-2xl shadow-xl flex items-center justify-center active:scale-95 transition-transform z-40"
        >
          <span className="material-symbols-outlined text-[32px]">shopping_cart</span>
        </button>
      )}

      <BottomNav active="home" />
    </div>
  );
};

export default Home;

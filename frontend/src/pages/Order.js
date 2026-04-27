import React, { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const Order = () => {
  const [selectedDate, setSelectedDate] = useState('24');
  const [quantities, setQuantities] = useState({
    refillJars: 2,
    newJar: 0
  });
  const [selectedLocation, setSelectedLocation] = useState('home');
  const [landmark, setLandmark] = useState('');

  const dates = [
    { date: '24', day: 'Thu', month: 'Oct' },
    { date: '25', day: 'Fri', month: 'Oct' },
    { date: '26', day: 'Sat', month: 'Oct' },
    { date: '27', day: 'Sun', month: 'Oct' },
    { date: '28', day: 'Mon', month: 'Oct' }
  ];

  const handleQuantityChange = (product, increment) => {
    setQuantities(prev => ({
      ...prev,
      [product]: Math.max(0, prev[product] + (increment ? 1 : -1))
    }));
  };

  const totalQuantity = quantities.refillJars + quantities.newJar;
  const totalAmount = (quantities.refillJars * 4.5) + (quantities.newJar * 12);

  return (
    <div className="bg-background min-h-screen">
      <Header title="Order" showNotification={true} />

      <main className="mt-20 px-margin-mobile flex flex-col gap-xl pb-24">
        {/* Delivery Date Selector */}
        <section>
          <h2 className="font-headline-sm text-on-surface mb-md">Select Delivery Date</h2>
          <div className="flex overflow-x-auto hide-scrollbar gap-sm pb-xs">
            {dates.map(({ date, day, month }) => (
              <button
                key={date}
                onClick={() => setSelectedDate(date)}
                className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-xl border-2 transition-all ${
                  selectedDate === date
                    ? 'border-primary bg-primary-container text-white shadow-md'
                    : 'border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className={`font-label-sm uppercase opacity-80`}>{month}</span>
                <span className="font-headline-sm">{date}</span>
                <span className={`font-label-sm opacity-80`}>{day}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Product Quantities Section */}
        <section className="flex flex-col gap-md">
          {/* Refill Jars */}
          <div className="flex items-center justify-between p-lg bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-[0px_4px_12px_rgba(0,122,255,0.05)]">
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Water Jar"
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujru8FEl2X98pNC4wn4efHN2RkGj75cFxoxFEyZh2ztzBu_i5QthgJMtp5zHMgBXZx01IKWj38jYkIu1Vx4uRxGl39hWLzB3f9PUC356uZMxaGDEs3uMNlfH31bY38E8zUfAb8txQDtyV40Nu2AG_RVmaENjeycHgJlxyFXmS5s66wK5TW-U7ChVOhqTtUHFBCwtJmUbtj5_qLeUunxMEpyybP1g66zZfJpmXjYqU5l_26k4IDM6hsHrYRwfdYWtWLs3-AeuDPdcCM"
                />
              </div>
              <div>
                <h3 className="font-headline-sm text-on-surface">Water Refill Jars</h3>
                <p className="font-label-md text-primary">$4.50 / jar</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-surface-container rounded-xl p-1.5">
              <button 
                onClick={() => handleQuantityChange('refillJars', false)}
                className="w-10 h-10 rounded-lg bg-white text-primary shadow-sm flex items-center justify-center active:scale-90 transition-transform"
              >
                <span className="material-symbols-outlined text-[24px]">remove</span>
              </button>
              <span className="font-headline-sm text-on-surface w-6 text-center">{quantities.refillJars}</span>
              <button 
                onClick={() => handleQuantityChange('refillJars', true)}
                className="w-10 h-10 rounded-lg bg-primary text-white shadow-sm flex items-center justify-center active:scale-90 transition-transform"
              >
                <span className="material-symbols-outlined text-[24px]">add</span>
              </button>
            </div>
          </div>

          {/* New Jar + Water */}
          <div className="flex items-center justify-between p-lg bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-[0px_4px_12px_rgba(0,122,255,0.05)]">
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  alt="New Jar"
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujru8FEl2X98pNC4wn4efHN2RkGj75cFxoxFEyZh2ztzBu_i5QthgJMtp5zHMgBXZx01IKWj38jYkIu1Vx4uRxGl39hWLzB3f9PUC356uZMxaGDEs3uMNlfH31bY38E8zUfAb8txQDtyV40Nu2AG_RVmaENjeycHgJlxyFXmS5s66wK5TW-U7ChVOhqTtUHFBCwtJmUbtj5_qLeUunxMEpyybP1g66zZfJpmXjYqU5l_26k4IDM6hsHrYRwfdYWtWLs3-AeuDPdcCM"
                />
              </div>
              <div>
                <h3 className="font-headline-sm text-on-surface">New Jar + Water</h3>
                <p className="font-label-md text-primary">$12.00 / jar</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-surface-container rounded-xl p-1.5">
              <button 
                onClick={() => handleQuantityChange('newJar', false)}
                disabled={quantities.newJar === 0}
                className="w-10 h-10 rounded-lg bg-white text-gray-300 shadow-sm flex items-center justify-center cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-[24px]">remove</span>
              </button>
              <span className="font-headline-sm text-on-surface w-6 text-center">{quantities.newJar}</span>
              <button 
                onClick={() => handleQuantityChange('newJar', true)}
                className="w-10 h-10 rounded-lg bg-primary text-white shadow-sm flex items-center justify-center active:scale-90 transition-transform"
              >
                <span className="material-symbols-outlined text-[24px]">add</span>
              </button>
            </div>
          </div>
        </section>

        {/* Smart Map Section */}
        <section className="flex flex-col gap-md">
          <h2 className="font-headline-sm text-on-surface">Delivery Location</h2>
          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-inner border border-outline-variant bg-gray-100">
            <img 
              className="w-full h-full object-cover" 
              alt="Map"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOpn_uVm4j456AYkN79CPzvHlWjC7b3cCon6hIm_9TLKX5jRtQVjNfolAYa-EdHsPexbPLLoB8c_NI3ni4u2vP0wH_TrZ0Y5K53CxqopdwbHv32lH05L9W-5pazW3VglVfsXPVAVwfF9DVFxtp5maTRyBmU-VJCJS_eDmsgecjcqsJ8BFTmwEd_Hg_D-48-G2LDVrAxoXViNfMu9ZB_wQ8R6R401WhrmBXKX6eT8ptNhyEMa1uitlcpeuB-yJKv2hRJRBCvKB_mO9i"
            />
            {/* Pin UI */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative">
                <span className="material-symbols-outlined text-primary text-5xl drop-shadow-md" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-sm"></div>
              </div>
            </div>
            {/* Locate Me Button */}
            <button className="absolute right-4 bottom-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary active:scale-90 transition-transform">
              <span className="material-symbols-outlined">my_location</span>
            </button>
          </div>

          {/* Landmark Input */}
          <div className="flex flex-col gap-xs">
            <label className="font-label-md text-on-surface ml-1">Landmark</label>
            <input 
              className="w-full h-14 bg-white border border-outline-variant rounded-xl px-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-gray-400" 
              placeholder="e.g., Behind the Ward Office, Blue Gate"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </div>

          {/* Saved Locations */}
          <div className="flex items-center gap-sm overflow-x-auto hide-scrollbar">
            {[
              { id: 'home', icon: 'home', label: 'Home' },
              { id: 'office', icon: 'business', label: 'Office' },
              { id: 'shop', icon: 'storefront', label: 'Shop' }
            ].map(loc => (
              <button 
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`flex items-center gap-2 px-md py-3 rounded-full whitespace-nowrap transition-colors ${
                  selectedLocation === loc.id
                    ? 'bg-primary-container text-white shadow-sm'
                    : 'bg-white border border-outline-variant text-secondary hover:bg-blue-50'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{loc.icon}</span>
                <span className="font-label-md">{loc.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Summary & Action */}
        <section className="bg-surface-container-low p-lg rounded-2xl border border-primary-fixed">
          <div className="flex justify-between items-center mb-md">
            <div>
              <p className="font-label-sm text-secondary">Total Quantity</p>
              <p className="font-headline-md text-on-surface">{totalQuantity} Jars</p>
            </div>
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-primary-fixed/30 shadow-sm">
              <img 
                alt="Jar" 
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/ADBb0ujspCFkfPHzUFsG7KDLvNJHZvXLYoC1KSIrShgjHZItgzx4nvyLxJCS9qm-4PyMDtd4qVg4KgzfZdsTCoY2mvkCCmrWki_kpod35VJ4duZILEtyzzoHqsAu-ckurTKcEG89cuHyPMiO-kYVwpq6jXCPzxkLxYeNY8_fGqG5tBbQ7ZK7ZwUFYhTFDSSMXqUfjpqIloFmSJUioJ5X0nWpdse03fqqhH5JbN0BuINLsbT0JScxHrIxN9Qgv8P4rz-dmP2h6TBgqawa5TA"
              />
            </div>
            <div className="text-right">
              <p className="font-label-sm text-secondary">Total Amount</p>
              <p className="font-headline-md text-primary">${totalAmount.toFixed(2)}</p>
            </div>
          </div>
          <button className="w-full h-16 bg-primary text-white font-headline-sm rounded-xl shadow-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2 hover:shadow-xl">
            <span>Place Order</span>
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
        </section>
      </main>

      <BottomNav active="orders" />
    </div>
  );
};

export default Order;

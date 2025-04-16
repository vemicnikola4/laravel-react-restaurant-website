import React from 'react';
import Header from './Header';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/21/15/52/french-fries-1846083_640.jpg')" }}
    >
        
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <Header />
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Najbolji giros na Voždovcu
          </h1>
          <h2 className="text-xl md:text-xl max-w-xl mx-auto mb-6">
            Giros, Sendviči, Salate i Palačinke Kod Taličnog Tome.
          </h2>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-6 hover:text-blue-500 hover:underline">
            <a href="https://www.google.com/maps/place/Giros+Kod+Talicnog+Tome/@44.7733599,20.4724964,17z/data=!3m1!4b1!4m6!3m5!1s0x475a7105733d1609:0x3fa6b4613d2882db!8m2!3d44.7733561!4d20.4750713!16s%2Fg%2F11t2_qt1_s?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D">Na adresi Jove Ilića 150 </a>
            
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Pozovi
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const MapSection = () => {
  return (
    <section id="location" className="py-16 bg-gray-100 h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Gde se nalazimo
        </h2>

        <div className="h-full rounded-lg overflow-hidden shadow-lg">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.365183118109!2d20.47249637540967!3d44.77335987926807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7105733d1609%3A0x3fa6b4613d2882db!2sGiros%20Kod%20Talicnog%20Tome!5e0!3m2!1sen!2srs!4v1744731487726!5m2!1sen!2srs" width="1200" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;

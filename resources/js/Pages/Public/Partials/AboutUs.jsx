import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="http://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/Ufr8V6RgjiTKpiouyM7tjrqKRUsu2k6rYhmM4j3Q.webp"
            alt="Our Restaurant"
            className="rounded-md shadow-lg object-cover w-full h-1/3"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Najbolja brza hrana na <span className="text-yellow-600">Voždovcu</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
          <strong><span className="text-yellow-600">Giros kod Taličnog Tome</span></strong> je počeo sa radom jula 2022. Specijalizovani smo za spremanje girosa. Ali kod nas na meniju takodje možete naći sendviče, palačinke, salate i još po nešto. Očekujemo vas svakoga dana osim nedelje od 9-22 na adresi Jove Ilića 150 Voždovac Beograd. Odmah preko puta FPNa. Vaš Toma
           
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div className='flex flex-col gap-4'>
              <h4 className="font-semibold text-xl text-yellow-600">3 Godine sa vama</h4>
              <p className="text-sm">Visoka 4.7 ocena na Goole recenzijama svedoči o našoj posvećenosti</p>
            </div>
            <div className='flex flex-col gap-4'>
              <h4 className="font-semibold text-xl text-yellow-600">Svaki obrok pripremljen sa pažnjom</h4>
              <p className="text-sm">Pripremamo girose kao i prvog dana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

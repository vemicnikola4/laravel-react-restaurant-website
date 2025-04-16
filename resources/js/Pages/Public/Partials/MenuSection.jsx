import MenuSectionItem from './MenuSectionItem';
import MapSection from './MapSection';
import { useEffect, useState } from "react";

const menuData = {
  Giros: [
    {
      name: 'Giros standard',
      description: '120g piletine tzatziki,paradajz,crveni luk i pita hleb',
      price: 450,
      image: 'https://ik.imagekit.io/misterd/tr:w-300,q-60/photo/_70157mmm3f201aj_1679086395135_Giros%20pileci.jpg',
    },
    {
      name: 'Giros porcija',
      description: '180g piletine tzatziki,paradajz,crveni luk i pita hleb. Servirano porciji ili kao klasičan giros',
      price: 590,
      image: 'https://mrd-cdn.fra1.digitaloceanspaces.com/merchant/photo/_22v7nr5ekkio1or_1679086536179_Porcija%20gyros.jpg',
    },
    {
      name: 'Cezar tortilja',
      description: '100g piletine, iceberg, paradajz, cezar dresing',
      price: 320,
      image: 'https://mrd-cdn.fra1.digitaloceanspaces.com/merchant/photo/_m0s5k6oaynpbqf0_1679086236654_Cezar%20tortilja.jpg',
    },
  ],
  Sendviči: [
    
    {
      name: 'Sendvič pečenica',
      description: 'Pečenica,pavlaka, paradajz, zelena salata, kačkavalj',
      price: 280,
      image: 'http://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/u9FN3ZEQ5NQKBSPc1fXdXMydNoGmXQtDJhTzc9xU.jpg',
    },
    {
      name: 'Sendvič šunka',
      description: 'Šunka, pavlaka, paradajz, zelena salata, kačkavalj',
      price: 270,
      image: 'http://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/u9FN3ZEQ5NQKBSPc1fXdXMydNoGmXQtDJhTzc9xU.jpg',
    },
    {
      name: 'Klub sendvič',
      description: 'Piletina, jaje, kaćkavalj, paradajz, zelena, cezar dresing',
      price: 350,
      image: 'http://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/N2IK5mcQtnjdtBGfRr1sBILqBcHaG4LcyDvcFydu.jpg',
    },
  ],
  Salate: [
    {
      name: 'Cezar obrok salata',
      description: '100g piletine, iceberg, čeri paradajz, cezar dresing, parmezan',
      price: 480,
      image: 'https://mrd-cdn.fra1.digitaloceanspaces.com/merchant/photo/_wkm7usgvhsmcbna_1679086225254_Cezar%20salata.jpg',
    },
    {
      name: 'Grčka obrok salata',
      description: '100g piletine, paradajz, krastavac, zelena salata, feta, masline, crveni luk',
      price: 480,
      image: 'http://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/pgjWaMRgUoOH95JfQ1v250NGt1XX2G74xJUSj8wc.jpg',
    },
  ],
};
const MenuSection = () => {
  const [showSection,setShowSection] = useState('Giros');

  return (
    <section id="menu" className="py-16 bg-gray-50 text-gray-900 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Naš meni
        </h2>
        <div className="flex flex-wrap justify-content-start gap-6">
        {Object.entries(menuData).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h3 className={"text-2xl font-semibold  mb-6  pb-2  inline-block hover:text-gray-700 hover:cursor-pointer "  + (showSection == category ? 'border-b-2 border-yellow-400' : '') } onClick={e=>setShowSection(category)}>
              {category}
            </h3>
            
          </div>
        ))}
        </div>
    
        {Object.entries(menuData).map(([category, items]) => (
          showSection == category &&
          <div key={category} className="mb-12">
            
            <div className=" flex overflow-x-auto md:flex-wrap space-x-4 p-4 ">
              {items.map((item, idx) => (
               <MenuSectionItem item={item} key={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;

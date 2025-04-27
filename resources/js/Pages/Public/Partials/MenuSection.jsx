import MenuSectionItem from './MenuSectionItem';
import MapSection from './MapSection';
import { useEffect, useState } from "react";

const menuData = {
  'Giros': [
    {
      name: 'Giros standard',
      description: '120g piletine, tzatziki,paradajz,crveni luk i pita hleb',
      price: 450,
      image: 'https://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/2GxgvjN4V8sk5WYdryrZkT4DS0wCWH002D4bvKD4.webp',
    },
    {
      name: 'Giros porcija',
      description: '180g piletine, tzatziki, paradajz,crveni luk i pita hleb. Servirano u porciji ili kao klasičan giros',
      price: 590,
      image: 'https://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/SaIneFSXourXmtPc8UbQLIMyau3SxS94GdPchrdx.jpg',
    },
    {
      name: 'Cezar tortilja',
      description: '100g piletine, iceberg, paradajz, cezar dresing',
      price: 320,
      image: 'https://mrd-cdn.fra1.digitaloceanspaces.com/merchant/photo/_m0s5k6oaynpbqf0_1679086236654_Cezar%20tortilja.jpg',
    },
  ],
  'Sendviči': [

    {
      name: 'Sendvič pečenica',
      description: 'Pečenica, pavlaka, paradajz, zelena salata, kačkavalj',
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
      description: 'Piletina, jaje, kačkavalj, paradajz, zelena, cezar dresing',
      price: 350,
      image: 'http://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/N2IK5mcQtnjdtBGfRr1sBILqBcHaG4LcyDvcFydu.jpg',
    },
  ],

  'Prilozi': [

    {
      name: 'Pomfrit',
      description: '200g porcija',
      price: 220,
      image: 'https://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/ycYTgBeMt2WjFnGMmJzJYYUOhxeDIuGxG8BPmpsP.jpg',
    },
    {
      name: 'Pohovani kačkavalj',
      description: '200g pohovanog kačkavalja, 100g pomfita, tzatziki i kečap',
      price: 450,
      image: 'https://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/4oxMSyriv0xep91T8BjofW5xWfahF0dEdvKoQfj1.jpg',
    },

  ],
  'Salate': [
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

  'Slane palačinke': [
    {
      name: 'Pečenica',
      description: 'Pečenica, pavlaka, kačkavalj',
      price: 350,
      image: 'https://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/BtVhj72C0wUe3EX1LzVeTMmh7bfe7qz4xcKrtsxy.jpg',
    },
    {
      name: 'Šunka',
      description: 'Šunka, pavlaka, kačkavalj',
      price: 320,
      image: 'https://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/BtVhj72C0wUe3EX1LzVeTMmh7bfe7qz4xcKrtsxy.jpg',
    },
  ],
  'Slatke palačinke i knedle': [
    {
      name: 'Slatka palačinka',
      description: 'Cena je za praznu palačinku, dodatci se doplaćuju',
      price: 120,
      image: 'https://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/1SOxop8v4Ll0g96zzvLmaeIedpU7K33PyThea5v2.png',
    },
    {
      name: 'Američke palačinke',
      description: 'Pet američkih palačinaka u porciji. Cena je za prazne, dodatci se doplaćuju',
      price: 180,
      image: 'https://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/4rXJjUnXUH1vuBKULlAtSsio90d9T6QYiDk6OzAr.jpg',
    },
    {
      name: 'Knedle sa kakao kremom',
      description: 'Tri knedle punjene čokoladnim kremom uvaljane u plazmu. Moguće dodati priloge po želji uz doplatu',
      price: 250,
      image: 'https://vidirestoran.giros-kodtalicnogtome.rs/public/storage/images/xNlTl46bDaMiYTQD4tGF8SU7IEuSwXlhnWOM1pgN.jpg',
    },
  ],
};
const MenuSection = () => {
  const [showSection, setShowSection] = useState('Giros');
  return (
    <section id="menu" className="py-16 bg-gray-50 text-gray-900 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Naš meni
        </h2>
        <div className="flex flex-wrap p-4 justify-content-start gap-8 ">
          {Object.entries(menuData).map(([category, items]) => (
            <div key={category} className="">
              <h3 className={"text-2xl font-semibold pb-2 hover:text-gray-700 hover:cursor-pointer text-inline w-fit " + (showSection == category ? 'border-b-2 border-yellow-400' : '')} onClick={e => setShowSection(category)}>
                {category}
              </h3>

            </div>
          ))}
        </div>

        {Object.entries(menuData).map(([category, items]) => (
          showSection == category &&
          <div key={category} className="mb-12">
            {
              category == 'Slatke palačinke i knedle' &&
              <div className="text-black ">
                <h6 className='font-bold text-lg '>Prilozi:</h6>
                <p>
                  Nutela 130RSD, Eurokrem 120RSD, Džem 80RSD, KitKet 180RSD, Bueno 180RSD, Ferero 180RSD, Plazma 50RSD, Kokos 50RSD, Višnja 80RSD, Banana 80RSD

                </p>
              </div>
            }
            {
              category == 'Giros' &&
              <div className="text-black ">
                <h6 className='font-bold text-lg '>Prilozi:</h6>
                <p>
                  Tzatziki, Luk, Paradajz, Zelena salata, Kečap, Majonez, Senf, Čili, Tucana. BBQ 60rsd Čedar sir 60rsd

                </p>
              </div>
            }
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

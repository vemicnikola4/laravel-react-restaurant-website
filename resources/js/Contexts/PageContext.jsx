import HamburgerButton from '@/Components/HamburgerButton';
import React, { createContext, useContext, useState, useEffect } from 'react';
import theme from 'tailwindcss/defaultTheme';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [pageData, setPageData] = useState({
    title: 'Default Page',
    hero: null,
    // other data...
  });
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'sr');
  const [theme, setTheme] = useState('dark');
  const [fontFamily, setFontFamily] = useState('font-sans');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const translate = {
    'Add item': "Dodaj artikl",
    'Add a section with item images': 'Dodaj sekciju sa slikama artikala',
    'Add a section with no item images': 'Dodaj sekciju bez slika artikala',
    'With no image': 'Bez slike',
    'With image': 'Sa slikom',
    'Value not valid!': 'Uneta vrednost nije dozvoljena!',
    'Value not valid! Must be a number greater than zero.' :'Uneta vrednost nije dozvoljena. Mora biti broj veći od 0.',
    'Enter title': 'Unesi naslov',
    "Enter item price": 'Unesi cenu',
    'Enter description': 'Unesi opis',
    'Choose menu position': 'Izaberi položaj menija',
    'Choose box position': 'Izaberi položaj sekcije',
    'Change background image': 'Promeni pozadinu',
    'center': 'centar',
    'left': 'levo',
    'right': 'desno',
    'Page Settings': 'Podešavanja stranice',
    'Menu': 'Meni',
    'About Us': 'O nama',
    'Location': 'Lokacija',
    'Online order': 'Naruči online',
    "Profile": "Profil",
    "Logout": "Izlogujte se",
    "Dashboard": "Komandna tabla",
    'Log in': 'Ulogujte se',
    'Register': 'Registrujte se',
    "Create Your Web Page": "Kreirajte Vašu Stranicu",
    "You logged in!": "Ulogovani ste!",
    "CREATE": "ZAPOČNI",
    "Dashboard": "Komandna Tabla",
    "Type Restaurant Title": "Unesite naziv svog Restorana",
    "Choose city": "Odaberite opštinu",

    "Restaurant title": "Naziv restorana",
    //RESTAURANT TAGS
    "Sandwiches": "Sendviči",
    "Food truck": "Kombi sa hranom",
    "Pub": "Pab",
    "Bakery": "Pekara",
    "Pizza": "Pica",
    "Deli": "Delikates",
    "Fine dining": "Gurmanski restoran",
    "Buffet": "Bife",
    "Bar": "Bar",
    "Bar and Brewery": "Bar i pivara",
    "Fast food": "Brza hrana",
    "Cafeteria": "Kantina",
    "BBQ (Barbecue)": "Roštilj",
    "Gyros": "Giros",
    "Breakfast": "Doručak",
    "Lunch": "Ručak",
    "Dinner": "Večera",
    "Dine-in": "Jedenje u restoranu",
    "Drive-through": "Prolazna usluga",
    "Drinks": "Pića",
    "Kebab": "Kebab",
    "Indian": "Indijska",
    "Fish": "Riba",
    "Pasta": "Pasta",
    "Italian": "Italijanska",
    "International": "Internacionalna",
    "Mexican": "Meksička",
    "Thai": "Tajska",
    "Chinese": "Kineska",
    "Japanese": "Japanska",
    "French": "Francuska",
    "French Fries": "Pomfrit",
    "Burgers": "Burgeri",
    "Chicken": "Piletina",
    "Traditional cuisine": "Tradicionalna kuhinja",
    "Snack Bar": "Užina bar",
    "Burek": "Burek",
    "Mediterranean": "Mediteranska",
    "Seafood": "Morski plodovi",
    "Crepes": "Palačinke",
    "Salads": "Salate",
    "Desserts": "Dezerti",
    "Vegan": "Veganska",
    "Vegetarian": "Vegetarijanska", "The selected tags is invalid.": 'Izabrani tagovi nisu dozvoljeni',
    'Are you looking for a place for your next meal or do you want to list your restaurant so everyone can see it?': 'Tražite pravo mesto za sledeći obrok ili želite da postavite svoj restoran da ga svi vide?', 'You’re in the right place!': 'Na pravom ste mestu!', 'Browse restaurants': 'Pretražite restorane', 'Post your restaurant': 'Postavite svoj restoran',
    //ERROR MESSAGES
    'The value must be a non-empty string.': 'Vrednost mora biti tekst koji nije prazan.',
    "The entered city is not on the list of allowed cities.": 'Uneti grad nije na listi dozvoljenih gradova.',
    'Selected tags are not valid.': 'Izabrani tagovi nisu validni.',
    "Upload background image": "Učitajte pozadinsku sliku",
    "The title field is required.": "Naslov je obavezan!",
    "The title field must be a string.": "Naslov mora biti sastavljen od slova!",
    "The title field must be at least 2 characters.": "Naslov mora imati najmanje 2 slova!",
    "The subtitle field is required.": "Podnaslov je obavezan!",
    "The subtitle field must be a string.": "Podnaslov mora biti sastavljen od slova!",
    "The subtitle field must be at least 2 characters.": "Podnaslov mora imati najmanje 2 slova!",
    "The description field is required.": "Polje opis je obavezan!",
    "The description field must be a string.": "Polje opis mora biti sastavljen od slova!",
    "The description field must be at least 5 characters.": "Polje opis mora imati najmanje 5 slova!",
    "The media field is required.": "Molim učitajte sliku!",
    "The media field must be an image.": "Fajl mora biti slika!",
    "Extentions allowed:jpg,jpeg,png,gif,webp.": "Dozvoljene ektenzije:jpg,jpeg,png,gif,webp",
    "Field required. Values allowed:center,left,right.": "Obavezno polje. Dozvoljene vrednosti:centralno,levo,desno.",
    "Ups something went wrong. Try again.": "Ups greška, probajte ponovo!",
    "This section is the About Us section. Enter a title, for example: About Us, Welcome on behalf of the business, etc. Enter a description with some basic information you'd like to highlight about your business. You can also choose whether or not to include an image in this section.": " Ova sekcija je sekcija O nama. Unesite naslov, na primer: O nama, Dobrodošli u ime biznisa isl. Unesite opis, neke osnovne podatke koje želite da istaknete o vašem biznisu. Takodje možete izabrati da li želite sliku u ovoj sekciji ili ne.`",
    'Click for instruction': 'Kliknite za uputstva',
    "This section is intended for items on your menu. The Add Section button adds a menu section, and the Add Item button adds an individual item. In the Section Title field, you can enter names such as Starters, Main Courses, Desserts, etc.": "Ova sekcija je namenjena za artikle vašeg menija. Na dodaj sekciju dugme dodaje se jedna sekcija menija. A na dodaj artikal dugme dodaje se pojedinačni artikal. U polje Naslov sekcije dodajete npr. Predjela, Glavna jela, Deserti isl."
  };
  const cities = ["Ada", "Aleksandrovac", "Aleksinac", "Alibunar", "Apatin", "Aranđelovac", "Arilje", "Babušnica", "Bajina Bašta", "Barajevo",
    "Batočina", "Bač", "Bačka Palanka", "Bačka Topola", "Bački Petrovac", "Bela Palanka", "Bela Crkva", "Beočin", "Bečej",
    "Blace", "Bogatić", "Bojnik", "Boljevac", "Bor", "Bosilegrad", "Brus", "Bujanovac", "Valjevo", "Varvarin",
    "Velika Plana", "Veliko Gradište", "Vitina", "Vladimirci", "Vladičin Han", "Vlasotince", "Voždovac", "Vranje", "Vračar",
    "Vrbas", "Vrnjačka Banja", "Vršac", "Vučitrn", "Gadžin Han", "Glogovac", "Gnjilane", "Golubac", "Gora",
    "Gornji Milanovac", "Grocka", "Despotovac", "Dečani", "Dimitrovgrad", "Doljevac", "Đakovica", "Žabalj", "Žabari",
    "Žagubica", "Žitište", "Žitorađa", "Zaječar", "Zvezdara", "Zvečan", "Zemun", "Zrenjanin", "Zubin Potok",
    "Ivanjica", "Inđija", "Irig", "Istok", "Jagodina", "Kanjiža", "Kačanik", "Kikinda", "Kladovo", "Klina",
    "Knić", "Knjaževac", "Kovačica", "Kovin", "Kosjerić", "Kosovo Polje", "Kosovska Kamenica", "Kosovska Mitrovica", "Koceljeva",
    "Kragujevac", "Kraljevo", "Krupanj", "Kruševac", "Kula", "Kuršumlija", "Kučevo", "Lazarevac", "Lajkovac",
    "Lapovo", "Lebane", "Leposavić", "Leskovac", "Lipljan", "Loznica", "Lučani", "Ljig", "Ljubovija", "Majdanpek",
    "Majdanpek", "Mali Zvornik", "Mali Iđoš", "Malo Crniće", "Medveđa", "Mediana", "Merošina", "Mionica", "Mladenovac",
    "Negotin", "Niška Banja", "Nova Varoš", "Nova Crnja", "Novi Beograd", "Novi Bečej", "Novi Kneževac", "Novi Pazar", "Novi Sad",
    "Novo Brdo", "Obilić", "Obrenovac", "Opovo", "Orahovac", "Osečina", "Odžaci", "Palilula", "Palilula (Niš)",
    "Pantelej", "Pančevo", "Paraćin", "Petrovaradin", "Petrovac na Mlavi", "Peć", "Pećinci", "Pirot", "Plandište",
    "Podujevo", "Požarevac", "Požega", "Preševo", "Priboj na Limu", "Prizren", "Prijepolje", "Priština", "Prokuplje",
    "Ražanj", "Rakovica", "Rača", "Raška", "Rekovac", "Ruma", "Savski venac", "Svilajnac", "Svrljig", "Senta",
    "Sečanj", "Sjenica", "Smederevo", "Smederevska Palanka", "Sokobanja", "Sombor", "Sopot", "Srbica", "Srbobran",
    "Sremska Mitrovica", "Sremski Karlovci", "Stara Pazova", "Stari grad", "Stragari", "Subotica", "Suva Reka", "Surdulica",
    "Surčin", "Temerin", "Titel", "Topola", "Trgovište", "Trstenik", "Tutin", "Ćićevac", "Ćuprija", "Ub",
    "Užice", "Uroševac", "Crveni krst", "Crna Trava", "Čajetina", "Čačak", "Čoka", "Čukarica", "Šabac",
    "Šid", "Štimlje", "Štrpce"
  ];
  const tagsEn = [
    'Sandwiches',
    'Food truck',
    'Pub',
    'Bakery',
    'Pizza',
    'Deli',
    'Fine dining',
    'Buffet',
    'Bar',
    'Bar and Brewery',
    'Fast food',
    'Cafeteria',
    'BBQ (Barbecue)',
    'Gyros',
    'Breakfast',
    'Lunch',
    'Dinner',
    'Dine-in',
    'Drive-through',
    'Drinks',
    'Kebab',
    'Indian',
    'Fish',
    'Pasta',
    'Italian',
    'International',
    'Mexican',
    'Thai',
    'Chinese',
    'Japanese',
    'French',
    'French Fries',
    'Burgers',
    'Chicken',
    'Traditional cuisine',
    'Snack Bar',
    'Burek',
    'Mediterranean',
    'Seafood',
    'Crepes',
    'Salads',
    'Desserts',
    'Vegan',
    'Vegetarian'
  ];
  const tagsSr = [
    "Sendviči",
    "Kombi sa hranom",
    "Pab",
    "Pekara",
    "Pica",
    "Delikates",
    "Gurmanski restoran",
    "Bife",
    "Bar",
    "Bar i pivara",
    "Brza hrana",
    "Kantina",
    "Roštilj",
    "Giros",
    "Doručak",
    "Ručak",
    "Večera",
    "Jedenje u restoranu",
    "Prolazna usluga",
    "Pića",
    "Kebab",
    "Indijska",
    "Riba",
    "Pasta",
    "Italijanska",
    "Internacionalna",
    "Meksička",
    "Tajska",
    "Kineska",
    "Japanska",
    "Francuska",
    "Pomfrit",
    "Burgeri",
    "Piletina",
    "Tradicionalna kuhinja",
    "Užina bar",
    "Burek",
    "Mediteranska",
    "Morski plodovi",
    "Palačinke",
    "Salate",
    "Dezerti",
    "Veganska",
    "Vegetarijanska"
  ];


  //  Validations
  const validateTitle = (title) => {
    if (!isString(title)) {
      return 'The title field must be a string.';

    } else if (title.length < 2) {
      return 'The title field must be at least 2 characters.';
    } else {
      return '';

    }
  }
  const validateDescription = (description) => {
    if (!isString(description)) {
      return 'The description field must be a string.';

    } else if (description.length < 5) {
      return "The description field must be at least 5 characters.";
    } else {
      return '';

    }
  }
  const validateImage = (image) => {
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];


    if (image instanceof File) { // Check if it is an instance of File
      if (!allowedImageTypes.includes(image.type)) {
        return 'Extentions allowed:jpg,jpeg,png,gif,webp.';
      } else {
        return '';
      }
    } else {
      return 'The media field must be an image.';

    }
  }
  const validatePrice = (price)=>{
    if ( !isValidNumber(price)){
      return 'Value not valid! Must be a number greater than zero.';
    }else {
        return '';
      }
  }
  function titleValidation(value) {
    return typeof value === 'string' && value.trim() !== '';
  };
  function cityValidation(city) {
    return Globals.cities.includes(city.trim());

  };
  function tagsValidation(tags) {
    if (!Array.isArray(tags) || tags.length == 0) {
      return false;
    }
    tags.forEach(tag => {
      if (!Globals.tagsEn.includes(tag.trim())) {
        return false;
      }
    });
    return true;

  }
  const styling = {
    mainDiv: {
      light: ' bg-white text-gray-700 ',
      dark: ' bg-gray-700 text-white ',
    },
    sideBar: {
      main: {
        light: ' bg-white text-gray-700 ',
        dark: 'bg-gray-700 text-white '
      },
      input: {
        light: ' bg-gray-100  text-gray-700 rounded-sm ',
        dark: ' bg-gray-700   text-white rounded-sm ',
      },

    },
    hero: {
      mainDiv: {
        light: ' bg-white text-gray-700 ',
        dark: ' bg-gray-700 text-white ',
      },
      navBar: {
        light: ' bg-white text-gray-700 bg-opacity-70 z-10 ',
        dark: ' bg-gray-700 text-white bg-opacity-70 z-10 ',
      },
      titleSubTitleDiv: {

        main: {
          light: ' bg-gray-300 border-2 border-gray-300 bg-opacity-70 shadow-sm hover:shadow-lg',
          dark: 'bg-gray-700 border-2 border-gray-700 bg-opacity-70 shadow-sm hover:shadow-lg'
        },
        input: {
          light: 'bg-gray-100 bg-opacity-50 border-b-1 ',
          dark: 'bg-gray-700 bg-opacity-50  ',
        },

        textArea: {
          light: 'bg-gray-100 bg-opacity-50 border-b-1 ',
          dark: 'bg-gray-700 bg-opacity-50 border-b-1 ',
        },


      },
      select: {
        light: ' bg-gray-100 bg-opacity-50 border-b-1 text-gray-700  ',
        dark: ' bg-gray-700 bg-opacity-50  text-white ',
      }
    },
    hamburgerButton: {
      light: ' bg-gray-700 bg-opacity-50   ',
      dark: ' bg-gray-100 bg-opacity-50   ',
    },
    aboutUs: {
      light: ' bg-gray-200 bg-opacity-50   ',
      dark: ' bg-gray-700 bg-opacity-50   ',
    },
    menu: {
      light: ' bg-gray-100 bg-opacity-50   ',
      dark: ' bg-gray-500 bg-opacity-50   ',
    },
    input: {
      light: ' bg-gray-100  text-gray-700 rounded-sm ',
      dark: ' bg-gray-400  text-white rounded-sm ',
    }
  }
  const positioning = {
    hero: {
      navBar: {
        center: ' md:items-center ',
        left: ' md:items-start ',
        right: ' md:items-end ',
      },
      titleSubtitleDiv: {
        center: ' self-center items-center ',
        left: ' self-start items-start ',
        right: ' self-end items-end ',
        title: {
          center: ' text-center ',
          left: ' text-start  ',
          right: ' text-end  ',
        },
        subTitle: {
          center: ' text-center ',
          left: ' text-start  ',
          right: ' text-end  ',
        }
      },
    }
  }
  function isString(value) {
    if (typeof value === 'string') {
      return true;
    } else {
      return false;
    }
  }
  function isValidNumber(value) {
    return value !== '' && !isNaN(value) && Number(value) > 0;
  }
  return (
    <PageContext.Provider value={{ pageData, setPageData, locale, setLocale, translate, cities, tagsEn, tagsSr, titleValidation, tagsValidation, cityValidation, styling, theme, setTheme, fontFamily, setFontFamily, positioning, isMobileMenuOpen, setIsMobileMenuOpen, locale, isString, validateTitle, validateDescription, validateImage,validatePrice }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);

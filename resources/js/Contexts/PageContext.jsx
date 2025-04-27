import React, { createContext, useContext, useState, useEffect } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [pageData, setPageData] = useState({
    title: 'Default Page',
    hero: null,
    // other data...
  });
  const [locale, setLocale] = useState();

  const onSetLocaleClick = (value) => {
    setLocale(value);
    localStorage.setItem('locale', value);
  }
  useEffect(() => {
    if (localStorage.getItem('locale')) {
      setLocale(localStorage.getItem('locale'));
    } else {
      setLocale('sr');

    }

  }, []);
 
  const translate = {
    'Menu' : 'Meni',
    'About Us' : 'O nama',
    'Location' : 'Lokacija',
    'Online order' : 'Naruči online',
    "Profile":"Profil",
    "Logout":"Izlogujte se",
    "Dashboard" : "Komandna tabla",
    "Create Your Web Page":"Kreirajte Vašu Stranicu",
    "You logged in!":"Ulogovani ste!",
    "CREATE":"ZAPOČNI",
    "Dashboard":"Komandna Tabla",
    "Type Restaurant Title":"Unesite naziv svog Restorana",
    "Choose city":"Odaberite opštinu",
    "Restaurant title":"Naziv restorana",
    'Food truck':"Kombi restoran",
    'Pub': "Pab",
    'Bakery':"Pekara",
    'Pizza':"Pica",
    'Deli':"Deli",
    'Fine Dining':"Luksizni",
    'Buffet':"Švedski sto",
    'Bar':"Bar",
    'Bar and Brewery':"Bar i proizvodjna",
    'Fast food':"Brza hrana",
    'Cafeteria':"Kafeterija",
    'BBQ':"Roštilj",
    'Giros':"Giros",
    'Breakfast':"Doručak",
    'Lunch':"Ručak",'Dinner':"Večera", 'Dine in':"Sedenje", 
    'Drive through':"Auto-restoran",'Drinks':"Piće",'Kebab':"Kebab",'Indian':"Indijski",'Fish':"Riba",'Pasta':"Pasta",'Italian':"Intalijanski",'International':"Internacionalni",'Mexican':"Meksički",'Tai':"Tajlandski",'Chinese':"Kineski",'Japanese':"Japanski",'French':"Francuski",'French Fries':"Pomfrit",'Burgers':"Burgeri",'Chicken':"Piletina",'Traditional cousine':"Tradicionalni",'Snack Bar':"Snek bar","Burek":'Burek','Crepes':'Palačinke','Deserts':'Dezerti','Mediteranian':'Mediteranska','Salads':'Salate','Seafood':'Morski plodovi','Vegan':'Veganski','Sandwiches':'Sendviči','Vegetarian':'Vegetarijanski',"The selected tags is invalid.":'Izabrani tagovi nisu dozvoljeni','Sandwiches':'Sendviči'
};
const cities= ["Ada", "Aleksandrovac", "Aleksinac", "Alibunar", "Apatin", "Aranđelovac", "Arilje", "Babušnica", "Bajina Bašta", "Barajevo", 
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

  return (
    <PageContext.Provider value={{ pageData, setPageData, locale, setLocale, onSetLocaleClick,translate }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);

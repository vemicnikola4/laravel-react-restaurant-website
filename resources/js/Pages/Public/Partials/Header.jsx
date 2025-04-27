import React, { useState } from 'react';
import { usePageContext } from '@/Contexts/PageContext';
import LocaleDiv from '@/Components/LocaleDiv';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pageData,locale,onSetLocaleClick,translate} = usePageContext();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-800">
            <h1>Giros kod Taličnog Tome</h1>
          </div>
          <LocaleDiv locale={locale} onSetLocaleClick={onSetLocaleClick} />
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a  onClick={() => scrollToSection("about")} className="hover:text-yellow-600 hover:cursor-pointer">{locale == 'en' ? 'About Us' : translate['About Us']}</a>
            <a  onClick={() => scrollToSection("menu")} className="hover:text-yellow-600 hover:cursor-pointer">{locale == 'en' ? 'Menu' : translate['Menu']}</a>
            <a  onClick={() => scrollToSection("location")} className="hover:text-yellow-600 hover:cursor-pointer">{locale == 'en' ? 'Location' : translate['Location']}</a>
            <a
              href="https://wolt.com/sr/srb/belgrade/restaurant/giros-kod-talinog-tome?srsltid=AfmBOorq6ihDxvFWRydRms-W4XiAA-DQTbd7L224H8GSyRZBOyZTYGN3"
              className="hover:text-yellow-600"
            >
              {locale == 'en' ? 'Online order' : translate['Online order']}
            </a>
          </nav>

          {/* Right-side Info */}
          <div className="hidden sm:flex items-center space-x-4 text-gray-700">
            <div className="text-sm">{locale == 'sr' ? 'Otvoreno : 9 – 22 PON-SUB' : 'Open : 9 – 22 MON-SUT'} </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2 text-gray-700 font-medium">
          <a  onClick={() => scrollToSection("about")} className=" block hover:text-yellow-600">{locale == 'en' ? 'About Us' : translate['About Us']}</a>
          <a  onClick={() => scrollToSection("menu")} className=" block hover:text-yellow-600">{locale == 'en' ? 'Menu' : translate['Menu']}</a>
          <a  onClick={() => scrollToSection("location")} className=" block hover:text-yellow-600">{locale == 'en' ? 'Location' : translate['Location']}</a>
          <a
            href="https://wolt.com/sr/srb/belgrade/restaurant/giros-kod-talinog-tome?srsltid=AfmBOorq6ihDxvFWRydRms-W4XiAA-DQTbd7L224H8GSyRZBOyZTYGN3"
            className=" block hover:text-yellow-600"
          >
            {locale == 'en' ? 'Online order' : translate['Online order']}
          </a>
          <div className="text-sm mt-2">{locale == 'sr' ? 'Otvoreno : 9 – 22 PON-SUB' : 'Open : 9 – 22 MON-SUT'}</div>
        </div>
      )}
    </header>
  );
};

export default Header;




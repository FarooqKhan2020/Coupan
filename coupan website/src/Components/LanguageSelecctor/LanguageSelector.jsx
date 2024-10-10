// import React, { useState, useEffect, useRef } from 'react';
// import { useTranslation } from 'react-i18next';
// import './LanguageSelector.css';

// // Import flag icons
// import enFlag from '../../assets/flags/en.png'; // English flag
// import frFlag from '../../assets/flags/fr.png'; // French flag
// import deFlag from '../../assets/flags/de.png'; // German flag

// import { FaAngleDown } from "react-icons/fa"; // Example with FontAwesome

// const LanguageSelector = () => {
//   const { i18n } = useTranslation();
//   const dropdownRef = useRef(null); // Reference for the dropdown element

//   // Load the selected language from localStorage or default to 'de' (German)
//   const [selectedLanguage, setSelectedLanguage] = useState(() => {
//     const savedLanguage = localStorage.getItem('language');
//     if (!savedLanguage) {
//       localStorage.setItem('language', 'de'); // Set default to German if nothing is saved
//       return 'de';
//     }
//     return savedLanguage;
//   });

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const languages = [
//     { code: 'en', flag: enFlag },
//     // { code: 'fr', flag: frFlag },
//     { code: 'de', flag: deFlag }
//   ];

//   // Change language and update localStorage
//   const changeLanguage = (language) => {
//     i18n.changeLanguage(language);
//     setSelectedLanguage(language);
//     localStorage.setItem('language', language); // Save the selected language to localStorage
//     setIsDropdownOpen(false);
//   };

//   // Function to handle clicks outside of the dropdown
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setIsDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     // Set the initial language from localStorage when the component mounts
//     const savedLanguage = localStorage.getItem('language');
//     if (savedLanguage) {
//       i18n.changeLanguage(savedLanguage);
//       setSelectedLanguage(savedLanguage);
//     }

//     if (isDropdownOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isDropdownOpen, i18n]);

//   return (
//     <div className="language-selector" ref={dropdownRef}>
//       {/* Flag button that opens the dropdown with down arrow */}
//       <div className="flag" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
//         <img src={languages.find(lang => lang.code === selectedLanguage).flag} alt={selectedLanguage} />
//         <FaAngleDown className="arrow-down-icon" />
//       </div>

//       {/* Dropdown menu */}
//       {isDropdownOpen && (
//         <div className="dropdown">
//           {languages.map(language => (
//             <div
//               key={language.code}
//               className={`dropdown-item ${language.code === selectedLanguage ? 'active' : ''}`} // Add active class
//               onClick={() => changeLanguage(language.code)}
//             >
//               <img src={language.flag} alt={language.code} />
//               {language.code.toUpperCase()}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default LanguageSelector;


import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

// Import flag icons
import deFlag from '../../assets/flags/de.png'; // German flag
// import frFlag from '../../assets/flags/fr.png'; // French flag

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  // Set German ('de') as the default language
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    // const savedLanguage = localStorage.getItem('language') || 'fr';
    // localStorage.setItem('language', 'fr'); // Ensure default is always German
    const savedLanguage = localStorage.getItem('language') || 'de';
    localStorage.setItem('language', 'de'); // Ensure default is always German
    return savedLanguage;
  });

  useEffect(() => {
    // Force the app to use German language by default
    // i18n.changeLanguage('fr');
    // setSelectedLanguage('fr');
    i18n.changeLanguage('de');
    setSelectedLanguage('de');
  }, [i18n]);

  return (
    <div className="language-selector">
      {/* Show only the German flag without the dropdown */}
      <div className="flag">
        {/* <img src={frFlag} alt="Ferench" /> */}
        <img src={deFlag} alt="German" />
      </div>
    </div>
  );
};

export default LanguageSelector;





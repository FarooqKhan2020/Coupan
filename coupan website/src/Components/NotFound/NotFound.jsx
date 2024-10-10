// import React from 'react';
// import './NotFound.css';

// const NotFound = () => {
//     return (
//         <div className="not-found-container">
//             <h2 className="not-found-text">Not Available</h2>
//         </div>
//     );
// };

// export default NotFound;

import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'; // Importing an icon for visual enhancement
import './NotFound.css';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation(); // Hook to get the translation function
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <FaExclamationTriangle className="not-found-icon" />
                <h2 className="not-found-text">{t('not_available')}</h2>
                <p className="not-found-description">
                    {t('the_product_not_found')}
                </p>
            </div>
        </div>
    );
};

export default NotFound;

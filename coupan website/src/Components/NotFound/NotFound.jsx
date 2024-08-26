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

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <FaExclamationTriangle className="not-found-icon" />
                <h2 className="not-found-text">Not Available</h2>
                <p className="not-found-description">
                    The product you're looking for is not available or not found.
                </p>
            </div>
        </div>
    );
};

export default NotFound;

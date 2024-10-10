import React from 'react';
import './CardLogoSection.css';
import Loader from '../Loader/Loader';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const CardLogoSection = ({data}) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  // if (data.length === 0) {
  //   return <Loader />;
  // }
  const { t } = useTranslation();
  return (
    <div className="mainLogo">
    <div className="card-logo-section">
      <h2>{t('where_you_save')}</h2>
      <div className="card-logo-container">
        {data.map((logo, index) => (
          <Link to={"/brand/"+logo.name} key={index} className="card-logo">
            <img src={apiUrl+logo.banner} alt={logo.alt} className="card-logo-image" />
            <p>{logo.coupons_count+ " "+t('vouchers')}</p>
          </Link>
        ))}
      </div>
      
      <Link to="/store" className="card-logo-button">{t('All_Stores')}</Link>
    </div>
    </div>
  );
};

export default CardLogoSection;

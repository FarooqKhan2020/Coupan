import React from 'react';
import './Brandinfo.css';
import LogoCard from './asideLogoCard';
import TextComponent from './TextComponent';
import { useTranslation } from 'react-i18next';
const BrandInfo = ({storeName,bannerImage, totalReviews, averageRating, storeId, storedescription}) => {
  const { t } = useTranslation();
  return (
    <>
   <div className="main-class-logocard">
        <LogoCard 
         logo={bannerImage}
         totalReviews={totalReviews}
         averageRating={averageRating}
         storeId={storeId}
        />
      </div>

    {/* <div className='TextComponent-mobile'>
    <TextComponent
        storeName={storeName}
        storedescription={storedescription}
      />
    </div> */}

    <div className="brand-info d-flex align-items-center">
      {/* <div className="bd-img me-3">
        <img src={bannerImage} alt="" />
      </div> */}
      <div>
      {/* <h1>Your valid {storeName} promo code</h1> */}
      <h1>{t('your_valid_promo_code', { storeName })}</h1> 
      {/* <p>Amazon Discount Code for July 2024 - 30 Online Deals</p> */}
      </div>
    </div>
    </>
  );
};

export default BrandInfo;

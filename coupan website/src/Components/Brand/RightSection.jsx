import React from 'react';
import BrandInfo from './BrandInfo';
import ContainerList from './ContainerList';
import './styles.css';

const RightSection = ({ containers, storeName,bannerImage, storecoupons, popupModal }) => {
  return (
    <section className="right-section">
      <BrandInfo storeName={storeName} bannerImage={bannerImage}/>
      <ContainerList containers={containers} storeName={storeName} storecoupons={storecoupons} bannerImage={bannerImage} popupModal={popupModal}/>
    </section>
  );
};

export default RightSection;

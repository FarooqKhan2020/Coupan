import React from 'react';
import BrandInfo from './BrandInfo';
import ContainerList from './ContainerList';
import './styles.css';

const RightSection = ({ containers, storeName,bannerImage, storecoupons }) => {
  return (
    <section className="right-section">
      <BrandInfo storeName={storeName} bannerImage={bannerImage}/>
      <ContainerList containers={containers}  storecoupons={storecoupons}/>
    </section>
  );
};

export default RightSection;

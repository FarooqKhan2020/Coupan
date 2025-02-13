import React from 'react';
import './TextComponent.css';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

const TextComponent = ({storeName, storedescription}) => {
  const { t } = useTranslation();
  return (
    <div className="text-component">
      {/* <h3>{storeName} Promo Code</h3> */}
      <h3>{t('promo_code', { storeName })}</h3>
      <p>
        {storedescription}
      </p>
      {/* <p>
        No need to wait for sales or Black Friday to benefit from discounts on the online store. If you don't have Amazon Prime yet, try it quickly, you won't be able to do without it! With an Amazon promo code valid in July 2024, you can save money on your everyday products.
      </p> */}
      {/*<Link to="/">The best promo codes of the moment</Link>*/}
    </div>
  );
};

export default TextComponent;

import React from "react";
import "./Loader.css"; // You can customize the styles
import { useTranslation } from 'react-i18next';
const Loader = () => {
  const { t } = useTranslation(); // Hook to get the translation function
  return (
    <div className="loader">
      <div className="spinner"></div> {/* This can be your spinner or loading animation */}
      <p>{t('loading')}</p>
    </div>
  );
};

export default Loader;

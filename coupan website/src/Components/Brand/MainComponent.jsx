import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useLoaderData } from 'react-router-dom'; // Import useParams hook
import './styles.css';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Summary from './Summary';
import PromoTable from './PromoTable';
import FAQComponent from './FAQComponent';
import ShopsComponent from './ShopsComponent';

const MainComponent = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [selectedType, setSelectedType] = useState(0);


  const brand = useLoaderData(); // Get the initial data from the loader
  const [brandName, setBrandName] = useState(brand);
  const [bannerImage, setBannerImage] = useState("");
  const [storeName, setstoreName] = useState("");
  const [totalReviews, setTotalReviews] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [storedescription, setStoreDescription] = useState("");
  const [featureStoreNames, setFeatureStoresName] = useState([]);
  const [storecoupons, setStoreCoupons] = useState([]);
  useEffect(() => {
    setBrandName(brand);
  // Update brandName when brand changes
  }, [brand]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl + `api/store-detail/${brandName}`);
        const storeData = response.data.store;
        const featureStores = response.data.featureStores;
        
        const reviews = storeData.reviews || [];
        const totalReviews = reviews.length;
        const averageRating = totalReviews > 0 
          ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews 
          : 0;
          // Extract names from featureStores array
        const featureStoreNames = featureStores.map(store => store.name);
        setFeatureStoresName(featureStoreNames);
         
        setBannerImage(apiUrl + `public/${storeData.banner}`);
        setstoreName(storeData.name);
        setStoreDescription(storeData.description);
        setStoreCoupons(storeData.coupons);
        
        setTotalReviews(totalReviews);
        setAverageRating(averageRating.toFixed(1));
        // console.log("Banner URL:", storeData.banner);
        // console.log("Store Data:", storeData);
        
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };

    if (brandName) {
      fetchData();
    }
  }, [brandName]);

  const handleRadioChange = (type) => {
    setSelectedType(type);
  };
  console.log("types123",typeof selectedType);
  const filteredContainers = selectedType === 0
    ? storecoupons
    : storecoupons.filter(container => container.highlight == selectedType);
console.log("filteredContainers",filteredContainers);
console.log('coupons', storecoupons.filter(container => typeof container.highlight));
  return (
    <div>
    <div className="main-component">
      <LeftSection 
        selectedType={selectedType} 
        handleRadioChange={handleRadioChange}
        // storecoupons={storecoupons}
        containers={storecoupons}
        bannerImage={bannerImage} // Pass the banner image to LeftSection
        totalReviews={totalReviews}
        averageRating={averageRating}
        storeName ={storeName}
        storedescription={storedescription}
        featureStoreNames={featureStoreNames}

      />
      <RightSection 
        containers={filteredContainers} 
        storeName ={storeName}
        bannerImage={bannerImage} // Pass the banner image to LeftSection
        storecoupons={storecoupons}

      />
    </div>
    <Summary/>
    <PromoTable/>
    <FAQComponent/>
    <ShopsComponent featureStoreNames={featureStoreNames}/>
    </div>
  );
};

export default MainComponent;

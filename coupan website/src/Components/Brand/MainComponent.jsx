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
  const [popupModal, setPopupModal] = useState(false);
  const [topStores, setTopStores] = useState([]);
  const [storepageBannerTwo, setStorepageBannerTwo] = useState("");
  const [storepageBannerOne, setStorepageBannerOne] = useState("");
  const [simlarcoupons, setSimilarcoupons] = useState([]);
  const [storeId, setStoreId] = useState("");
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
        const simlarcoupons = response.data.simlarcoupons;
        const popupModal = response.data.popupModal;
        const storeId = response.data.store.id;
        const topStores = response.data.topStores;
        const storepageBannerTwo = response.data.storepageBannerTwo;
        const storepageBannerOne = response.data.storepageBannerOne;
        const reviews = storeData.reviews || [];
        const totalReviews = reviews.length;
        const averageRating = totalReviews > 0 
          ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews 
          : 0;
          // Extract names from featureStores array
        // const featureStoreNames = featureStores.map(store => store.banner);
        const topStore = topStores.map(store => store.store.name);
        setTopStores(topStore);
        setFeatureStoresName(featureStores);
         setPopupModal(popupModal);
        setSimilarcoupons(simlarcoupons);
        setBannerImage(apiUrl + `public/${storeData.banner}`);
        setstoreName(storeData.name);
        setStoreDescription(storeData.description);
        setStoreCoupons(storeData.coupons);
        setStorepageBannerTwo(storepageBannerTwo);
        setStorepageBannerOne(storepageBannerOne);
        setTotalReviews(totalReviews);
        setStoreId(storeId);
        setAverageRating(averageRating.toFixed(1));
       
        
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
  const filteredContainers = selectedType === 0
    ? storecoupons
    : storecoupons.filter(container => container.highlight == selectedType);

  return (
    <div>
    <div className="main-component">
      <LeftSection 
        selectedType={selectedType} 
        handleRadioChange={handleRadioChange}
        containers={storecoupons}
        bannerImage={bannerImage} // Pass the banner image to LeftSection
        totalReviews={totalReviews}
        averageRating={averageRating}
        storeName ={storeName}
        storedescription={storedescription}
        featureStoreNames={featureStoreNames}
        storepageBannerTwo={storepageBannerTwo}
        storepageBannerOne={storepageBannerOne}
        storeId={storeId}
      />
      <RightSection 
        selectedType={selectedType} 
        handleRadioChange={handleRadioChange}
        containers={filteredContainers} containerTest={storecoupons}
        storeName ={storeName}
        bannerImage={bannerImage} // Pass the banner image to LeftSection
        storecoupons={storecoupons}
        popupModal={popupModal}
        simlarcoupons={simlarcoupons}

      />
    </div>
    <Summary/>
    <PromoTable/>
    <FAQComponent/>
    <ShopsComponent featureStoreNames={topStores}/>

    </div>
  );
};

export default MainComponent;

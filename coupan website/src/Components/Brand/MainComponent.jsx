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
  const [selectedType, setSelectedType] = useState('all');
  const [containers, setContainers] = useState([
    { id: 1, type: 'code', percentage: '90%', details: 'Treat yourself to an exceptional 90% discount on your favorite items on the Amazon website or app', expired: false },
    { id: 2, type: 'offer', percentage: '15%', details: 'Treat yourself to FREE DELIVERY on your Amazon order', iconType: 'van', expired: false },
    { id: 3, type: 'code', percentage: '20%', details: 'SECOND-HAND GOOD DEAL: Save an additional 20% with second-hand products offered by Amazon', expired: false },
    { id: 4, type: 'offer', percentage: '20%', details: 'READING PLAN: Find your current book in ebook form with Amazon Reading', iconType: 'gift', expired: false },
    { id: 5, type: 'refunded', percentage: '5.3%', details: '5.3% cashback on your purchases at Nike', expired: false },
    { id: 6, type: 'offer', percentage: '25%', details: 'Get 25% off on your next purchase', iconType: 'van', expired: false },
    { id: 7, type: 'offer', percentage: '20%', details: 'READING PLAN: Find your current book in ebook form with Amazon Reading', iconType: 'gift', expired: true },
    { id: 8, type: 'refunded', percentage: '5.3%', details: '5.3% cashback on your purchases at Nike', expired: true },
    { id: 9, type: 'offer', percentage: '25%', details: 'Get 25% off on your next purchase', iconType: 'van', expired: true },
  ]);

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
        const response = await axios.get(`http://coupon.gynerium.com/api/store-detail/${brandName}`);
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
         
        setBannerImage(`http://coupon.gynerium.com/public/${storeData.banner}`);
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
  
  const filteredContainers = selectedType === 'all'
    ? containers
    : containers.filter(container => container.type === selectedType);

  return (
    <div>
    <div className="main-component">
      <LeftSection 
        selectedType={selectedType} 
        handleRadioChange={handleRadioChange} 
        containers={containers} 
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
    <ShopsComponent/>
    </div>
  );
};

export default MainComponent;

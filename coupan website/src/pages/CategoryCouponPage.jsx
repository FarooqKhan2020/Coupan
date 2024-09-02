import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CouponBar from "../Components/CategoryCoupon/CouponBar";
import CategoryCouponCard from "../Components/CategoryCoupon/CategoryCouponCard";
import { useSearchParams } from 'react-router-dom';

// Define your coupon data (can also be imported from another file)

    // Add more coupons as needed

export default function CategoryCouponPage() {
  const [searchParams] = useSearchParams(); 
  const [coupons, setData] = useState([]);
  const [popupModal, setPopupModal] = useState([]);
  const [error, setError] = useState(null);

  const category = searchParams.get('category');
  const store = searchParams.get('store');
  const search = searchParams.get('search');
  const highlight = searchParams.get('highlight');



  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('https://coupon.gynerium.com/api/search');
        // const response = await axios.get(`https://coupon.gynerium.com/api/search?category=${categorycouponName}`);
        const response = await axios.get(`https://coupon.gynerium.com/api/search`, {
          params: {
            category: category || '', // Use category from URL or default to an empty string
            store: store || '',       // Use store from URL or default to an empty string
            search: search || '', // Use search from URL or default to an empty string
            highlight: highlight || '',
          },
        });
        setData(response.data.coupons.data);

        setPopupModal(response.data.popupModal);

      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [category, store, search, highlight]); 


  
  return (
    <>
      <CouponBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'var(--bg-main)' }}>
        {coupons.map((coupon, index,) => (
          <CategoryCouponCard
            coupons ={coupon}
            popupModal={popupModal}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

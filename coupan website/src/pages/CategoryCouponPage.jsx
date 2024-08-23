import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CouponBar from "../Components/CategoryCoupon/CouponBar";
import CategoryCouponCard from "../Components/CategoryCoupon/CategoryCouponCard";
import couponImage from "../assets/carouseImg/foot.webp";

// Define your coupon data (can also be imported from another file)

    // Add more coupons as needed

export default function CategoryCouponPage() {
  const [coupons, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://coupon.gynerium.com/api/search');
        setData(response.data.coupons.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <CouponBar />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'var(--bg-main)' }}>
        {coupons.map((coupon, index) => (
          <CategoryCouponCard
            coupons ={coupon}
          />
        ))}
      </div>
    </>
  );
}

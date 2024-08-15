// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarouselComponent from '../Components/Home/CarouselComponent';
import Carousel from '../Components/Home/Carousel';
import CardComponent from '../Components/Home/CardComponent';
import Categories from '../Components/Home/Categories';
import PromiseComponent from '../Components/Home/PromiseComponent';
import CardLogoSection from '../Components/Home/CardLogoSection';
import ImageHover from '../Components/Home/ImageHover';

export default function HomePage(){
    const [data, setData] = useState({
        sliders: [],
        categories: [],
        stores: [],
        exclusiveCoupons: [],
        verifiedCoupons: [],
        featuredCoupons: [],
        blogs: [],
        homepageBannerOne: null,
        homepageBannerTwo: null,
        seo_setup: null,
        sections: [],
        popupModal: null
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://coupon.gynerium.com/api/homepage');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setData(data);
                console.log('API Data:', data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <CarouselComponent data={data.stores}/>
            <Carousel data={data.sliders}/>
            <CardComponent data={data.categoryCoupon}/>
            <Categories data={data.categories}/>
            <PromiseComponent/>
            <CardLogoSection/>
            <ImageHover/>
        </>
    );
}

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CarouselComponent from '../Components/Home/CarouselComponent';
import Carousel from '../Components/Home/Carousel';
import CardComponent from '../Components/Home/CardComponent';
import Categories from '../Components/Home/Categories';
import StatsSection from '../Components/Home/StatsSection';
import PromiseComponent from '../Components/Home/PromiseComponent';
import CardLogoSection from '../Components/Home/CardLogoSection';
import ImageHover from '../Components/Home/ImageHover';

export default function HomePage(){
    const [data, setData] = useState({
        sliders: [],
        categoryCoupon: [],
        categories: [],
        stores: [],
        storesCoupons: [],
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
        const apiUrl = import.meta.env.VITE_API_URL;
        async function fetchData() {
            try {
                const response = await fetch(apiUrl + 'api/homepage');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setData(data);

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
            <StatsSection data={data}/>
            <PromiseComponent/>
            <CardLogoSection data={data.storesCoupons}/>
            <ImageHover/>
        </>
    );
}

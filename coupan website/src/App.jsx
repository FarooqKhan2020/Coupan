
import axios from 'axios';
import { useState, useEffect } from 'react';
import LogoBar1 from './Components/Home/LogoBar1';
import Navbar from './Components/Home/Navbar';


import Footer from './Components/Home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from 'react-router-dom';
import ScrollToTop from './Components/Home/ScrollToTop';
function App() {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [logo, setLogo] = useState('');
    const [footerLogo, setFooterLogo] = useState('');
    const [favicon, setFavicon] = useState('');
    const [footer, setFooter] = useState('');
    const [footerSocialLinks, setFooterSocialLinks] = useState([]);
    useEffect(() => {
        // Fetch the settings from your API
        axios.get(`${apiUrl}api/settings`)
            .then(response => {
                const { logo, footer_logo, favicon } = response.data.setting;
                const{footer}=response.data;
                const {footerSocialLinks}=response.data;
                setFooterSocialLinks(footerSocialLinks);
                setFooter(footer);
                setLogo(logo);
                setFooterLogo(footer_logo);
                setFavicon(favicon);


                // Update the favicon in the index.html
                if (favicon) {
                    const faviconLink = document.getElementById('favicon');
                    if (faviconLink) {
                        faviconLink.href = `${apiUrl}${favicon}`;
                    }       
                }
            })
            .catch(error => {
                console.error('Error fetching settings:', error);
            });
    }, []);

    // color api testing
    const [themeColors, setThemeColors] = useState({ themeOne: '#FFC0CB', themeTwo: ' #FF69B4' });

    useEffect(() => {
      axios.get('http://coupon.gynerium.com/api/settings')
        .then(response => {
          const { theme_one, theme_two } = response.data;
          setThemeColors({ themeOne: theme_one, themeTwo: theme_two });
          
          // Update CSS variables
          document.documentElement.style.setProperty('--theme-one', theme_one);
          document.documentElement.style.setProperty('--theme-two', theme_two);
        })
        .catch(error => {
          console.error('Error fetching theme colors:', error);
        });
    }, []);
//   color api testing


  return (

    <>

<ScrollToTop/>
    {/* <LogoBar1 logo={logo}/> */}
    <Navbar logo={logo}/>
    <Outlet/>
    <Footer footerLogo={footerLogo} footer={footer} footerSocialLinks={footerSocialLinks}
    ></Footer>
    </>
  )
}

export default App;
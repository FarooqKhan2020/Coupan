
import axios from 'axios';
import { useState, useEffect } from 'react';
import LogoBar1 from './Components/Home/LogoBar1';
import Navbar from './Components/Home/Navbar';
import Highlight from './Components/Home/Highlight';

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
    useEffect(() => {
        // Fetch the settings from your API
        axios.get(`${apiUrl}api/settings`)
            .then(response => {
                const { logo, footer_logo, favicon } = response.data.setting;
                const{footer}=response.data;
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
  return (

    <>

<ScrollToTop/>
    <LogoBar1 logo={logo}/>
    <Navbar/>
    <Highlight/>
    <Outlet/>
    <Footer footerLogo={footerLogo} footer={footer}
    ></Footer>
    </>
  )
}

export default App;
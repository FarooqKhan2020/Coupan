import React from "react";
import "./Footer.css";
import { FaFacebook, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Footer = ({ footerLogo, footer, footerSocialLinks }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h4>{t('help')}</h4>
          <ul>
            {/* <li>
              <Link to="/store">All Stores</Link>
            </li>
            <li>
              <Link to="/Category">All Categories</Link>
            </li> */}
            <li>
              <Link to="/contactus">{t('contact_us')}</Link>
            </li>
            <li>
              <Link to="/privacypolicy">{t('privacy_policy')}</Link>
            </li>
            <li>
              <Link to="/termscondition">{t('terms_condition')}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>{t('pursue')}</h4>
          <ul>
            <li>
              <Link to="/aboutus">{t('About_us')}</Link>
            </li>
            <li>
              <Link to="/store">{t('All_Stores')}</Link>
            </li>
            <li>
              <Link to="/Category">{t('all_categories')}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-logo-section">
          <Link to="/">
            <img src={apiUrl + footerLogo} alt="Logo" className="footer-logo" />
          </Link>
          <ul>
            <li>
              <span>
                <IoIosPhonePortrait /> {footer.phone}.
              </span>
            </li>
            <li>
              <span>
                {" "}
                <CiMail /> {footer.email}.
              </span>
            </li>
            <li>
              <span>
                <CiLocationOn /> {footer.address}.
              </span>
            </li>
          </ul>

          <div className="footer-icons">
            {footerSocialLinks.map((footerSocialLink) => (
              <Link
                to={footerSocialLink.link}
                style={{ color: "white" }}
                key={footerSocialLink.id}
              >
                <i className={footerSocialLink.icon}></i>
              </Link>
            ))}
          </div>
        </div>
       
        {/* <LanguageSelector/> */}
      </footer>

      {/* Additional Footer End Section */}
      <div className="footer-end">
        <FaRegCopyright />
        {footer.copyright}
      </div>
      {/* <LanguageSelector/> */}
    </>
  );
};

export default Footer;

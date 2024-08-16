import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBriefcase,
    faWineGlassAlt,
    faPaw,
    faCar,
    faPiggyBank,
    faGem,
    faTicketAlt,
    faBox,
    faGift,
    faShoePrints,
    faHeart,
    faPalette,
    faBolt,
    faLaptop,
    faMobileAlt,
    faGamepad,
    faCarSide,
    faHome,
    faTshirt,
    faCamera,
    faBabyCarriage,
    faConciergeBell,
    faBasketballBall,
    faPlane,
    faTaxi
} from '@fortawesome/free-solid-svg-icons';
import './AllCategories.css'; // You can style this component with a separate CSS file

const categories = [
    { name: 'Business Purchasing', icon: faBriefcase, link: '/category' },
    { name: 'Food & Wines', icon: faWineGlassAlt, link: '/category' },
    { name: 'Pet shop', icon: faPaw, link: '/category' },
    { name: 'Automobile & Motorcycle', icon: faCar, link: '/category' },
    { name: 'Banks & Insurance', icon: faPiggyBank, link: '/category' },
    { name: 'Jewelry', icon: faGem, link: '/category' },
    { name: 'Ticket office', icon: faTicketAlt, link: '/category' },
    { name: 'Boxes & Flowers', icon: faBox, link: '/category' },
    { name: 'Gifts', icon: faGift, link: '/category' },
    { name: 'Shoes', icon: faShoePrints, link: '/category' },
    { name: 'Cosmetics, Wellness & Health', icon: faHeart, link: '/category' },
    { name: 'Culture & Leisure', icon: faPalette, link: '/category' },
    { name: 'Energy', icon: faBolt, link: '/category' },
    { name: 'High-tech', icon: faLaptop, link: '/category' },
    { name: 'Internet & Mobile', icon: faMobileAlt, link: '/category' },
    { name: 'Video Games & Toys', icon: faGamepad, link: '/category' },
    { name: 'Vehicle Rental', icon: faCarSide, link: '/category' },
    { name: 'Home & Garden', icon: faHome, link: '/category' },
    { name: 'Fashion', icon: faTshirt, link: '/category' },
    { name: 'Photos & Impressions', icon: faCamera, link: '/category' },
    { name: 'Childcare', icon: faBabyCarriage, link: '/category' },
    { name: 'Services', icon: faConciergeBell, link: '/category' },
    { name: 'Sports', icon: faBasketballBall, link: '/category' },
    { name: 'Travels', icon: faPlane, link: '/category' },
    { name: 'VTC, Taxi & Urban Mobility', icon: faTaxi, link: '/category' },
];

export default function AllCategories() {
    return (
        <div className="all-categories-container">
            <h2 className="categories-heading">All Categories</h2>
            <div className="categories-grid">
                {categories.map((category, index) => (
                    <Link to={category.link} className="category-box" key={index}>
                        <FontAwesomeIcon icon={category.icon} className="category-icon" />
                        <p className="category-name">{category.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

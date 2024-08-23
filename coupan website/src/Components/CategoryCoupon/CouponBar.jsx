import React, { useState } from 'react';
import { FaCaretDown, FaSearch } from 'react-icons/fa'; // Importing icons
import './CouponBar.css';

const CouponBar = ({ onFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedStore, setSelectedStore] = useState('');
    const [openDropdown, setOpenDropdown] = useState(null);
    const [categorySearch, setCategorySearch] = useState('');
    const [storeSearch, setStoreSearch] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setOpenDropdown(null);
    };

    const handleStoreSelect = (store) => {
        setSelectedStore(store);
        setOpenDropdown(null);
    };

    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
    };

    const handleDropdownClick = (e) => {
        e.stopPropagation();
    };

    const handleSearch = () => {
        onFilter(selectedCategory, selectedStore);
    };

    return (
        <div className="coupon-bar">
            <div className="coupon-all-coupon-div">
                <h2 className="coupon-heading">All Coupon</h2>
            </div>
            <div className="coupon-dropdown-container">
                <div 
                    className={`coupon-dropdown ${openDropdown === 'category' ? 'coupon-dropdown-open' : ''}`} 
                    onClick={() => handleDropdownToggle('category')}
                >
                    <span className="coupon-dropdown-label">
                        {selectedCategory || 'Select Category'} <FaCaretDown /> {/* Added icon here */}
                    </span>
                    <div className="coupon-dropdown-content" onClick={handleDropdownClick}>
                        <input 
                            type="text" 
                            placeholder="Search Category" 
                            className="coupon-search-input-dp" 
                            value={categorySearch}
                            onChange={(e) => setCategorySearch(e.target.value)}
                        />
                        <div className="coupon-options">
                            {['Accessories', 'Babies', 'Bike', 'Electronics', 'Health Care']
                                .filter((category) => 
                                    category.toLowerCase().includes(categorySearch.toLowerCase())
                                )
                                .map((category, index) => (
                                    <div 
                                        key={index} 
                                        className={`coupon-option ${category === selectedCategory ? 'coupon-option-selected' : ''}`} 
                                        onClick={() => handleCategorySelect(category)}
                                    >
                                        {category}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div 
                    className={`coupon-dropdown ${openDropdown === 'store' ? 'coupon-dropdown-open' : ''}`} 
                    onClick={() => handleDropdownToggle('store')}
                >
                    <span className="coupon-dropdown-label">
                        {selectedStore || 'Select Store'} <FaCaretDown /> {/* Added icon here */}
                    </span>
                    <div className="coupon-dropdown-content" onClick={handleDropdownClick}>
                        <input 
                            type="text" 
                            placeholder="Search Store" 
                            className="coupon-search-input-dp" 
                            value={storeSearch}
                            onChange={(e) => setStoreSearch(e.target.value)}
                        />
                        <div className="coupon-options">
                            {['Amazon', 'eBay', 'Walmart', 'Best Buy', 'Target']
                                .filter((store) => 
                                    store.toLowerCase().includes(storeSearch.toLowerCase())
                                )
                                .map((store, index) => (
                                    <div 
                                        key={index} 
                                        className={`coupon-option ${store === selectedStore ? 'coupon-option-selected' : ''}`} 
                                        onClick={() => handleStoreSelect(store)}
                                    >
                                        {store}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="coupon-search-bar">
                <input type="text" placeholder="Search" className="coupon-search-input" />
                <button onClick={handleSearch} className="coupon-search-button">
                    <FaSearch /> {/* Added search icon here */}
                </button>
            </div>
        </div>
    );
};

export default CouponBar;

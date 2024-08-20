import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaAngleDown, FaAngleUp } from "react-icons/fa";
import axios from "axios";
import { IoMenu } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { FaMedal, FaShoppingBag, FaUmbrellaBeach } from "react-icons/fa";
import {
  FaHome,
  FaStore,
  FaBlog,
  FaTrophy,
  FaClock,
  FaTshirt,
  FaHeartbeat,
  FaGift,
  FaFemale,
  FaDumbbell,
  FaShoePrints,
  FaPaintBrush,
  FaLaptop,
  FaHotel,
} from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const [categoriesDropdownOpen, setcategoriesDropdownOpen] = useState(false);
  const [keepcategoriesDropdownOpen, setKeepcategoriesDropdownOpen] = useState(false);
  const [storesDropdownOpen, setstoresDropdownOpen] = useState(false);
  const [keepstoresDropdownOpen, setKeepstoresDropdownOpen] = useState(false);
  // const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [rightNowDropdownOpen, setRightNowDropdownOpen] = useState(false);
  const [keepRightNowDropdownOpen, setkeepRightNowDropdownOpen] =
    useState(false); // remains open when on right now dropdown
  const [selectedCategory, setSelectedCategory] =
    useState("Clothing & Apparel"); // Set default to "Clothing & Apparel"
  const [selectedStore, setSelectedStore] =
    useState("Clothing & Apparel"); // Set default to "Clothing & Apparel"
  const [sidebarRightNowDropdownOpen, setSidebarRightNowDropdownOpen] =
    useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  

  // New state variables for the additional dropdowns
  const [sidebarClothingDropdownOpen, setSidebarClothingDropdownOpen] =
    useState(false);
  const [sidebarHealthDropdownOpen, setSidebarHealthDropdownOpen] =
    useState(false);
  const [sidebarGiftsDropdownOpen, setSidebarGiftsDropdownOpen] =
    useState(false);
  const [sidebarWomenDropdownOpen, setSidebarWomenDropdownOpen] =
    useState(false);
  const [
    sidebarSportingGoodsDropdownOpen,
    setSidebarSportingGoodsDropdownOpen,
  ] = useState(false);
  const [sidebarShoesDropdownOpen, setSidebarShoesDropdownOpen] =
    useState(false);
  const [sidebarBeautyDropdownOpen, setSidebarBeautyDropdownOpen] =
    useState(false);
  const [
    sidebarDepartmentStoresDropdownOpen,
    setSidebarDepartmentStoresDropdownOpen,
  ] = useState(false);
  const [sidebarSoftwareDropdownOpen, setSidebarSoftwareDropdownOpen] =
    useState(false);
  const [sidebarHotelsDropdownOpen, setSidebarHotelsDropdownOpen] =
    useState(false);

  const dropdownRefs = {
    categories: useRef(null),
    stores: useRef(null),
    rightNow: useRef(null),
    sidebarRightNow: useRef(null),
    sidebarClothing: useRef(null),
    sidebarHealth: useRef(null),
    sidebarGifts: useRef(null),
    sidebarWomen: useRef(null),
    sidebarSportingGoods: useRef(null),
    sidebarShoes: useRef(null),
    sidebarBeauty: useRef(null),
    sidebarDepartmentStores: useRef(null),
    sidebarSoftware: useRef(null),
    sidebarHotels: useRef(null),
  };

  useEffect(() => {
    function handleDocumentClick(event) {
      if (
        dropdownRefs.categories.current &&
        !dropdownRefs.categories.current.contains(event.target)
      ) {
        setcategoriesDropdownOpen(false);
      }

      if (
        dropdownRefs.stores.current &&
        !dropdownRefs.stores.current.contains(event.target)
      ) {
        setstoresDropdownOpen(false);
      }

      if (
        dropdownRefs.rightNow.current &&
        !dropdownRefs.rightNow.current.contains(event.target)
      ) {
        setRightNowDropdownOpen(false);
      }

      if (
        dropdownRefs.sidebarRightNow.current &&
        !dropdownRefs.sidebarRightNow.current.contains(event.target)
      ) {
        setSidebarRightNowDropdownOpen(false);
      }
      // Handle clicks outside for the additional dropdowns
      if (
        dropdownRefs.sidebarClothing.current &&
        !dropdownRefs.sidebarClothing.current.contains(event.target)
      ) {
        setSidebarClothingDropdownOpen(false);
      }
      if (
        dropdownRefs.sidebarHealth.current &&
        !dropdownRefs.sidebarHealth.current.contains(event.target)
      ) {
        setSidebarHealthDropdownOpen(false);
      }
      if (
        dropdownRefs.sidebarGifts.current &&
        !dropdownRefs.sidebarGifts.current.contains(event.target)
      ) {
        setSidebarGiftsDropdownOpen(false);
      }
      if (
        dropdownRefs.sidebarWomen.current &&
        !dropdownRefs.sidebarWomen.current.contains(event.target)
      ) {
        setSidebarWomenDropdownOpen(false);
      }
      if (
        dropdownRefs.sidebarSportingGoods.current &&
        !dropdownRefs.sidebarSportingGoods.current.contains(event.target)
      ) {
        setSidebarSportingGoodsDropdownOpen(false);
      }
      if (
        dropdownRefs.sidebarShoes.current &&
        !dropdownRefs.sidebarShoes.current.contains(event.target)
      ) {
        setSidebarShoesDropdownOpen(false);
      }
      if (
        dropdownRefs.sidebarBeauty.current &&
        !dropdownRefs.sidebarBeauty.current.contains(event.target)
      ) {
        setSidebarBeautyDropdownOpen(false);
      }
      if (
        dropdownRefs.sidebarDepartmentStores.current &&
        !dropdownRefs.sidebarDepartmentStores.current.contains(event.target)
      ) {
        setSidebarDepartmentStoresDropdownOpen(false);
      }
      if (
        dropdownRefs.sidebarSoftware.current &&
        !dropdownRefs.sidebarSoftware.current.contains(event.target)
      ) {
        setSidebarSoftwareDropdownOpen(false);
      }
      if (
        dropdownRefs.sidebarHotels.current &&
        !dropdownRefs.sidebarHotels.current.contains(event.target)
      ) {
        setSidebarHotelsDropdownOpen(false);
      }
    }

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [dropdownRefs]);

    // store navbar remains open and hover
    const togglestoresDropdown = () => {
      setKeepstoresDropdownOpen(!keepstoresDropdownOpen);
      setstoresDropdownOpen(!keepstoresDropdownOpen);
    };
  
    const handlestoresMouseEnter = () => {
      if (!keepstoresDropdownOpen) {
        setstoresDropdownOpen(true);
      }
    };
  
    const handlestoresMouseLeave = () => {
      if (!keepstoresDropdownOpen) {
        setstoresDropdownOpen(false);
      }
    };
  
    // const handleLinkClick = () => {
    //   setstoresDropdownOpen(false);
    //   setRightNowDropdownOpen(false);
    // };

  // category navbar remains open and hover
  const togglecategoriesDropdown = () => {
    setKeepcategoriesDropdownOpen(!keepcategoriesDropdownOpen);
    setcategoriesDropdownOpen(!keepcategoriesDropdownOpen);
  };

  const handlecategoriesMouseEnter = () => {
    if (!keepcategoriesDropdownOpen) {
      setcategoriesDropdownOpen(true);
    }
  };

  const handlecategoriesMouseLeave = () => {
    if (!keepcategoriesDropdownOpen) {
      setcategoriesDropdownOpen(false);
    }
  };

  const handleLinkClick = () => {
    setstoresDropdownOpen(false);
    setcategoriesDropdownOpen(false);
    setRightNowDropdownOpen(false);
  };
  //  ***** //

  const toggleSidebarRightNowDropdown = () => {
    setSidebarRightNowDropdownOpen(!sidebarRightNowDropdownOpen);
    closeOtherDropdowns("sidebarRightNow");
  };

  const toggleSidebarClothingDropdown = () => {
    setSidebarClothingDropdownOpen(!sidebarClothingDropdownOpen);
    closeOtherDropdowns("sidebarClothing");
  };

  const toggleSidebarHealthDropdown = () => {
    setSidebarHealthDropdownOpen(!sidebarHealthDropdownOpen);
    closeOtherDropdowns("sidebarHealth");
  };

  const toggleSidebarGiftsDropdown = () => {
    setSidebarGiftsDropdownOpen(!sidebarGiftsDropdownOpen);
    closeOtherDropdowns("sidebarGifts");
  };

  const toggleSidebarWomenDropdown = () => {
    setSidebarWomenDropdownOpen(!sidebarWomenDropdownOpen);
    closeOtherDropdowns("sidebarWomen");
  };

  const toggleSidebarSportingGoodsDropdown = () => {
    setSidebarSportingGoodsDropdownOpen(!sidebarSportingGoodsDropdownOpen);
    closeOtherDropdowns("sidebarSportingGoods");
  };

  const toggleSidebarShoesDropdown = () => {
    setSidebarShoesDropdownOpen(!sidebarShoesDropdownOpen);
    closeOtherDropdowns("sidebarShoes");
  };

  const toggleSidebarBeautyDropdown = () => {
    setSidebarBeautyDropdownOpen(!sidebarBeautyDropdownOpen);
    closeOtherDropdowns("sidebarBeauty");
  };

  const toggleSidebarDepartmentStoresDropdown = () => {
    setSidebarDepartmentStoresDropdownOpen(
      !sidebarDepartmentStoresDropdownOpen
    );
    closeOtherDropdowns("sidebarDepartmentStores");
  };

  const toggleSidebarSoftwareDropdown = () => {
    setSidebarSoftwareDropdownOpen(!sidebarSoftwareDropdownOpen);
    closeOtherDropdowns("sidebarSoftware");
  };

  const toggleSidebarHotelsDropdown = () => {
    setSidebarHotelsDropdownOpen(!sidebarHotelsDropdownOpen);
    closeOtherDropdowns("sidebarHotels");
  };

  const closeOtherDropdowns = (currentDropdown) => {
    const dropdownStates = {
      // sidebarBrands: setSidebarBrandsDropdownOpen,
      // sidebarCategories: setSidebarCategoriesDropdownOpen,
      sidebarRightNow: setSidebarRightNowDropdownOpen,
      sidebarClothing: setSidebarClothingDropdownOpen,
      sidebarHealth: setSidebarHealthDropdownOpen,
      sidebarGifts: setSidebarGiftsDropdownOpen,
      sidebarWomen: setSidebarWomenDropdownOpen,
      sidebarSportingGoods: setSidebarSportingGoodsDropdownOpen,
      sidebarShoes: setSidebarShoesDropdownOpen,
      sidebarBeauty: setSidebarBeautyDropdownOpen,
      sidebarDepartmentStores: setSidebarDepartmentStoresDropdownOpen,
      sidebarSoftware: setSidebarSoftwareDropdownOpen,
      sidebarHotels: setSidebarHotelsDropdownOpen,
    };

    Object.keys(dropdownStates).forEach((dropdown) => {
      if (dropdown !== currentDropdown) {
        dropdownStates[dropdown](false);
      }
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMouseEnter = () => {
    if (!keepRightNowDropdownOpen) {
      setRightNowDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!keepRightNowDropdownOpen) {
      setRightNowDropdownOpen(false);
    }
  };

  const handleButtonClick = () => {
    setkeepRightNowDropdownOpen(!keepRightNowDropdownOpen);
    setRightNowDropdownOpen(!keepRightNowDropdownOpen);
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // khan-sab api
  const [categories, setCategories] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [selectedCoupons, setSelectedCoupons] = useState([]);
  const handleCategoryClick = (category) => {
    setSelectedCoupons(
      coupons.filter((e) => e.id == category).map((e) => e.coupons)
    );
  //  console.log(coupons);
  //  console.log(selectedCoupons);
    setSelectedCategory(category);
  };

  // khan-sab api
  const [stores, setStores] = useState([]);
  const [storecoupons, setStoreCoupons] = useState([]);
  const [selectedStoreCoupons, setSelectedStoreCoupons] = useState([]);
  const handleStoreClick = (store) => {
    setSelectedStoreCoupons(
      storecoupons.filter((e) => e.id == store).map((e) => e.coupons)
    );
   
    setSelectedStore(store);
  };
  const apiUrl = import.meta.env.VITE_API_URL;
  // khan-sab api
  useEffect(() => {
    const fetchCategories = async () => {
      let response = await axios.get(apiUrl + "api/coupons");
      // console.log(response)
      let categories = response.data.categories.map((category) => {
        return {
          name: category.name,
          id: category.id,
          icon: category.icon,
          coupons: category.coupons,
        };
      });
      
      let couponsList = response.data.categories.map((category) => {
        return { id: category.id, coupons: category.coupons };
      });
      setCoupons(couponsList);
      setCategories(categories);
     
    };
   
    fetchCategories();
    
  }, []);
  useEffect(() => {
    const fetchStores = async () => {
      let response = await axios.get(apiUrl + "api/coupons");
      // console.log(response)
     
      let stores = response.data.stores.map((store) => {
        return {
          name: store.name,
          id: store.id,
          icon: store.icon,
          coupons: store.coupons,
        };
      });
      
      
      let couponsListstore = response.data.stores.map((store) => {
        return { id: store.id, coupons: store.coupons };
      });
      
      setStoreCoupons(couponsListstore);
      setStores(stores);
    };
    
    fetchStores();

  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/">
              <button className="navbar-button">Welcome</button>
            </Link>
          </li>
          
          <li
            className="navbar-item dropdown"
            ref={dropdownRefs.stores}
            onMouseEnter={handlestoresMouseEnter}
            onMouseLeave={handlestoresMouseLeave}
          >
            <button className="navbar-button" onClick={togglestoresDropdown}>
            Stores
              {/* {categoriesDropdownOpen ? <FaAngleUp /> : <FaAngleDown />} */}
              {storesDropdownOpen ? (
                <FaAngleUp style={{ marginLeft: "3px" }} />
              ) : (
                <FaAngleDown style={{ marginLeft: "3px" }} />
              )}
            </button>
            <div
              className={`new-dropdown-content ${
                storesDropdownOpen ? "show" : ""
              }`}
            >
              <div className="first-section">
                <p>Popular Stores</p>
                {stores.map((store) => (
                  <button
                    key={store.name}
                    onClick={() => handleStoreClick(store.id)}
                    className={`category-button ${
                      selectedStore === store.id ? "active" : ""
                    }`}
                  >
                    {/* {iconMap[category.name]} */}
                    
                    {store.name} <FaAngleRight />
                  </button>
                ))}
                <Link to={"/store"} target={"_blank"} className="see-all-categories">
                  See all Stores
                </Link>
              </div>
              <div className="second-section">
                <>
                  {stores
                    .filter((e) => e.id == selectedStore)
                    .map((store) => {
                      return (
                        <>
                          <div className="d-flex justify-content-between align-items-baseline">
                            <p>
                              {selectedStore
                                ? `Top ${store.name} stores`
                                : "Select a store"}
                            </p>
                            <Link to={"/"} className="see-all-clothing-apparel">
                              See all {store.name}
                            </Link>
                          </div>
                          <div className="stores-list">
                            {selectedStoreCoupons[0].map((storecoupons) => {
                             
                              return (
                                <>
                                  <Link
                                     to={`/brand/${store.name}`}
                                    key={storecoupons.id}
                                    className="store-link"
                                    onClick={handleLinkClick}
                                  >
                                    <div className="store-image">
                                      <img
                                        src={apiUrl+`public/${storecoupons.banner}`}
                                      />
                                    </div>
                                    <span>{storecoupons.title}</span>
                                  </Link>
                                </>
                              );
                            })}
                          </div>
                        </>
                      );
                    })}
                </>
              </div>
            </div>
          </li>

          <li
            className="navbar-item dropdown"
            ref={dropdownRefs.categories}
            onMouseEnter={handlecategoriesMouseEnter}
            onMouseLeave={handlecategoriesMouseLeave}
          >
            <button className="navbar-button" onClick={togglecategoriesDropdown}>
            Categories
              {/* {categoriesDropdownOpen ? <FaAngleUp /> : <FaAngleDown />} */}
              {categoriesDropdownOpen ? (
                <FaAngleUp style={{ marginLeft: "3px" }} />
              ) : (
                <FaAngleDown style={{ marginLeft: "3px" }} />
              )}
            </button>
            <div
              className={`new-dropdown-content ${
                categoriesDropdownOpen ? "show" : ""
              }`}
            >
              <div className="first-section">
                <p>Popular Categories</p>
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryClick(category.id)}
                    className={`category-button ${
                      selectedCategory === category.id ? "active" : ""
                    }`}
                  >
                    {/* {iconMap[category.name]} */}
                    <i className={category.icon}></i>
                    {category.name} <FaAngleRight />
                  </button>
                ))}
                <Link to={"/category"} target={"_blank"} className="see-all-categories">
                  See all categories
                </Link>
              </div>
              <div className="second-section">
                <>
                  {categories
                    .filter((e) => e.id == selectedCategory)
                    .map((category) => {
                      return (
                        <>
                          <div className="d-flex justify-content-between align-items-baseline">
                            <p>
                              {selectedCategory
                                ? `Top ${category.name} categories`
                                : "Select a category"}
                            </p>
                            <Link to={"/"} className="see-all-clothing-apparel">
                              See all {category.name}
                            </Link>
                          </div>
                          <div className="stores-list">
                            {selectedCoupons[0].map((coupon) => {
                              return (
                                <>
                                  <Link
                                    to="/brand"
                                    key={coupon.id}
                                    className="store-link"
                                    onClick={handleLinkClick}
                                  >
                                    <div className="store-image">
                                      <img
                                        src={apiUrl+`public/${coupon.banner}`}
                                      />
                                    </div>
                                    <span>{coupon.title}</span>
                                  </Link>
                                </>
                              );
                            })}
                          </div>
                        </>
                      );
                    })}
                </>
              </div>
            </div>
          </li>

          <li className="navbar-item">
            <Link to="/">
              <button className="navbar-button">Blog</button>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/">
              <button className="navbar-button">Top 20</button>
            </Link>
          </li>

          {/* <li className="navbar-item dropdown" ref={dropdownRefs.rightNow}> */}
          <li
            className="navbar-item dropdown"
            ref={dropdownRefs.rightNow}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="navbar-button"
              style={{ backgroundColor: "white", color: "#0056b3" }}
              // onClick={toggleRightNowDropdown}
              onClick={handleButtonClick}
            >
              Right now {rightNowDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            <div
              className={`rightnow-dropdown-content ${
                rightNowDropdownOpen ? "show" : ""
              }`}
            >
              <ul className="dropdown-grid">
                <li>
                  <Link to={"/"} onClick={handleLinkClick}>
                    <div className="icon">
                      <FaMedal size={30} />
                    </div>
                    Olympic Games
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={handleLinkClick}>
                    <div className="icon">
                      <FaShoppingBag size={30} />
                    </div>
                    Tommy Hilfiger offers
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={handleLinkClick}>
                    <div className="icon">
                      <FaUmbrellaBeach size={30} />
                    </div>
                    Summer holidays
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="d-flex align-items-center mainSM">
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Amazon, Cdiscount, Nike..."
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>
          <IoMenu className="menu-icon" onClick={toggleSidebar} />
        </div>
      </div>

      {/* sidebar */}
      <div className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Link to="/" className="link">
              <button className="sidebar-button" onClick={closeSidebar}>
                <FaHome /> Welcome
              </button>
            </Link>
          </li>
          <li className="sidebar-item">
            <button className="sidebar-button" onClick={closeSidebar}>
              <FaBlog /> Blog
            </button>
          </li>
          <li className="sidebar-item">
            <button className="sidebar-button" onClick={closeSidebar}>
              <FaTrophy /> Top 20
            </button>
          </li>
          <li
            className="sidebar-item dropdown"
            ref={dropdownRefs.sidebarRightNow}
          >
            <button
              className="sidebar-button right-now"
              onClick={toggleSidebarRightNowDropdown}
            >
              <FaClock /> Right now <FaAngleDown />
            </button>
            <div
              className={`dropdown-content ${
                sidebarRightNowDropdownOpen ? "show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    {" "}
                    <FaMedal /> Olympic Games
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    <FaShoppingBag /> Tommy Hilfiger offers
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    <FaUmbrellaBeach /> Summer holidays
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <div className="stores-label">
            <FaStore /> Stores
          </div>

          <li
            className="sidebar-item dropdown"
            ref={dropdownRefs.sidebarClothing}
          >
            <button
              className="sidebar-button"
              onClick={toggleSidebarClothingDropdown}
            >
              <FaTshirt /> Clothing & Apparel <FaAngleDown />
            </button>
            <div
              className={`dropdown-content ${
                sidebarClothingDropdownOpen ? "show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    See all Clothing & Apparel
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Land's End
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    AMI Club Wear
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    ModCloth.com
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Gap.com
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Avenue
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Old Navy
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Old Navy
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Coach
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="sidebar-item dropdown"
            ref={dropdownRefs.sidebarHealth}
          >
            <button
              className="sidebar-button"
              onClick={toggleSidebarHealthDropdown}
            >
              <FaHeartbeat /> Health & Beauty <FaAngleDown />
            </button>
            <div
              className={`dropdown-content ${
                sidebarHealthDropdownOpen ? "show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    See all Health & Beauty
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    L'Occitane
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Olay
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Sephora
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Walgreens
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Puritan's Pride
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    StrawberryNET Cosmetics
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Benefit Cosmetics
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Modeloness
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-item dropdown" ref={dropdownRefs.sidebarGifts}>
            <button
              className="sidebar-button"
              onClick={toggleSidebarGiftsDropdown}
            >
              <FaGift /> Gifts <FaAngleDown />
            </button>
            <div
              className={`dropdown-content ${
                sidebarGiftsDropdownOpen ? "show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    See all Gifts
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Snapfish
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Yankee Candle
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    From You Flowers
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Shutterfly
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    FTD Flowers
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    1--800-FLOWERS
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Fine Stationery
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    ProFlowers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-item dropdown" ref={dropdownRefs.sidebarWomen}>
            <button
              className="sidebar-button"
              onClick={toggleSidebarWomenDropdown}
            >
              <FaFemale /> Women <FaAngleDown />
            </button>
            <div
              className={`dropdown-content ${
                sidebarWomenDropdownOpen ? "show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    See all Women
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    ProFlowers
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    bebe.com
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    J.Jill
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Allay
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Rosewe
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    The White Company
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Talbots
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    DIANE von FURSTENBERG
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="sidebar-item dropdown"
            ref={dropdownRefs.sidebarSportingGoods}
          >
            <button
              className="sidebar-button"
              onClick={toggleSidebarSportingGoodsDropdown}
            >
              <FaDumbbell /> Sporting Goods <FaAngleDown />
            </button>
            <div
              className={`dropdown-content ${
                sidebarSportingGoodsDropdownOpen ? "show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    See all Sporting Goods
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Puma
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Nike
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    SOCCER.COM
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Finish Line
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Yeti
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Wilson Sporting Goods
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    TaylorMade Golf
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Leatherman
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebar-item dropdown" ref={dropdownRefs.sidebarShoes}>
            <button
              className="sidebar-button"
              onClick={toggleSidebarShoesDropdown}
            >
              <FaShoePrints /> Shoes <FaAngleDown />
            </button>
            <div
              className={`dropdown-content ${
                sidebarShoesDropdownOpen ? "show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    See all Shoes
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Famous Footwear
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    ShoeDazzle
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    TOMS Shoes
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Brooks Running
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Foot Locker
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Coach Outlet
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Converse
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Skechers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="sidebar-item dropdown"
            ref={dropdownRefs.sidebarBeauty}
          >
            <button
              className="sidebar-button"
              onClick={toggleSidebarBeautyDropdown}
            >
              <FaPaintBrush /> Beauty & Cosmetics <FaAngleDown />
            </button>
            <div
              className={`dropdown-content ${
                sidebarBeautyDropdownOpen ? "show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    See all Beauty & Cosmetics
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Yves Rocher
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Nars Cosmetics
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    NYX Professional Makeup
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    MAC Cosmetics
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Tarte Cosmetics
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    UrbanDecay.com
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Motives Cosmetics
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="sidebar-item dropdown"
            ref={dropdownRefs.sidebarDepartmentStores}
          >
            <button
              className="sidebar-button"
              onClick={toggleSidebarDepartmentStoresDropdown}
            >
              <FaStore /> Department Stores <FaAngleDown />
            </button>
            <div
              className={`dropdown-content ${
                sidebarDepartmentStoresDropdownOpen ? "show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    See all Department Stores
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Target
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    JCPenney
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Amazon
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Macys.com
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Bloomingdale's
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Walmart
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Saks Fifth Avenue
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Kohl's
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="sidebar-item dropdown"
            ref={dropdownRefs.sidebarSoftware}
          >
            <button
              className="sidebar-button"
              onClick={toggleSidebarSoftwareDropdown}
            >
              <FaLaptop /> Software <FaAngleDown />
            </button>
            <div
              className={`dropdown-content ${
                sidebarSoftwareDropdownOpen ? "show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    See all Software
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Norton by Symantec
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    iolo technologies
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    TunnelBear
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    McAfee.com
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    1Password
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Wondershare
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    BitDefender
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Trend Micro Home & Home Office
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            className="sidebar-item dropdown"
            ref={dropdownRefs.sidebarHotels}
          >
            <button
              className="sidebar-button"
              onClick={toggleSidebarHotelsDropdown}
            >
              <FaHotel /> Hotels <FaAngleDown />
            </button>
            <div
              className={`dropdown-content ${
                sidebarHotelsDropdownOpen ? "show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    See all Hotels
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    InterContinental Hotels & Resorts
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Holiday Inn
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Holiday Inn Express
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    IHG Hotels & Resorts
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Crowne Plaza Hotels & Resorts
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Hotel Indigo
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Staybridge Suites
                  </Link>
                </li>
                <li>
                  <Link to={"/"} onClick={closeSidebar}>
                    Caesars Palace Las Vegas
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./Navbar.css";
import axios from "axios";
import { IoMenu } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelecctor/LanguageSelector";
import {
  FaHome,
  FaStore,
  FaList,
  FaShoppingCart,
  // FaBlog,
  // FaTrophy,
  // FaClock,
  // FaTshirt,
  // FaHeartbeat,
  // FaGift,
  // FaFemale,
  // FaDumbbell,
  // FaShoePrints,
  // FaPaintBrush,
  // FaLaptop,
  // FaHotel,
} from "react-icons/fa";

function Navbar({ logo }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoriesDropdownOpen, setcategoriesDropdownOpen] = useState(false);
  const [keepcategoriesDropdownOpen, setKeepcategoriesDropdownOpen] =
    useState(false);
  const [selectedStore, setSelectedStore] = useState(null); // Set default to null
  const [storesDropdownOpen, setstoresDropdownOpen] = useState(false);
  const [keepstoresDropdownOpen, setKeepstoresDropdownOpen] = useState(false);
  // const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  // const [rightNowDropdownOpen, setRightNowDropdownOpen] = useState(false);
  // const [keepRightNowDropdownOpen, setkeepRightNowDropdownOpen] =
  //   useState(false); // remains open when on right now dropdown 
  const { t } = useTranslation(); // Hook to get the translation function

  const dropdownRefs = {
    categories: useRef(null),
    stores: useRef(null),
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
    // setRightNowDropdownOpen(false);
  };
  //  ***** //

  // khan-sab api
  const [categories, setCategories] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [selectedCoupons, setSelectedCoupons] = useState([]);
  const handleCategoryClick = (category) => {
    setSelectedCoupons(
      coupons.filter((e) => e.id == category).map((e) => e.coupons)[0] || []
    );
    setSelectedCategory(category);
  };

  // khan-sab api
  const [stores, setStores] = useState([]);
  const [storecoupons, setStoreCoupons] = useState([]);
  const [selectedStoreCoupons, setSelectedStoreCoupons] = useState([]);
  const handleStoreClick = (storeId) => {
    setSelectedStore(storeId);

    const selectedCoupons =
      storecoupons.find((e) => e.id === storeId)?.coupons || [];

    setSelectedStoreCoupons(selectedCoupons);
  };

  const apiUrl = import.meta.env.VITE_API_URL;
  // khan-sab api
  useEffect(() => {
    const fetchCategories = async () => {
      let response = await axios.get(apiUrl + "api/coupons");
      let categories = response.data.categories.map((category) => {
        return {
          name: category.name,
          id: category.id,
          icon: category.icon,
          coupons: category.coupon_store,
          slug: category.slug,
        };
      });

      let couponsList = response.data.categories.map((category) => {
        return { id: category.id, coupons: category.coupon_store };
      });
      setCoupons(couponsList);
      setCategories(categories);

      // Set the first category as selected by default
      if (categories.length > 0) {
        setSelectedCategory(categories[0].id);
        setSelectedCoupons(
          couponsList.find((e) => e.id === categories[0].id)?.coupons || []
        );
      }
    };

    fetchCategories();
  }, []);
  useEffect(() => {
    const fetchStores = async () => {
      let response = await axios.get(apiUrl + "api/coupons");

      let stores = response.data.stores.map((store) => {
        return {
          name: store.name,
          id: store.id,
          icon: store.icon,
          coupons: store.coupons,
          banner: store.banner,
        };
      });

      let couponsListstore = response.data.stores.map((store) => {
        return { id: store.id, coupons: store.coupons, banner: store.banner };
      });

      setStoreCoupons(couponsListstore);
      setStores(stores);
      // Set the first store as selected by default
      if (stores.length > 0) {
        const firstStoreId = stores[0].id;
        setSelectedStore(firstStoreId);
        setSelectedStoreCoupons(
          couponsListstore.find((store) => store.id === firstStoreId)
            ?.coupons || []
        );
      }
    };

    fetchStores();
  }, []);

  // sidebar code
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  // const toggleNestedDropdown = (parentDropdown, nestedDropdown) => {
  //   setOpenDropdowns((prevState) => ({
  //     ...prevState,
  //     [`${parentDropdown}_${nestedDropdown}`]:
  //       !prevState[`${parentDropdown}_${nestedDropdown}`],
  //   }));
  // };

  const toggleNestedDropdown = (parentDropdown, nestedDropdown) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [`${parentDropdown}_${nestedDropdown}`]:
        !prevState[`${parentDropdown}_${nestedDropdown}`], // Toggle current nested dropdown only
    }));
  };

  const closeOtherDropdowns = (currentDropdown) => {
    setOpenDropdowns((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((dropdown) => {
        if (
          dropdown !== currentDropdown &&
          !dropdown.startsWith(currentDropdown)
        ) {
          newState[dropdown] = false;
        }
      });
      return newState;
    });
  };

  const openSidebar = () => {
    setSidebarOpen(true);
    // Close all dropdowns when opening the sidebar
    setOpenDropdowns({});
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  // ####### //

  const [categoryData, setCategoryData] = useState([]);
  const getCategoryData = (id) => {
    setCategoryData(
      coupons.filter((e) => e.id == id).map((e) => e.coupons)[0] || []
    );
  };

  const dropdownData = [
    {
      name: "Stores",
      icon: <FaStore />,
      items: [
        {
          name: "Software",
          products: ["Norton by Symantec", "iolo technologies", "TunnelBear"],
        },
        {
          name: "Hotels",
          products: [
            "InterContinental Hotels & Resorts",
            "Holiday Inn",
            "Holiday Inn Express",
          ],
        },
      ],
    },
    {
      name: "Categories",
      icon: <FaShoppingCart />,
      items: [
        {
          name: "Electronics",
          products: ["Laptops", "Mobile Phones", "Tablets"],
        },
        {
          name: "Clothing",
          products: ["Men's Clothing", "Women's Clothing", "Kid's Clothing"],
        },
      ],
    },
  ];
  // sidebar code end

  // searchbar
  const [searchQuery, setSearchQuery] = useState(""); // State to handle input
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // Update state with input value
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Check if the input is not empty
      // Navigate to the categorycoupon route with the search query parameter
      navigate(`/store?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Trigger search when the Enter key is pressed
      handleSearch();
    }
  };
  // searchbar

  return (
    <nav className="navbar">
      <div className="innerlogo-2">
        <Link href="" className="d-flex align-items-center atag">
          <img src={apiUrl + logo} alt="logo" />
        </Link>
      </div>
      <div className="container">
        <ul className="navbar-menu">
          <li className="navbar-item innerlogo-1">
            <Link href="" className="d-flex align-items-center atag">
              <img src={apiUrl + logo} alt="logo" />
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/">
              <button className="navbar-button">{t("nav_welcome")}</button>
            </Link>
          </li>

          <li
            className="navbar-item dropdown"
            ref={dropdownRefs.stores}
            onMouseEnter={handlestoresMouseEnter}
            onMouseLeave={handlestoresMouseLeave}
          >
            <button className="navbar-button" onClick={togglestoresDropdown}>
              {t("nav_store")}
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
                <p>{t("popular_store")}</p>

                {/* Conditionally render the loader or the list of stores */}
                {!stores || stores.length === 0 ? (
                  <Loader />
                ) : (
                  stores.map((store) => (
                    <button
                      key={store.id}
                      onClick={() => handleStoreClick(store.id)}
                      className={`category-button ${
                        selectedStore === store.id ? "active" : ""
                      }`}
                    >
                      {store.name} <FaAngleRight />
                    </button>
                  ))
                )}

                <Link
                  to={"/store"}
                  target={"_blank"}
                  className="see-all-categories"
                >
                  {t("see_all_store")}
                </Link>
              </div>

              <div className="second-section">
                {stores
                  .filter((e) => e.id === selectedStore)
                  .map((store) => (
                    <div key={store.id}>
                      <div className="d-flex justify-content-between align-items-baseline">
                        {/* <p>{`Top ${store.name} stores`}</p> */}
                        <p>{t("top_store", { storeName: store.name })}</p>
                        <Link
                          to={`/brand/${store.name}`}
                          target="_blank"
                          className="see-all-clothing-apparel"
                        >
                          {t("see_all")} {store.name}
                        </Link>
                      </div>

                      {selectedStoreCoupons.length === 0 ? (
                        <NotFound />
                      ) : (
                        <div className="stores-list">
                          {selectedStoreCoupons.map((storeCoupon) => (
                            <Link
                              to={`/brand/${store.name}`}
                              key={storeCoupon.id}
                              className="store-link"
                              onClick={handleLinkClick}
                            >
                              <div className="store-image">
                                <img
                                  src={apiUrl + `public/${store.banner}`}
                                  alt={store.name || "No Title Available"}
                                />
                              </div>
                              <span>
                                {storeCoupon.title || "No Title Available"}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </li>

          <li
            className="navbar-item dropdown"
            ref={dropdownRefs.categories}
            onMouseEnter={handlecategoriesMouseEnter}
            onMouseLeave={handlecategoriesMouseLeave}
          >
            <button
              className="navbar-button"
              onClick={togglecategoriesDropdown}
            >
              {t("nav_category")}
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
                <p>{t("popular_category")}</p>

                {/* Conditionally render the loader or the list of categories */}
                {!categories || categories.length === 0 ? (
                  <Loader />
                ) : (
                  categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => handleCategoryClick(category.id)}
                      className={`category-button ${
                        selectedCategory === category.id ? "active" : ""
                      }`}
                    >
                      <i className={category.icon}></i>
                      {category.name} <FaAngleRight />
                    </button>
                  ))
                )}

                <Link
                  to={"/category"}
                  target={"_blank"}
                  className="see-all-categories"
                >
                  {t("see_all_category")}
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
                            {/* <p>
                              {selectedCategory
                                ? `Top ${category.name} categories`
                                : "Select a category"}
                            </p> */}
                            <p>
                              {selectedCategory
                                ? t("top_category", {
                                    categoryName: category.name,
                                  })
                                : t("select_category")}
                            </p>
                            <Link
                              to={{
                                pathname: "/store", // base path for the CategoryCouponPage
                                search: `?category=${category.id}`, // constructing the query parameters
                              }}
                              target="_blank"
                              className="see-all-clothing-apparel"
                            >
                              {t("see_all")} {category.name}
                            </Link>
                          </div>

                          {!Array.isArray(selectedCoupons) ||
                          selectedCoupons.length === 0 ? (
                            <NotFound />
                          ) : (
                            <div className="stores-list">
                              {selectedCoupons.map((coupon) => {
                                return (
                                  <Link
                                    to={`/brand/${coupon.name}`}
                                    key={coupon.id}
                                    className="store-link"
                                    onClick={handleLinkClick}
                                  >
                                    <div className="store-image">
                                      <img
                                        src={apiUrl + `public/${coupon.banner}`}
                                        alt={
                                          coupon.name || "No Title Available"
                                        }
                                      />
                                    </div>
                                    <span>
                                      {coupon.name || "No Title Available"}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </>
                      );
                    })}
                </>
              </div>
            </div>
          </li>
        </ul>
        <div className="d-flex align-items-center mainSM">
          <div>
            <LanguageSelector/>          
            </div>
            
          <div className="navbar-search">
            <input
              type="text"
              value={searchQuery} // Controlled input
              onChange={handleInputChange} // Handle input change
              onKeyPress={handleKeyPress} // Handle Enter key press
              placeholder={t('search_for_store')}
              className="search-input"
            />
            <FaSearch className="search-icon" onClick={handleSearch} />{" "}
            {/* Handle click on search icon */}
          </div>
          {/* <IoMenu className="menu-icon" onClick={toggleSidebar} /> */}
          <button
            ref={menuButtonRef}
            onClick={() => {
              if (sidebarOpen) {
                closeSidebar();
              } else {
                openSidebar();
              }
            }}
            className="menu-button"
          >
            <IoMenu />
          </button>
        </div>
      </div>

      {/* sidebar */}
      <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? "show" : ""}`}>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <Link to="/">
              <button className="sidebar-button" onClick={closeSidebar}>
                <FaHome /> {t("nav_welcome")}
              </button>
            </Link>
          </li>

          {/* Store Dropdown */}
          <li className="sidebar-item dropdown">
            <button
              className="sidebar-button"
              onClick={() => {
                toggleDropdown("Stores");
                closeOtherDropdowns("Stores");
              }}
            >
              <i className="icon-store">
                {" "}
                <FaShoppingCart />{" "}
              </i>{" "}
              {t("nav_store")}{" "}
              <i className="icon-dropdownshaka">
                <FaAngleDown />
              </i>
            </button>
            <div
              className={`dropdown-content ${
                openDropdowns["Stores"] ? "show" : ""
              }`}
            >
              <ul>
                {stores.map((store) => (
                  <li key={store.id} className="sidebar-item dropdown">
                    <button
                      className="nested-sidebar-button"
                      onClick={() => {
                        toggleNestedDropdown("Stores", store.name);
                        handleStoreClick(store.id);
                      }}
                    >
                      <i className={store.icon}></i> {store.name}
                      <i className="icon-dropdownshaka">
                        <FaAngleDown />
                      </i>
                    </button>
                    <div
                      className={`dropdown-content ${
                        openDropdowns[`Stores_${store.name}`] ? "show" : ""
                      }`}
                    >
                      <ul>
                        <li>
                          <Link
                            to={`/brand/${store.name}`}
                            onClick={closeSidebar}
                            target="_blank"
                          >
                            {t("see_all")} {store.name}
                          </Link>
                        </li>
                        {selectedStoreCoupons.map((coupon) => (
                          <li key={coupon.id}>
                            <Link
                              to={`/brand/${store.name}`}
                              onClick={closeSidebar}
                            >
                              {coupon.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {/* Main Categories Dropdown */}
          <li className="sidebar-item dropdown">
            <button
              className="sidebar-button"
              onClick={() => {
                toggleDropdown("Categories");
                closeOtherDropdowns("Categories"); // Ensure it doesn't close nested dropdowns
              }}
            >
              <i className="icon-category">
                <FaList />
              </i>{" "}
              {t("nav_category")}{" "}
              <i className="icon-dropdownshaka">
                <FaAngleDown />
              </i>
            </button>
            <div
              className={`dropdown-content ${
                openDropdowns["Categories"] ? "show" : ""
              }`}
            >
              <ul>
                {categories.map((category) => (
                  <li key={category.id} className="sidebar-item dropdown">
                    <button
                      className="nested-sidebar-button"
                      onClick={() => {
                        toggleNestedDropdown("Categories", category.name);
                        // Do not close nested dropdowns, only toggle on click
                        handleCategoryClick(category.id);
                        getCategoryData(category.id);
                      }}
                    >
                      <i className={category.icon}></i> {category.name}{" "}
                      <i className="icon-dropdownshaka">
                        <FaAngleDown />
                      </i>
                    </button>
                    <div
                      className={`dropdown-content ${
                        openDropdowns[`Categories_${category.name}`]
                          ? "show"
                          : ""
                      }`}
                    >
                      <ul>
                        <li>
                          <Link
                            // to={`/categorycoupon/${category.name}`}
                            to={{
                              pathname: "/store", // base path for the CategoryCouponPage
                              search: `?category=${category.id}`, // constructing the query parameters
                            }}
                            onClick={closeSidebar}
                            target="_blank"
                          >
                            {t("see_all")} {category.name}
                          </Link>
                        </li>
                        {categoryData.map((coupon) => (
                          <li key={coupon.id}>
                            <Link
                              // to={{
                              //   pathname: "/categorycoupon", // base path for the CategoryCouponPage
                              //   search: `?category=${category.name}`, // constructing the query parameters
                              // }}
                              to={`/brand/${coupon.name}`}
                              onClick={closeSidebar}
                            >
                              {coupon.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      {/* sidebar-end */}
    </nav>
  );
}

export default Navbar;

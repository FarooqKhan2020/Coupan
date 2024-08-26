import React from "react";
import BrandInfo from "./BrandInfo";
import ContainerList from "./ContainerList";
import CouponType from "./CouponType";
import "./styles.css";

const RightSection = ({
  selectedType,
  handleRadioChange,
  containerTest,
  containers,
  storeName,
  bannerImage,
  storecoupons,
  popupModal,
  simlarcoupons,
}) => {
  // console.log(containerTest, "containerTest");
  const countContainers = (type) => {
    return containerTest.filter((container) => container.highlight == type).length;
  };
  return (
    <section className="right-section">
      <CouponType
        selectedType={selectedType}
        handleRadioChange={handleRadioChange}
        counts={{
          all: containerTest.length,
          featured: countContainers(1),
          verified: countContainers(2),
          exclusive: countContainers(3),
        }}
      />
      <BrandInfo storeName={storeName} bannerImage={bannerImage} />
      <ContainerList
        containers={containers}
        storeName={storeName}
        storecoupons={storecoupons}
        bannerImage={bannerImage}
        popupModal={popupModal}
        simlarcoupons={simlarcoupons}
      />
    </section>
  );
};

export default RightSection;

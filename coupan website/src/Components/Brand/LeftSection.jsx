import React from "react";
import "./styles.css";
import LogoCard from "./asideLogoCard";
import CouponType from "./CouponType";
import TextComponent from "./TextComponent";
import SingleCardComponent from "./SingleCardComponent";
import SecondCardComponent from "./SecondCardComponent";
import SimilarStores from "./SimilarStores";

const LeftSection = ({
  storepageBannerOne,
  storepageBannerTwo,
  selectedType,
  handleRadioChange,
  containers,
  bannerImage,
  totalReviews,
  averageRating,
  storeName,
  storedescription,
  featureStoreNames,
}) => {
  const countContainers = (type) => {
    return containers.filter((container) => container.highlight == type).length;
  };

  const sampleCard = {
    // icon: <FaStar />,
    label: "Current offer",
    // logo: samsungLogo,
    title: "€10",
    description:
      "SUMMER SALES 2024: Get €10 off by applying this Samsung promo code",
    button: "View code",
    url: "#",
  };

  return (
    <aside className="left-section">
      <LogoCard
        logo={bannerImage}
        totalReviews={totalReviews}
        averageRating={averageRating}
      />
      {/* <CouponType
        selectedType={selectedType}
        handleRadioChange={handleRadioChange}
        counts={{
          all: containers.length,
          featured: countContainers(1),
          verified: countContainers(2),
          exclusive: countContainers(3),
        }}
      /> */}
      <TextComponent
        storeName={storeName}
        storedescription={storedescription}
      />
      <SingleCardComponent
        card={sampleCard}
        storepageBannerTwo={storepageBannerTwo}
      />
      <SecondCardComponent storepageBannerOne={storepageBannerOne} />
      <SimilarStores featureStoreNames={featureStoreNames} />
    </aside>
  );
};

export default LeftSection;

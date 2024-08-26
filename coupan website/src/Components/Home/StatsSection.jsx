import React from 'react';
import './StatsSection.css'; // Import the CSS file
import { FaTag, FaPiggyBank, FaClipboardCheck } from 'react-icons/fa';

// Mapping the API icon class to actual icons (example mapping)
const iconMapping = {
  "fab fa-500px": FaTag, // Example: replace with actual mapping
  "fab fa-piggy-bank": FaPiggyBank,
  "fab fa-clipboard-check": FaClipboardCheck,
};

const StatCard = ({ icon, title, text }) => {
  // Use the iconMapping to get the corresponding icon component
  const IconComponent = iconMapping[icon] || FaTag; // Default to FaTag if icon is not found

  return (
    <div className="stat-card">
      <i className={icon} /><i/>
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
    </div>
  );
};

const StatsSection = ({ data }) => {


  return (
    <div className="stats-section">
      {data.map((item) => (
        <StatCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          text={item.description}
        />
      ))}
    </div>
  );
};

export default StatsSection;

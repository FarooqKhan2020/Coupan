import React from 'react';
import { FaTag, FaPiggyBank, FaClipboardCheck } from 'react-icons/fa';
import './StatsSection.css'; // Import the CSS file

const StatCard = ({ Icon, title, text }) => {
  return (
    <div className="stat-card">
      <Icon className="icon" />
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="stats-section">
      <StatCard 
        Icon={FaTag} 
        title="100 million" 
        text="More than 100 million vouchers have already been redeemed."
      />
      <StatCard 
        Icon={FaPiggyBank} 
        title="180 million" 
        text="Our users have saved more than 180 million euros."
      />
      <StatCard 
        Icon={FaClipboardCheck} 
        title="45,000 vouchers" 
        text="Every month, over 45,000 new vouchers are tested by hand."
      />
    </div>
  );
};

export default StatsSection;

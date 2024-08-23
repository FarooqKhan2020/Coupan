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
        title="100 Mio." 
        text="Mehr als 100 Millionen Gutscheine wurden bereits eingelöst."
      />
      <StatCard 
        Icon={FaPiggyBank} 
        title="180 Mio." 
        text="Unsere User haben mehr als 180 Millionen Euro gespart."
      />
      <StatCard 
        Icon={FaClipboardCheck} 
        title="45.000 Gutscheine" 
        text="Jeden Monat werden über 45.000 neue Gutscheine von Hand getestet."
      />
    </div>
  );
};

export default StatsSection;

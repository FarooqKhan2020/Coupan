import React from 'react';
import './SingleCardComponent.css'; // You can reuse the styles from CardComponent

const SingleCardComponent = ({ card }) => {
  return (
    <div className="card_bdy">
      <div className="card-icon">{card.icon}</div>
      <div className="card_lbl">{card.label}</div>
      <a href={card.url} rel="noopener noreferrer">
        <img src={card.logo} alt="logo" className="card-logoImg" />
      </a>
      <div className="card-title">{card.title}</div>
      <div className="card_descript">{card.description}</div>
      <button className="card-button cd_bt">
        <a href={card.url} rel="noopener noreferrer">
          {card.button}
        </a>
      </button>
    </div>
  );
};

export default SingleCardComponent;

import React, { useState } from 'react';
import './FAQComponent.css';
import { useTranslation } from 'react-i18next';

const FAQComponent = ({faqs}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation(); // Hook to get the translation function
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // Return nothing if 'faqs' is empty or null
  if (!faqs || faqs.length === 0) {
    return ; // Or you can return a message like <p>No FAQs available.</p>
  }
  return (
    <div className="main-faq">
    <div className="faq-container">
      <h2>{t('faq')}</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQComponent;

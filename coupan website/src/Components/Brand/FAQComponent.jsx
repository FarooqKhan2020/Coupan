import React, { useState } from 'react';
import './FAQComponent.css';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How to get an H&M promo code?",
      answer: "Don't search for hours, the best H&M promo codes are on this page. Get an H&M promo code that gives you a discount on your favorite items, or even delivery with no minimum order. All the best H&M promo codes valid in July 2024 are here!"
    },
    {
      question: "What will be the dates of H&M Black Friday?",
      answer: "H&M Black Friday dates will be announced soon. Stay tuned for updates."
    },
    {
      question: "How to use an H&M promo code?",
      answer: "To use an H&M promo code, simply enter the code at checkout on the H&M website or app."
    },
    {
      question: "Can I combine several H&M promo codes?",
      answer: "Generally, H&M does not allow combining multiple promo codes. Please check the terms and conditions of each promo code."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="main-faq">
    <div className="faq-container">
      <h2>H&M FAQ</h2>
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

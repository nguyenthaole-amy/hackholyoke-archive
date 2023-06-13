import React, { useState } from "react";
import "./FaqContent.css";

export default function FaqContent({ question, answer, signUp, answer2, clickHere, answer3, answer4, mentors, volunteers, judges, clickMe }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-container">
      <div className="faq-question" onClick={toggleFaq}>
        <h6><strong className="faq-question-font-size">{question}</strong></h6>
        <i className={isOpen ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
      </div>
      <div className={isOpen ? 'faq-open' : 'faq-close'}>
        <p className="faq-open-text">{answer} <a className="faq-open-text" href={mentors} target="_blank" rel="noopener noreferrer">{signUp}</a> {answer2} <a className="faq-open-text" href={volunteers} target="_blank" rel="noopener noreferrer"><s  className="faq-open-text">{clickHere}</s></a> {answer3}</p>
      </div>

    </div>
  );
}

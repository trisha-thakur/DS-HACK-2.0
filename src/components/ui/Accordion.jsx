import React, { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`max-w-3xl ml-8 collapse collapse-arrow bg-secondary text-white ${isOpen ? "open" : ""}`}>
      <input
        type="radio"
        name="my-accordion-2"
        checked={isOpen}
        onChange={toggleAccordion}
      />
      <div className="collapse-title text-xl font-medium" onClick={toggleAccordion}>
        {question}
      </div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Accordion;

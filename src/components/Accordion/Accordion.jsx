import PropTypes from "prop-types";
import { useState } from "react";
import { classNames } from "../../utils/classNames";

const Accordion = ({ title, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("border border-gray-300 rounded-lg overflow-hidden", className)}>
      <button 
        className="w-full text-left px-4 py-2 bg-gray-100 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="p-4 bg-white">{children}</div>}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  className: "",
};

export default Accordion;

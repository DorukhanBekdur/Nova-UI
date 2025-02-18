import PropTypes from "prop-types";
import { useState } from "react";
import { classNames } from "../../utils/classNames";

const Tabs = ({ tabs, defaultIndex = 0, className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className={classNames("w-full", className)}>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={classNames(
              "py-2 px-4 text-gray-600 focus:outline-none",
              activeIndex === index
                ? "border-b-2 border-blue-500 text-blue-600 font-semibold"
                : "hover:text-gray-800"
            )}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeIndex].content}</div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultIndex: PropTypes.number,
  className: PropTypes.string,
};

export default Tabs;

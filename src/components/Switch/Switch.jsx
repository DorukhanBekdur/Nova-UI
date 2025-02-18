import PropTypes from "prop-types";
import { useState } from "react";
import { classNames } from "../../utils/classNames";

const Switch = ({ checked, onChange, size = "md", className = "" }) => {
  const [isOn, setIsOn] = useState(checked);

  const sizes = {
    sm: "w-8 h-4",
    md: "w-10 h-5",
    lg: "w-12 h-6",
  };

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onChange) onChange(!isOn);
  };

  return (
    <div
      className={classNames(
        "relative inline-flex items-center cursor-pointer rounded-full transition",
        isOn ? "bg-blue-500" : "bg-gray-300",
        sizes[size],
        className
      )}
      onClick={handleToggle}
    >
      <div
        className={classNames(
          "absolute bg-white rounded-full shadow transition-transform",
          isOn ? "translate-x-full" : "translate-x-0",
          size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "w-6 h-6"
        )}
      />
    </div>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

Switch.defaultProps = {
  checked: false,
  size: "md",
  className: "",
};

export default Switch;

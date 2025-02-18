import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Input = ({ label, type = "text", size = "md", className = "", ...props }) => {
  const baseStyles = "border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
  
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input 
        type={type} 
        className={classNames(baseStyles, sizes[size], className)} 
        {...props} 
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  size: "md",
  className: "",
};

export default Input;

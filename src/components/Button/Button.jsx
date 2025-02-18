import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
  const baseStyles = "font-semibold rounded-lg transition focus:outline-none focus:ring-2";
  
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button 
      className={classNames(baseStyles, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  className: "",
};

export default Button;

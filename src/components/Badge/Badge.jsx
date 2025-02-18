import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Badge = ({ children, variant = "info", className = "" }) => {
  const variants = {
    info: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  return (
    <span className={classNames("px-3 py-1 rounded-full text-sm font-semibold", variants[variant], className)}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["info", "success", "warning", "danger"]),
  className: PropTypes.string,
};

Badge.defaultProps = {
  variant: "info",
  className: "",
};

export default Badge;

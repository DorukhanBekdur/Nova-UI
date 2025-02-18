import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Alert = ({ type = "info", children, className = "" }) => {
  const alertStyles = {
    info: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  return (
    <div className={classNames("p-3 rounded-lg", alertStyles[type], className)}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["info", "success", "warning", "danger"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Alert.defaultProps = {
  type: "info",
  className: "",
};

export default Alert;

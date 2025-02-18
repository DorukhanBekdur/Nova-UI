import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { classNames } from "../../utils/classNames";

const Toast = ({ message, type = "info", duration = 3000, onClose, className = "" }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const toastStyles = {
    info: "bg-blue-100 text-blue-700 border-blue-500",
    success: "bg-green-100 text-green-700 border-green-500",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
    danger: "bg-red-100 text-red-700 border-red-500",
  };

  return (
    <div
      className={classNames(
        "fixed top-5 right-5 px-4 py-2 border-l-4 shadow-lg rounded-md",
        toastStyles[type],
        className
      )}
    >
      {message}
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["info", "success", "warning", "danger"]),
  duration: PropTypes.number,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default Toast;

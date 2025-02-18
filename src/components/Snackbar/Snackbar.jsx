import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { classNames } from "../../utils/classNames";

const Snackbar = ({ message, type = "info", duration = 3000, onClose, className = "" }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const styles = {
    info: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <div className={classNames(
      "fixed bottom-5 right-5 px-4 py-2 rounded-lg shadow-lg",
      styles[type],
      className
    )}>
      {message}
    </div>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["info", "success", "warning", "danger"]),
  duration: PropTypes.number,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default Snackbar;

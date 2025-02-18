import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children, className = "" }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className={classNames("bg-white p-6 rounded-lg shadow-lg max-w-md w-full", className)}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">✖</button>
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Modal.defaultProps = {
  title: "",
  className: "",
};

export default Modal;

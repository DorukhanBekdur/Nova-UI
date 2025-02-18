import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Drawer = ({ isOpen, onClose, position = "right", children, className = "" }) => {
  if (!isOpen) return null;

  const positions = {
    left: "left-0",
    right: "right-0",
  };

  return (
    <div className="fixed inset-0 flex">
      <div className="flex-1 bg-black opacity-50" onClick={onClose}></div>
      <div
        className={classNames(
          "fixed top-0 h-full w-64 bg-white shadow-lg p-4 transition-transform",
          positions[position],
          className
        )}
      >
        {children}
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.oneOf(["left", "right"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Drawer.defaultProps = {
  position: "right",
  className: "",
};

export default Drawer;

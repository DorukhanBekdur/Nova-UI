import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Sidebar = ({ isOpen, onClose, children, className = "" }) => {
  return (
    <div className={classNames(
      "fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform",
      isOpen ? "translate-x-0" : "-translate-x-full",
      className
    )}>
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
        ✖
      </button>
      <div className="p-4">{children}</div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  className: "",
};

export default Sidebar;

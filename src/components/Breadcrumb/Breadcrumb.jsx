import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Breadcrumb = ({ items, className = "" }) => {
  return (
    <nav className={classNames("flex space-x-2 text-gray-600", className)}>
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <a href={item.href} className="hover:text-blue-500">{item.label}</a>
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Breadcrumb;

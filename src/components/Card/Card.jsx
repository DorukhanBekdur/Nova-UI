import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Card = ({ title, children, className = "" }) => {
  return (
    <div className={classNames("bg-white shadow-md rounded-lg p-4", className)}>
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: "",
};

export default Card;

import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Avatar = ({ src, alt, size = "md", className = "" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={classNames("rounded-full object-cover", sizes[size], className)}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
};

Avatar.defaultProps = {
  alt: "User Avatar",
  size: "md",
  className: "",
};

export default Avatar;

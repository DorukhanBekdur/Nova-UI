import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Textarea = ({ label, value, onChange, placeholder, rows = 4, className = "" }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={classNames(
          "border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none",
          className
        )}
      />
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  className: PropTypes.string,
};

Textarea.defaultProps = {
  label: "",
  placeholder: "Type here...",
  rows: 4,
  className: "",
};

export default Textarea;

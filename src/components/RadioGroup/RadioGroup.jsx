import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const RadioGroup = ({ label, options, selectedValue, onChange, className = "" }) => {
  return (
    <div className={classNames("flex flex-col gap-2", className)}>
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="form-radio text-blue-500"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

RadioGroup.defaultProps = {
  label: "",
  className: "",
};

export default RadioGroup;

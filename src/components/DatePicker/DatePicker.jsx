import PropTypes from "prop-types";
import { useState } from "react";
import { classNames } from "../../utils/classNames";

const DatePicker = ({ value, onChange, className = "" }) => {
  const [selectedDate, setSelectedDate] = useState(value || "");

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
    if (onChange) onChange(event.target.value);
  };

  return (
    <input
      type="date"
      value={selectedDate}
      onChange={handleChange}
      className={classNames(
        "border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
    />
  );
};

DatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

DatePicker.defaultProps = {
  value: "",
  className: "",
};

export default DatePicker;

import PropTypes from "prop-types";
import { classNames } from "../../utils/classNames";

const Stepper = ({ steps, activeStep, className = "" }) => {
  return (
    <div className={classNames("flex items-center space-x-4", className)}>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={classNames(
              "w-8 h-8 flex items-center justify-center rounded-full border-2",
              index <= activeStep ? "bg-blue-500 text-white border-blue-500" : "border-gray-300 text-gray-500"
            )}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className="w-8 h-1 bg-gray-300 mx-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeStep: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Stepper;

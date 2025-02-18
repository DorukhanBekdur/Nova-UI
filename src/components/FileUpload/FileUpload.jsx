import PropTypes from "prop-types";
import { useState } from "react";
import { classNames } from "../../utils/classNames";

const FileUpload = ({ label, onFileSelect, className = "" }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        type="file"
        onChange={handleFileChange}
        className={classNames("border border-gray-300 rounded-lg px-3 py-2", className)}
      />
      {fileName && <p className="text-sm text-gray-600">Selected File: {fileName}</p>}
    </div>
  );
};

FileUpload.propTypes = {
  label: PropTypes.string,
  onFileSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FileUpload.defaultProps = {
  label: "",
  className: "",
};

export default FileUpload;

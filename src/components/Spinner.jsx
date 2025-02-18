const Spinner = ({ size = "md", className = "" }) => {
    const sizes = {
      sm: "w-4 h-4 border-2",
      md: "w-6 h-6 border-4",
      lg: "w-10 h-10 border-4",
    };
  
    return (
      <div className={`border-gray-300 border-t-blue-500 animate-spin rounded-full ${sizes[size]} ${className}`} />
    );
  };
  
  export default Spinner;
  
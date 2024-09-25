import React from "react";
import PropTypes from "prop-types"; // Thêm PropTypes
import "../../styles/main.scss";

const CustomBox = ({ height, width , title }) => {
  return (
    <div className="customBox" style={{ height, width }}>
      {title}
    </div>
  );
};


CustomBox.propTypes = {
  height: PropTypes.string, // Prop 'height' to string value
  width: PropTypes.string,  
  title: PropTypes.string,
};

CustomBox.defaultProps = {
  height: "40px", // setting default height
  width: "150px", // 
  title: "title",//
};

export default CustomBox;

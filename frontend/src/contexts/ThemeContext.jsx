import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

// Tạo context
export const ThemeContext = createContext();

// Provider để bọc toàn bộ ứng dụng
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false); // false có thể là theme sáng, true là theme tối

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired, // Đảm bảo children là React node và bắt buộc
};

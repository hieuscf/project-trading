import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const Logo = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <div className="logo">
      <Link to="/">
        {(theme)? (
          <>
            <img src="/images/black-full-logo.png" alt="Full Logo" />
          </>
        ) : (
          <>
            <img src="/images/white-full-logo.png" alt="Full Logo" />
          </>
        )}
      </Link>
    </div>
  );
};

export default Logo;

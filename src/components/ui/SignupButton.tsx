import React from "react";
import { Link } from "react-router-dom";

const SignupButton = () => {
  return (
    <Link
      to="/signup"
      className="button"
      style={{ "--clr": "#7808d0" } as React.CSSProperties}
    >
      <span className="button__icon-wrapper">
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon-svg"
          width="10"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>

        <svg
          viewBox="0 0 14 15"
          fill="none"
          width="10"
          xmlns="http://www.w3.org/2000/svg"
          className="button__icon-svg button__icon-svg--copy"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      Signup
    </Link>
  );
};

export default SignupButton;

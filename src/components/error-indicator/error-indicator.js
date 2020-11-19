import React from "react";
import "./error-indicator.scss";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div className="error-indicator-bg">ERROR</div>
      <p>Oops</p>
      <p>something has terribly wrong</p>
      <p>but we already fix them right now</p>
    </div>
  );
};
export default ErrorIndicator;

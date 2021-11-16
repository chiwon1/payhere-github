import React from "react";
import Loader from "react-loader-spinner";

function LoadingSpinner() {
  return <Loader type="Rings" color="#00BFFF" height={100} width={100} timeout={3000} />;
}

export default LoadingSpinner;

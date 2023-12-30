import React from "react";

const Container = ({ children, className }) => {
  return <div className={`px-1 lg:px-24 ${className}`}>{children}</div>;
};

export default Container;

import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = ({
  variant = "primary",
  onClick = () => null,
  text = "Click me",
  className = "",
}) => {
  return (
    <Button variant={variant} onClick={onClick} className={className}>
      {text}
    </Button>
  );
};

export default ButtonComponent;

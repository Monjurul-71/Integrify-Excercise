import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useHistory } from "react-router-dom";
import ButtonComponent from "../components/Button";

const NotFound = () => {
  const history = useHistory();
  const onClick = () => history.push("/");
  return (
    <Container className="m-5 text-center">
      <h1>Not Found</h1>
      <ButtonComponent variant={"primary"} onClick={onClick} text="Home Page" />
    </Container>
  );
};

export default NotFound;

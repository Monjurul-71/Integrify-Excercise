import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Avatar from "react-avatar";
import { useParams, useHistory } from "react-router-dom";
import ButtonComponent from "../components/Button";

const Details = () => {
  const { id } = useParams();
  const history = useHistory();
  const onClick = () => history.push("/");
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const responseJson = await response.json();
      setUser(responseJson);
    };
    fetchUser();
  }, [id]);
  return (
    <Row>
      <Col md={2} className="text-center">
        <Avatar name={user?.name} round></Avatar>
        <p className="mt-2">
          <small className="text-muted">@{user?.username}</small>
        </p>
      </Col>
      <Col md={8} className="border-start border-primary">
        <h3 className="text-center">Details</h3>
        <Container>
          <p>- Name: {user?.name}</p>
          <p>- UserName: {user?.username}</p>
          <p>- Email: {user?.email}</p>
          <p>- Phone: {user?.phone}</p>
          <p>- Company: {user?.company?.name}</p>
          <p>- Website: {user?.website}</p>
          <p>- Address:</p>
          <ul>
            <li>Street: {user?.address?.street}</li>
            <li>Suite: {user?.address?.suite}</li>
            <li>City: {user?.address?.city}</li>
            <li>Zip Code: {user?.address?.zipcode}</li>
          </ul>
          <ButtonComponent
            className="mt-3"
            variant={"primary"}
            onClick={onClick}
            text="Back to home Page"
          />
        </Container>
      </Col>
    </Row>
  );
};

export default Details;

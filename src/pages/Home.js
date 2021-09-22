import React from "react";
import UserCard from "../components/UserCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const responseJson = await response.json();
      setUsers(responseJson);
    };
    fetchUsers();
  }, []);
  return (
    <Row>
      {users.map((user) => {
        return (
          <Col md={3} key={user.id}>
            <UserCard user={user} />
          </Col>
        );
      })}
    </Row>
  );
};

export default Home;

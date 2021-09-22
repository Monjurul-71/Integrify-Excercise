import React from "react";
import Card from "react-bootstrap/Card";
import Avatar from "react-avatar";
import { useHistory } from "react-router-dom";
import ButtonComponent from "./Button";

const UserCard = ({ user }) => {
  const history = useHistory();
  const { name, username, website, id } = user;
  const onClick = () => history.push(`/users/${id}`);
  return (
    <Card className="text-center m-2">
      <Card.Body>
        <Avatar name={name} maxInitials={2} round={true} />
        <Card.Title className="mt-2">{name}</Card.Title>
        <small className="text-muted">@{username}</small>
        <Card.Text>
          <a
            href={`http://${website}`}
            className="link-primary"
          >{`http://${website}`}</a>
        </Card.Text>
        <ButtonComponent variant="info" text="More details" onClick={onClick} />
      </Card.Body>
    </Card>
  );
};

export default UserCard;

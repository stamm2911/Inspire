import React, { useContext } from "react";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";
import MyPopup from "../util/MyPopup";
import "../pages/styles.css";

function PostCard({
  post: { description, createdAt, id, username, likeCount, comments, likes },
}) {
  const { user } = useContext(AuthContext);

  console.log(comments);

  return (
    <div className="card-container">
      {/* <div className="card-body"> */}
      {/* <img 
        className="card-image"
        size="mini"
        alt=""
        src="https://react.semantic-ui.com/images/avatar/large/molly.png"
      /> */}
      <h3 className="card-description">{description}</h3>
    </div>

    // <Card.Content>
    //   <Image
    //     floated="right"
    //     size="mini"
    //     src="https://react.semantic-ui.com/images/avatar/large/molly.png"
    //   />
    //   <Card.Header>{username}</Card.Header>
    //   <Card.Meta as={Link} to={`/posts/${id}`}>
    //     {moment(createdAt).fromNow(true)}
    //   </Card.Meta>
    //   <Card.Description>{description}</Card.Description>
    // </Card.Content>
    // <Card.Content extra>
    //   <LikeButton user={user} post={{ id, likes, likeCount }} />
    //   <MyPopup content="Comment on post">
    //     <Button labelPosition="right" as={Link} to={`/posts/${id}`}>
    //       <Button color="blue" basic>
    //         <Icon name="comments" />
    //       </Button>
    //       {comments.map((comment) => (
    //         <Label basic color="white" pointing="left">
    //           {comment.text}
    //         </Label>
    //       ))}
    //     </Button>
    //   </MyPopup>
    //   {user && user.username === username && <DeleteButton postId={id} />}
    // </Card.Content>
  );
}

export default PostCard;

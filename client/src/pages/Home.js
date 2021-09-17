import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Transition } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../util/graphql";
import "./styles.css";

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  console.log(data);
  const posts = data?.posts || [];
  return (
    <div className="container">
      <div>
        <div>
          <PostForm />
          <div className="page-title">
            <h3>Recent Posts:</h3>
          </div>
        </div>
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          <Transition.Group>
            {posts &&
              posts.map((post) => (
                <div key={post._id} style={{ marginBottom: 20 }}>
                  <PostCard key={post._id} post={post} />
                </div>
              ))}
          </Transition.Group>
        )}
      </div>
    </div>
  );
}

export default Home;

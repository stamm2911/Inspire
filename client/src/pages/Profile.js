import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";

import { AuthProvider, AuthContext } from "../context/auth";
import { FETCH_PROFILE } from "../util/graphql";

function Profile() {
  const user = useContext(AuthContext);
  console.log(user);

  const { loading, data } = useQuery(FETCH_PROFILE, {
    fetchPolicy: "no-cache",
    variables: { profileId: "611d9b1356511a2db8a5b11f" },
  });
  console.log(data);
  const profile = data?.profile || [];

  return (
    <div className="row">
      {/* <h2 className="header">Profile</h2> */}
      <div className="col s6 offset-s3 container card-panel grey lighten-5 z-depth-1">
        <div className="row">
          <div className="col s3" style={{ marginTop: "30px" }}>
            <img
              src="http://www.american.edu/uploads/profiles/large/chris_palmer_profile_11.jpg"
              alt=""
              className="circle responsive-img"
            />
          </div>
          <div className=" col s7 card-stacked" style={{ marginTop: "60px" }}>
            <div className="card-content">
            <h1>Eduardo</h1>
            <p>ed@email.com</p>
              {/* {posts &&
              posts.map((post) => (
                <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                  <PostCard post={post} />
                </Grid.Column>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

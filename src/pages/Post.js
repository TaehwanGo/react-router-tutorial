import React from 'react';

const Post = ({ match }) => {
  console.log('Post match:', match);
  return <div>포스트 {match.params.id}</div>;
};

export default Post;

import React from 'react';
// import { withRouter } from 'react-router';
import { useLocation } from 'react-router-dom';

// const ShowPageInfo = withRouter(({ match, location }) => {
//   // HOC는 색이 다르게 표시되네(vscode에서)
//   return <div>현재 위치 : {location.pathname}</div>;
// });

const ShowPageInfo = () => {
  const location = useLocation();
  return <div>현재 위치 : {location.pathname}</div>;
};

export default ShowPageInfo;

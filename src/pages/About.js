import React from 'react';
// import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const About = ({ match, location }) => {
  // const params = useParams() 를 쓰는게 더 낫지만 옛날 방식대로 해봄
  // const locationHook = useLocation();
  // console.log(location.search); // /about/:name?detail=true 로 접속하면 ?detail=true가 나옴
  // console.log(locationHook.pathname); // /about/:name?detail=true로 접속하면 /about/tony가 나옴
  // console.log(locationHook.search); // /about/:name?detail=true 로 접속하면 ?detail=true가 나옴
  const query = queryString.parse(location.search);
  // console.log(query);
  const detail = query.detail === 'true'; // URL 쿼리에 true 나 숫자일지라도 받아오는 값은 모두 문자열이다.
  return (
    <div>
      <h2>About {match.params.name}</h2>
      {detail && 'detail: true'}
    </div>
  );
};

export default About;

# 리액트 라우터와 서버사이드 렌더링

- key words

  - 리액트 라우터
  - 웹팩 설정
  - code splitting : 프로젝트 코드를 빌드 할 때 여러파일로 저장

- contents
  - 리액트 라우터 사용해보기
    - SPA에 대해 이해, 리액트 라우터(v4)를 사용하여 여러종류의 라우팅 방법 알아보기
  - 코드 스플리팅 사용하기
    - 웹팩 설정을 통하여 코드를 여러개 파일로 분리시키는 방법
    - 이를 통해 특정 라우트에서 필요한 어플리케이션 데이터만 불러와서 사용 가능
      - 트래픽 아끼고, 로딩속도 개선

## code splitting

- 블로그에선 웹팩설정을 dev, prod 에 나눠서 했지만 eject를 해보니 dev, prod 의 webpack.config.js 파일이 없음(웹팩 설정 안 함)

#### 방법 1. 일반적인 컴포넌트를 코드 스플리팅 해서 불러오는 컴포넌트에서 비동기 적으로 불러옴

- 함수안에서 dynamic import

#### 방법 2. asyncComponent를 미리 만들어 놓고 dynamic import할 컴포넌트할 곳에 서 사용

```javascript
// lib/asyncComponent.js
import React, { Component } from 'react';

export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    constructor(props) {
      super(props);
      if (AsyncComponent.Component) return;
      getComponent().then(({ default: Component }) => {
        AsyncComponent.Component = Component;
        // 여기가 constructor 이긴 하지만 이 함수는 비동기적으로 작동하기에
        // 실질적으로는 컴포넌트가 마운트 되고 나서 실행되기 때문에 this.state.Component = ... 가 아닌
        // this.setState(...) 로 진행합니다.
        this.setState({ Component });
      });
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }

      return null;
    }
  };
}

// page/index.async.js
import asyncComponent from 'lib/asyncComponent';

export const Home = asyncComponent(() => import('./Home'));
export const About = asyncComponent(() => import('./About'));
export const Post = asyncComponent(() => import('./Post'));
export const Posts = asyncComponent(() => import('./Posts'));
```

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from 'components/Menu';
import ShowPageInfo from 'components/ShowPageInfo';
// import { Home, About, Posts } from 'pages/index.async'; // code split test
import { Home, About, Posts } from 'pages/index.async';

class App extends Component {
  state = {
    SplitMe: null,
  };

  showSplitMe = () => {
    // 비동기적으로 코드를 불러옴, 함수의 결과는 Promise를 반환
    // import()는 모듈의 전체 네임스페이스를 불러오므로, default를 직접 지정해줘야 함
    import('components/SplitMe').then(({ default: Component }) => {
      // 불러오고 난 다음엔 컴포넌트를 state에 집어 넣음
      this.setState({
        SplitMe: Component,
      });
    });
  };

  render() {
    const { SplitMe } = this.state; // state 에 담겨있는 SplitMe 에 대한 레퍼런스를 만들고

    return (
      <div>
        <Menu />
        {SplitMe && <SplitMe /> /* SplitMe 가 유효하면 렌더링을 해줍니다 */}
        <Route exact path="/" component={Home} />
        <button onClick={this.showSplitMe}>ClickMe</button>
        <Switch>
          <Route exact path="/about/:name" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id" component={Posts} />
        </Switch>
        <ShowPageInfo />
      </div>
    );
  }
}

export default App;

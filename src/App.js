import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import { Home, About, Posts } from './pages';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/about/:name" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/posts/:id" component={Posts} />
        </Switch>
        <Route exact path="/posts" component={Posts} />
      </div>
    );
  }
}

export default App;

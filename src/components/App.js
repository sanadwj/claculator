import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

const App = () => (

  <>
    <div>

      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/" component={Home} />
          <Route exact path="/quote" component={Quote} />
        </Switch>
      </Router>
    </div>
  </>

);

export default App;

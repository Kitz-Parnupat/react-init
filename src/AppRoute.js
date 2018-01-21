import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import PageHome from '../src/pages/PageHome/PageHome';
import PageAbout from '../src/pages/PageAbout/PageAbout';
import PageTopic from '../src/pages/PageTopic/PageTopic';
import LayoutMain from '../src/layout/LayoutMain';
  const AppRoute = () => (
    <div className="container">
      <LayoutMain/>
      <Router>
        <div className="container">
          <Route exact path="/" component={PageHome}/>
          <Route path="/about" component={PageAbout}/>
          <Route path="/topics" component={PageTopic}/>
        </div>
      </Router>
    </div>
  )

export default AppRoute;

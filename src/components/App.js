import { React } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Layout';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import HelpUs from '../pages/HelpUs';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/help-us" component={HelpUs} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;

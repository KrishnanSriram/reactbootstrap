import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import PricingPage from './pages/pricing';
import FeaturesPage from './pages/feature';
import PageNotFound from './pages/pagenotfound';
import LoginPage from './pages/login';
import Appbar from './components/appbar';

function App() {
  const [name, setName] = useState('React')
  return (
    <div>
    <Router>
      <Appbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;

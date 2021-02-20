import React from 'react';
import {
  BrowserRouter, 
  Switch, 
  Route, 
  Redirect, 
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';

import { isAuthenticated } from '../services/auth';

interface RouteProps extends ReactDOMRouteProps { 
  component: React.ComponentType;
} 

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => (
  <Route 
    {...rest} 
    render={
      props => isAuthenticated() 
      ? (<Component />)
      : (<Redirect to={{pathname: '/', state: { from: props.location}}} />)
    }
  />
);
const Routes: React.FC = () => {


  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/forgot-password" exact component={ForgotPassword} />
        {/* <Route path="/dashboard" exact component={Dashboard} /> */}
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
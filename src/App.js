import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// App Layout
const AppLayout = React.lazy(() => import("./ecom/layout/AppLayout"));
//const TheLayout = React.lazy(() => import("./containers/TheLayout"));

//Login Page
const Login = React.lazy(() => import("./ecom/login/Login"));

//Forget Password Page
const ForgetPassword = React.lazy(() => import("./ecom/login/ForgetPassword"));
//const Login = React.lazy(() => import("./views/pages/login/Login"));
// const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/fpassword"
              name="Forget Password"
              render={(props) => <ForgetPassword {...props} />}
            />
            {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
            <Route
              path="/"
              name="Home"
              render={(props) => <AppLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;

import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";
import AuthService from "src/ecom/services/AuthService";

// routes config
import EcomRoutes from "../../EcomRoutes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const AppContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {EcomRoutes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => {
                      if (!AuthService.isAuthenticated()) {
                        return <Redirect to="/login" from="{props.location}" />;
                      } else {
                        return (
                          <CFade>
                            <route.component {...props} />
                          </CFade>
                        );
                      }
                    }}
                  />
                )
              );
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(AppContent);

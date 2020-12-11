import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import store from './redux/store'
import { AuthProvider } from './firebase/Auth';
import NavBar from './components/common/Nav/NavBar'
import Footer from './components/common/Footer/Footer'
import PrivateRoute from './firebase/PrivateRoute'
import LandingPage from './components/pages/LandingPage';
import AppStyling from './components/common/AppStyling'

const PriceEstimatorPage = lazy(() => import(/* webpackChunkName: "bundlePage" */"./components/pages/PriceEstimator"));
const AddressValidationPage = lazy(() => import("./components/pages/AddressValidation"));
const TrackingPage = lazy(() => import('./components/pages/Tracking'));
const HomePage = lazy(() => import('./components/pages/Home'));
const SignUpPage = lazy(() => import('./components/Authentication/SignUp'));
const LoginPage = lazy(() => import('./components/Authentication/Login'));

const App = () => {
  return (
        <AuthProvider>
          <Provider store={store}>
            <Router>
              <PrivateRoute path="/" component={NavBar} />
              <AppStyling>
                  <Switch>
                    <Suspense fallback={<div>Testing</div>}>
                      <PrivateRoute path="/" exact component={HomePage} />
                      <PrivateRoute path="/price-estimator" component={PriceEstimatorPage} />
                      <PrivateRoute path="/address-validation" component={AddressValidationPage} />
                      <PrivateRoute path="/usps-tracking" component={TrackingPage} />
                      <Route path="/landingpage" component={LandingPage} />
                      <Route path="/signup" component={SignUpPage} />
                      <Route path="/" component={Footer} />
                    </Suspense>
                  </Switch>
              </AppStyling>
            </Router>
        </Provider>
      </AuthProvider>
      )
}

export default App;
import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import store from './redux/store'
import { AuthProvider } from './firebase/Auth';

import NavBar from './components/common/Nav/NavBar'
import Footer from './components/common/Footer/Footer'
import PrivateRoute from './firebase/PrivateRoute'
const PriceEstimatorPage = lazy(() => import(/* webpackChunkName: "bundlePage" */"./components/pages/PriceEstimator"));
const AddressValidationPage = lazy(() => import("./components/pages/AddressValidation"));
const TrackingPage = lazy(() => import('./components/pages/Tracking'));
const HomePage = lazy(() => import('./components/pages/Home'));
const SignUpPage = lazy(() => import('./components/pages/SignUp'));
const LoginPage = lazy(() => import('./components/pages/Login'));



const App = () => {
  return (
        <AuthProvider>
          <Provider store={store}>
            <Router>
              <Route path="/" component={NavBar} />
                <Switch>
                  <Suspense fallback={<div>Testing</div>}>
                    <PrivateRoute path="/" exact component={HomePage} />
                    <Route path="/price-estimator" component={PriceEstimatorPage} />
                    <Route path="/address-validation" component={AddressValidationPage} />
                    <Route path="/usps-tracking" component={TrackingPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/" component={Footer} />
                  </Suspense>
                </Switch>
            </Router>
        </Provider>
      </AuthProvider>
      )
}

export default App;
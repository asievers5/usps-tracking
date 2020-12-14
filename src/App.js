import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import store from './redux/store'
import { AuthProvider } from './firebase/Auth';
import NavBar from './components/common/Nav/NavBar'
import Footer from './components/common/Footer/Footer'
import PrivateRoute from './firebase/PrivateRoute'
import AppStyling from './components/common/AppStyling'

const PriceEstimatorPage = lazy(() => import(/* webpackChunkName: "bundlePage" */"./components/pages/PriceEstimator"));
const AddressValidationPage = lazy(() => import("./components/pages/AddressValidation"));
const TrackingPage = lazy(() => import('./components/pages/Tracking'));
const HomePage = lazy(() => import('./components/pages/Home'));
const SignUpPage = lazy(() => import('./components/Authentication/SignUp'));
const LoginPage = lazy(() => import('./components/Authentication/Login'));
const LandingPage = lazy(() => import('./components/pages/LandingPage'));

const App = () => {
  return (
        <AuthProvider>
          <Provider store={store}>
            <Router>
              <PrivateRoute path="/" component={NavBar} />
                <Switch>
                  <Suspense fallback={NavBar}>
                    <Route path="/landingpage" component={LandingPage} />
                      <PrivateRoute path="/" exact>
                        <AppStyling children={<TrackingPage />} />
                      </PrivateRoute>
                      <PrivateRoute path="/price-estimator">
                        <AppStyling children={<PriceEstimatorPage />} />
                      </PrivateRoute>
                      <PrivateRoute path="/address-validation">
                        <AppStyling children={<AddressValidationPage />} />
                      </PrivateRoute>
                      <PrivateRoute path="/usps-tracking">
                        <AppStyling children={<TrackingPage />} />
                      </PrivateRoute>
                      <Route path="/">
                        <Footer />
                      </Route>
                  </Suspense>
                </Switch>
            </Router>
        </Provider>
      </AuthProvider>
      )
}

export default App;
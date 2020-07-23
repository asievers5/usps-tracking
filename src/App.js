import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import store from './redux/store'
/*
import AddressValidationPage from './components/pages/AddressValidation';
import PriceEstimatorPage from './components/pages/PriceEstimator';
import TrackingPage from './components/pages/Tracking/index';
import HomePage from './components/pages/Home'
*/
import NavBar from './components/common/Nav/NavBar'
import Footer from './components/common/Footer/Footer'

const PriceEstimatorPage = lazy(() => import("./components/pages/PriceEstimator"));
const AddressValidationPage = lazy(() => import("./components/pages/AddressValidation"));
const TrackingPage = lazy(() => import('./components/pages/Tracking'));
const HomePage = lazy(() => import('./components/pages/Home'));

const App = () => {
  return (
          <Provider store={store}>
            <Router>
                <NavBar/><p>Test tracking number: 9361289706090838491252</p>
                <Switch>
                  <Suspense fallback={<div>Testing</div>}>
                    <Route path="/price-estimator" component={PriceEstimatorPage} />
                    <Route path="/address-validation" component={AddressValidationPage} />
                    <Route path="/usps-tracking" component={TrackingPage} />
                    <Route path="/" exact component={HomePage} />
                  </Suspense>
                </Switch>
                <Footer />
            </Router>
        </Provider>
      )
}

export default App;
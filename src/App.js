import React, { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import store from './redux/store'

import NavBar from './components/common/Nav/NavBar'
import Footer from './components/common/Footer/Footer'

const PriceEstimatorPage = lazy(() => import(/* webpackChunkName: "bundlePage" */"./components/pages/PriceEstimator"));
const AddressValidationPage = lazy(() => import("./components/pages/AddressValidation"));
const TrackingPage = lazy(() => import('./components/pages/Tracking'));
const HomePage = lazy(() => import('./components/pages/Home'));



const App = () => {
  return (
          <Provider store={store}>
            <Router>
              <Route path="/" component={NavBar} />
                <Switch>
                  <Suspense fallback={<div>Testing</div>}>
                    <Route path="/price-estimator" component={PriceEstimatorPage} />
                    <Route path="/address-validation" component={AddressValidationPage} />
                    <Route path="/usps-tracking" component={TrackingPage} />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/" component={Footer} />
                  </Suspense>
                </Switch>
            </Router>
        </Provider>
      )
}

export default App;
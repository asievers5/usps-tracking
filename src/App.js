import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, 
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

const app = () => {
  <Provider store={store}>
      <Router>
          <NavBar/><p>test</p>
          <Switch>
              <Route path="/price-estimator" component={PriceEstimatorPage} />
              <Route path="/address-validation" component={AddressValidationPage} />
              <Route path="/usps-tracking" component={TrackingPage} />
              <Route path="/" exact component={HomePage} />
          </Switch>
          <Footer />
      </Router>
  </Provider>
}

export default app;
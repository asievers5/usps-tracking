import React from 'react';
import { Provider } from 'react-redux';
import {
  Route, 
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import store from './redux/store'
import AddressValidationPage from './components/pages/AddressValidation';
import PriceEstimatorPage from './components/pages/PriceEstimator';
import TrackingPage from './components/pages/Tracking/index';
import HomePage from './components/pages/Home'
import NavBar from './components/common/Nav/NavBar'
import Footer from './components/common/Footer/Footer'

const app = () => {
  return (
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
      )
}

export default app;
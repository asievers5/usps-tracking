import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/common/Nav/NavBar';
import Footer from './components/common/Footer/Footer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {
    Route, 
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

// Page Imports
import PriceEstimatorPage from './components/pages/PriceEstimator';
import AddressValidationPage from './components/pages/AddressValidation';
import HomePage from './components/pages/Home';
import TrackingPage from './components/pages/Tracking'
import store from './redux/store';

ReactDOM.render(
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
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

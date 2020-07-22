import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './Nav/NavBar';
import Footer from './Footer/Footer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {
    Route, 
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'
import priceEstimator from './PriceEstimator';
import addressValidation from './AddressValidation/AddressValidation';
import Home from './Home/Home';

import store from './redux/store';
console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <NavBar/><p>test</p>
            <Switch>
                <Route path="/price-estimator" component={priceEstimator} />
                <Route path="/address-validation" component={addressValidation} />
                <Route path="/usps-tracking" component={App} />
                <Route path="/" component={Home} />
            </Switch>
            <Footer />
        </Router>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

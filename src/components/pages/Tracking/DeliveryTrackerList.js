import React from 'react'
import { connect } from 'react-redux';
import DeliveryStatusList from './DeliveryStatusList.js';

const DeliveryTrackerList = (props) => {

    let deliveryTrackers = null;

    // For each USPS tracking
    if(props.trackers){
        deliveryTrackers = props.trackers.map((trackingInfo, index) => {
          return <DeliveryStatusList trackingInfo={trackingInfo} key={index} />
      })
    }
    return(
        <div>
            {deliveryTrackers}
        </div>
    );
}

const mapStateToProps = state => {
    return {
      trackers: state.trackingReducers.trackers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryTrackerList);
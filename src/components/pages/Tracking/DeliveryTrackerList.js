import React from 'react'
import { connect } from 'react-redux';
import SingleDeliveryStatus from './SingleDeliveryStatus.js';
import styled from 'styled-components';

const DeliveryTrackerList = (props) => {

    let deliveryTrackers = null;

    // For each USPS tracking
    if(props.trackers){
        deliveryTrackers = props.trackers.map((trackingInfo, index) => {
          return <SingleDeliveryStatus trackingInfo={trackingInfo} key={index} />
      })
    }
    return(
        <Div>
            {deliveryTrackers}
        </Div>
    );
}

const Div = styled.div`
    height: 100%;
`;


const mapStateToProps = state => {
    return {
      trackers: state.trackingReducers.trackers
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryTrackerList);
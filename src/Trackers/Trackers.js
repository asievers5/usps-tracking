import React from 'react'
import { connect } from 'react-redux';
import Tracking from '../Tracking/Tracking';
import { fetchTrackingInfo } from '../redux/actions';


const Trackers = (props) => {

    let trackingComponents = null;
    if(props.trackers){
        trackingComponents = props.trackers.map((trackingInfo, index) => {
          return <Tracking trackingInfo={trackingInfo} key={index} />
      })
    }
    return(
        <div>
            {trackingComponents}
        </div>
    );
}

const mapStateToProps = state => {
    return {
      input : state.trackingReducers.textInput,
      trackers: state.trackingReducers.trackers
    };
  }
  

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTracking: (id) => dispatch(fetchTrackingInfo(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Trackers);
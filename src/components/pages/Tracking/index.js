import React from 'react';
import { connect } from 'react-redux';
import Trackers from './Trackers'
import Tracking from './Tracking'
import TrackingNumberInput from './TrackingNumberInput'
import * as actionTypes from '../../../redux/Tracking/constants'
import { fetchTrackingInfo } from '../../../redux/Tracking/actions'

// 9361289706090838491252

const trackingPage = (props) => {
  
  let trackingComponents = null;
  if(props.trackingNumbers){
      trackingComponents = props.trackingNumbers.map((number, index) => {
        return <Tracking tracking_ID={number} key={index} />
    })
  }

  const inputButtonClicked = () => {
    props.fetchTracking(props.input);
  }
 
  return (
    <div>   
      <TrackingNumberInput 
        inputChangeHandler={props.onInputChanged} 
        value={props.input} 
        trackButtonClickHandler={inputButtonClicked} />
      <Trackers />
      {/*{trackingComponents}*/} {/* Put the logic inline because its small enough */}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(`[state] ${Object.keys(state)}`);
  return {
    input : state.trackingReducers.textInput,
    trackingNumbers: state.trackingReducers.trackingNumbersList
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onInputChanged: (event) => dispatch({type: actionTypes.INPUT_CHANGE, input: event.target.value }),
    onTrackButtonClicked: () => dispatch({type: actionTypes.TRACK_BUTTON_CLICK}),
    fetchTracking: (id) => dispatch(fetchTrackingInfo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(trackingPage);
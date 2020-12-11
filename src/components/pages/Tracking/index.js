import React from 'react';
import { connect } from 'react-redux';
import DeliveryTrackerList from './DeliveryTrackerList';
import DeliveryStatusList from './DeliveryStatusList';
import TrackingNumberInput from './TrackingNumberInput';
import * as actionTypes from '../../../redux/Tracking/constants';
import { fetchTrackingInfo } from '../../../redux/Tracking/actions';
import styled from 'styled-components';

// 9361289706090838491252

const trackingPage = (props) => {
  
  let trackingComponents = null;

  // Creates a Delivery Status List for each tracking number inputted
  if(props.trackingNumbers){
      trackingComponents = props.trackingNumbers.map((number, index) => {
        return <DeliveryStatusList tracking_ID={number} key={index} />
    })
  }

  // Dispatches fetchTracking which makes USPS API call and updates 
  const inputButtonClicked = () => {
    props.fetchTracking(props.input);
  }
 
  return (
    <Container>   
      <TrackingNumberInput 
        inputChangeHandler={props.onInputChanged} 
        value={props.input} 
        trackButtonClickHandler={inputButtonClicked} />
      <DeliveryTrackerList />
      {/*{trackingComponents}*/} {/* Put the logic inline because its small enough */}
    </Container>
  );
}

const Container = styled.div`
  padding: 20%;
`;



const mapStateToProps = state => {
  console.log(`[state] ${Object.keys(state)}`);
  return {
    input : state.trackingReducers.textInput,
    trackingNumbers: state.trackingReducers.trackingNumbersList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInputChanged: (event) => dispatch({type: actionTypes.INPUT_CHANGE, input: event.target.value }),
    onTrackButtonClicked: () => dispatch({type: actionTypes.TRACK_BUTTON_CLICK}),
    fetchTracking: (id) => dispatch(fetchTrackingInfo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(trackingPage);
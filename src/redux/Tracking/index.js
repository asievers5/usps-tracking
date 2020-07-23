import * as actionTypes from './constants';

const initialState = {
    textInput: '',
    trackingNumbersList: [],
    trackers: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INPUT_CHANGE:
            console.log(`[input change] ${action.input}`);
            return {
                ...state,
                textInput: [action.input]
            }
        case actionTypes.TRACK_BUTTON_CLICK:
            const trackingNumber = state.textInput.slice();
            const trackingNumberTempList = [...state.trackingNumbersList, trackingNumber];
            return {
                ...state,
                textInput: '',
                trackingNumbersList: trackingNumberTempList
            }
        case actionTypes.ADD_TRACKER:
            console.log("action payload: ", action.payload)
            console.log("state.trackers: ", state.trackers )
            let tempTrackerList = [...state.trackers, action.payload];
            return {
                ...state,
                trackers: tempTrackerList
            }         
        default:
            return state;
    }
};

export default reducer;
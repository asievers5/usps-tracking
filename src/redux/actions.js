import axios from 'axios';
/*
 * action types
 */
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const TRACK_BUTTON_CLICK = 'TRACK_BUTTON_CLICK';
export const ADD_TRACKER = 'ADD_TRACKER';

export function fetchTrackingInfo(ID) {
    console.log('action dispatched')

    let url = '';
    console.log(ID);
    if(ID[0].length === 22){
        url = `https://secure.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML=<?xml version="1.0" encoding="UTF-8" ?><TrackRequest USERID="619SIEVE3833"><TrackID ID="${ID}">   </TrackID>   </TrackRequest>`
        url.replace(' ', '')
    }
    else{
        alert(`Invalid tracking number length: ${ID.length}`);
    }

    console.log("[URL] " + url)

    return (dispatch) => axios.get(url)
            .then(resp => {
                console.log("[RESP]" + resp)
                let parsedXML = new DOMParser().parseFromString(resp.data, "text/xml")
                let childNodeList = parsedXML.documentElement.childNodes['0'].childNodes
    
                let fullStatusList = Object.values(childNodeList).map(value => {
                    return value.textContent;
                })
                
                dispatch({type: ADD_TRACKER, payload: fullStatusList});
            })
}

 /*
 * action creators
 */
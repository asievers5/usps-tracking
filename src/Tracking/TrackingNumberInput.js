import React, { Fragment } from 'react';



const trackingNumberInput = (props) => {

    /*
    useEffect(() => {
        
        if(props.tracking_ID[0].length === 22){
            let url = `https://secure.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML=<?xml version="1.0" encoding="UTF-8" ?><TrackRequest USERID="${UserID}"><TrackID ID="${props.tracking_ID[0]}">   </TrackID>   </TrackRequest>`
            url.replace(' ', '')
           
            props.fetchTracking(url)
        }
        else{
            alert('Invalid tracking number length.');
            console.log(props.tracking_ID[0].length)    
        }
      }, [UserID, props.tracking_ID]);
    */
    return(
        <Fragment>
            <input type="text" placeholder="Input Tracking Number" onChange={props.inputChangeHandler} value={props.value}/>
            <button onClick={props.trackButtonClickHandler} >Track</button>
        </Fragment>
    );
}

export default trackingNumberInput;



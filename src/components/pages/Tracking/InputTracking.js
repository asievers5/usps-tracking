import React, { Fragment } from 'react';



const inputTracking = (props) => {

    return(
        <Fragment>
            <input type="text" placeholder="Input Tracking Number" onChange={props.inputChangeHandler} value={props.value}/>
            <button onClick={props.trackButtonClickHandler} >Track</button>
        </Fragment>
    );
}

export default inputTracking;



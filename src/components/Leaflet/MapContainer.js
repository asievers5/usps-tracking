import React, { useState, useEffect } from 'react';

const MapContainer = (props) => {

    let initialState = {
        "height": 400
    }

    const [state, setstate] = useState(initialState);

    const updateDimensions = () => {
        const height = window.innerWidth >= 992 ? window.innerHeight : 400
        setstate({ height: height })
        console.log(state.height)
    }

    useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
        window.removeEventListener("resize", updateDimensions);
    }
    }, [state.height]);
    
    return (
        <div className="map-container" style={{ height: state.height }}>
            {props.children}
        </div>
    )

}

export default MapContainer;
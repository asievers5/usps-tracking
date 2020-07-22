import React from 'react'

// Example api call:
/*
`
https://secure.shippingapis.com/ShippingAPI.dll?API=RateV4&XML=<?xml version="1.0" encoding="UTF-8" ?><RateV4Request USERID="619SIEVE3833">
<Revision>2</Revision>
<Package ID="0">
<Service>${service}</Service>
<ZipOrigination>${zip_origin}</ZipOrigination>
<ZipDestination>${zip_dest}</ZipDestination>
<Pounds>${pounds}</Pounds>
<Ounces>${ounces}</Ounces>
<Container></Container>
<Width></Width>
<Length></Length>
<Height></Height>
<Girth></Girth>
<Machinable></Machinable>
</Package>
</RateV4Request>`
*/
const priceEstimator = (props) => {
    return (
        <div>
            <p>
                Placeholder page for route '/price-estimator'
            </p>
            <div>

            <input type="text" placeholder="Zip Code - Origination" />
            <input type="text" placeholder="Zip Code - Destination" />
            <input type="text" placeholder="Pounds" />
            <input type="text" placeholder="Ounces" />
            <input type="text" placeholder="Container Type" />
            <input type="text" placeholder="Width" />
            <input type="text" placeholder="Length" />
            <input type="text" placeholder="Height" />
            <input type="text" placeholder="Girth" />
            <input type="text" placeholder="Machinable" />
            </div>
        </div>
    )
}

export default priceEstimator;
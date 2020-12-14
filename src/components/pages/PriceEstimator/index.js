import React from 'react'
import SimpleTable from '../../common/SimpleTable';
import Table from '../../common/Table/Table';
import { defaultSchema as shippingItemSchema}  from '../../common/Table/TestSchema';
import { data as shippingItemTestData} from '../../../../data'
const priceEstimator = (props) => {

    const getFormattedPrice = (item) => {
        return <span>
            {`$${item.price}`}
        </span>
    }

    const customRenders = {
        price: getFormattedPrice
    }

    return (
        <div>
            <p>
                Placeholder page for route '/price-estimator'
                <br />
                Example custom table used with customRenderer for price formatting.
            </p>

            <Table data={shippingItemTestData} schema={shippingItemSchema} customRenderers={customRenders} />
        </div>
    )
}

export default priceEstimator;
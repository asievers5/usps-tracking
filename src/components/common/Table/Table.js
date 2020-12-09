import React from 'react';

const Table = (props) => {
    const {
        data,
        schema,
        customRenderers
    } = props;

    return (
        <table 
            width="100%"
        >
            <thead>
                <tr>
                    {schema.map(col => (
                        <th 
                            key={col.id}
                            style={{
                                width: col.width || 'auto',
                                padding: col.padding || '0px',
                                textAlign: col.align || 'left'
                            }}
                            >
                            {col.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
               {data.map((item, rowIndex) => (
                   <tr key={rowIndex}>
                       {schema.map(col => {
                           console.log(col);
                           return (<td
                                style={{
                                width: col.width || 'auto',
                                padding: col.padding || '0px',
                                textAlign: col.align || 'left'
                                }}>
                               {customRenderers[col.id] ? customRenderers[col.id](item) : item[col.id]}
                           </td>);
                        })}
                   </tr>
            ))}
            </tbody>
        </table>
    )
}   

export default Table;
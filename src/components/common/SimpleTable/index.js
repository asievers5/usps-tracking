import React from 'react';
import styled from 'styled-components';

const SimpleTable = (props) => {

    // Set headings
    let headers = props.headings.map((headingText, index) => {
        return <th key={index + "Header"}scope="col">{headingText}</th>;
    });

    // Create Rows
    let rows = props.rows.map((row, index) => {
        return <tr key={index}>
            {row.map((cellData, index) => {
                return <td key={index}>{cellData}</td>
            })}
        </tr>
    });

    // Set styles
    const Table = styled.table`
        border-collapse: collapse;

        table, th, td {
            border: ${props.settings.bordersize ? props.settings.bordersize : '1px'} solid ${props.settings.bordercolor ? props.settings.bordercolor : 'black'};
          }
    `

    if(props.settings.bordersize) {
        console.log('[bordersize] true');
    }
    else console.log('[bordersize] false');

    return(
        <Table>
            <thead>
                <tr>
                    {headers}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    )

}

export default SimpleTable;

/*
    props: {
        headings: array of strings
        rowdata: list of arrays
        styling: object with key/value pairs
    }
*/
import React, {FC} from 'react';
import {Table} from "react-bootstrap";
import {IRecord} from "../../api/DataService";

interface IDataTableProps {
    records: IRecord[]
}

const DataTable: FC<IDataTableProps> = ({records}) => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Day</th>
                <th>MCC Code</th>
                <th>Average Amount</th>
            </tr>
            </thead>
            <tbody>
            { records.map(({day, mccCode, averageAmount}) => {
                return (
                    <tr>
                        <td>{day}</td>
                        <td>{mccCode}</td>
                        <td>{averageAmount}</td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
    );
};

export default DataTable;
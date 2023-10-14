import React from 'react';
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const UsersTable = () => {
    return (
        <div className={"w-100 h-100 d-flex flex-column mt-5 mb-5"}>
            <Table
                className="table w-100">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Участник</th>
                    <th scope="col">Пожертвовано</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td className={"text-danger"}>Mark</td>
                    <td className={"text-danger"}>29234 сом</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td >Jacob</td>
                    <td>27245 сом</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Айбек</td>
                    <td>19933 сом</td>
                </tr>
                </tbody>

            </Table>
            <Button
                type={"button"}
                variant={"success"}
                className={"btn-block w-100 h-100"}
            >Посмотреть детально</Button>
        </div>
    );
};

export default UsersTable;
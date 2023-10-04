import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewEmployee() {

    const { id } = useParams(); 

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender:"",
        position: ""
    });

    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:8080/api/employees/${id}`)
        setEmployee(result.data)

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Employee Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of employee id : {employee.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>First Name:</b>
                                    {employee.firstName}
                                </li>
                                <li className="list-group-item">
                                    <b>Last name:</b>
                                    {employee.lastName}
                                </li>
                                <li className="list-group-item">
                                    <b>Email:</b>
                                    {employee.email}
                                </li>
                                <li className="list-group-item">
                                    <b>Gender:</b>
                                    {employee.gender ?"Male":"Female"}
                                </li>
                                <li className="list-group-item">
                                    <b>Position:</b>
                                    {employee.position.name}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/product"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default ViewEmployee;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const Employee = () => {

  const { id } = useParams();

  // const { pageNo } = useParams();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/api/employees")
    // const result = await axios.get(`http://localhost:8080/api/pagination?page=${pageNo}`)
    setEmployees(result.data);

  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/api/delete-employee/${id}`);
    loadEmployees();
  };

  return (

    <div className="container">
      <Link className="btn btn-outline-dark mt-4 mb-3 float-end" to="/product/add-employee" >Add Employee</Link>
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Position</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <th scope="row" >
                  {index + 1}
                </th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.gender ? "Male" : "Female"}</td>
                <td>{employee.positionName}</td>
                <td>
                  <Link
                    className="btn btn-info mx-2"
                    to={`view-employee/${employee.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`edit-employee/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
        <nav aria-label="Page navigation example float-end">
              <ul className="pagination  float-end">
                <li className="page-item"><a className="page-link" href="0">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
      </div>
    </div>
  );
};

export default Employee;


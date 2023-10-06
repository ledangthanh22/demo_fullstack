import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
function EditEmployee() {

  let navigate = useNavigate();

  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    position: null,
  })

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  useEffect(() => {
    loadEmployee();
    loadPositions();
  }, [])

  const [positions, setPositions] = useState([]);

  const loadPositions = async () => {
    const result = await axios.get("http://localhost:8080/api/position")
    setPositions(result.data);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validErrors = {};
    let isCheck = true;

    if (!employee.firstName.trim()) {
      validErrors.firstName = "First name is required!";
      isCheck = false;
    }

    if (!employee.lastName.trim()) {
      validErrors.lastName = "Last name is required!";
      isCheck = false;
    }

    if (!employee.email.trim()) {
      validErrors.email = "Email name is required!";
      isCheck = false;
    } else if (!/\S+@\S+\.\S+/.test(employee.email)) {
      validErrors.email = "email is not valid!";
      isCheck = false;
    }

    if (isCheck) {
      await axios.put(`http://localhost:8080/api/edit-employee/${id}`, employee)
      navigate("/employee");
    } else {
      setErrors(validErrors);
    }

  };


  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8080/api/employees/${id}`)
    setEmployee(result.data)

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center text-danger m-4">Update employee</h2>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your first  name"
                name="firstName"
                value={employee.firstName}
                onChange={(e) => handleChange(e)}
              />
              {errors.firstName && <span className="text-danger">{errors.firstName}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="lastName"
                value={employee.lastName}
                onChange={(e) => handleChange(e)}
              />
              {errors.lastName && <span className="text-danger">{errors.lastName}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">
                E-mail
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={employee.email}
                onChange={(e) => handleChange(e)}
              />
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">
                Gender
              </label> <br />
              <div className="form-check form-check-inline" >
                <input type="radio" id="male" value="true" checked={employee.gender === true} className="form-check-input" name="gender" onChange={(e) => handleChange(e)} />
                <label className="form-label" htmlFor="male">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="female" value="false" checked={employee.gender === false} className="form-check-input" name="gender" onChange={(e) => handleChange(e)} />
                <label className="form-label" htmlFor="female">Female</label>
              </div>
              <br />
              {errors.gender && <span className="text-danger">{errors.gender}</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">
                Position
              </label>
              <select className="form-select" onChange={(e) => handleChange(e)}>
                {positions.map((pos, index) => (
                  <option selected={employee.position.id == pos.id} key={index} value={pos.id}>{pos.name}</option>
                ))
                }
              </select>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/employee">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
};
export default EditEmployee;
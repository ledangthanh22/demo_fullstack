import Employees from '../../components/Employee/Employees';
import EditEmployee from '../../components/Employee/EditEmployee';
import AddEmployee from '../../components/Employee/AddEmployee';
import ViewEmployee from '../../components/Employee/ViewEmployee';

import { Routes, Route } from 'react-router-dom'
function Product() {
    return (

        <Routes>
            <Route exact path="/" element={<Employees />} />
            <Route exact path="add-employee" element={<AddEmployee />} />
            <Route exact path="edit-employee/:id" element={<EditEmployee />} />
            <Route exact path="view-employee/:id" element={<ViewEmployee />} />
        </Routes>
    );
}

export default Product;
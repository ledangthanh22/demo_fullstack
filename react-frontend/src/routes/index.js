import Home from '../pages/Home';
import Employees from '../pages/Employee/Employees';
import AddEmployee from '../pages/Employee/AddEmployee';
import EditEmployee from '../pages/Employee/EditEmployee';
import ViewEmployee from '../pages/Employee/ViewEmployee';

import Contact from '../pages/Contact';

const publicRoutes =[
    { path:'/', component: Home},
    { path:'/employee', component: Employees},
    { path:'/employee/add-employee', component: AddEmployee},
    { path:'/employee/edit-employee/:id', component: EditEmployee},
    { path:'/employee/view-employee/:id', component: ViewEmployee},
    { path:'/contact', component: Contact},
];

const privateRoutes =[
   
];

export {publicRoutes,privateRoutes};
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Employees from "./components/Employee/Employees";
// import AddEmployee from "./components/Employee/AddEmployee";
// import EditEmployee from "./components/Employee/EditEmployee";
// import ViewEmployee from "./components/Employee/ViewEmployee";
import Navbar from "./layouts/Navbar";
import {publicRoutes} from './routes';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
        <Navbar/>
        <Routes>
          {publicRoutes.map((route,index) =>{
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page/>}/>
          })}
        {/* <Route exact path="/employee" element={<Employees />} />
        <Route exact path="/add-employee" element={<AddEmployee/>} />
        <Route exact path="/edit-employee/:id" element={<EditEmployee />} />
        <Route exact path="/view-employee/:id" element={<ViewEmployee />} /> */}

        </Routes>
     </Router>
    </div>
  );
}

export default App;
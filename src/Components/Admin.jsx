import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin.css';

function Admin() {

  const [employeeList, setEmployeeList] = useState([]);

  const getEmployees = () => {
    axios.get("http://localhost:3001/user").then((response) => {
      setEmployeeList(response.data);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className='admin'>
      <h1 className='ad'>Admin Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>text</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.fname}</td>
              <td>{employee.email}</td>
              <td>{employee.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Admin;
   
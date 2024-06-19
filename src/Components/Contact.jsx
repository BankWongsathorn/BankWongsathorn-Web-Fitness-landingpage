import React, { useState } from 'react';
import axios from 'axios'

;
function Contact() {

     const [fname, setFname] = useState("");
     const [email, setEmail] = useState("");
     const [text, setText] = useState("");
 
     const [employeeList, setEmployeeList] = useState([]);

     const getEmployees = () => {
        axios.get("http://localhost:3001/user").then((response) => {
          setEmployeeList(response.data);
        });
      };
    
      const addEmployee = () => {
        axios.post("http://localhost:3001/create", {
          fname: fname,
          email: email,
          text: text,
    
        }).then(() => {
          setEmployeeList([
            ...employeeList,
            {
              fname: fname,
              email: email,
              text: text
            },
          ]);
        });
      };
    

    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form >
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              onChange={(event) => {
                setFname(event.target.value)
              }}
            />
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
             <input
              type="text"
              className="form-control"
              placeholder="Enter text"
              onChange={(event) => {
                setText(event.target.value)
              }}
            />
<input type='submit' onClick={addEmployee} value='Send' />
</form>
        </div>  
    )
}


export default Contact;



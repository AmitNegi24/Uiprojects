import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'
import './SRecords.css'
import { useNavigate } from 'react-router-dom';
function SRecord() {
  const navigate = useNavigate();

  const navigateToAddStudent = () => {
    navigate('/AddStudent');
  };
  const navigateToUpdateStudent = () => {
    navigate('/UpdateStudent');
  };
  const navigateToDeleteStudent = () => {
    navigate('/DeleteStudent');
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getStudents')
      .then(res => {
        console.log(res.data)
        setData(res?.data?.data)
      })
      .catch(err => {
        alert("something went wrong");
      })
  }, []);

  const renderTable = () => {
    return data.length>0 && data.map((student,index) => {
      return (
        <tr key={index}>
          <tr>{index+1}</tr>
          <td>{student.Name}</td>
          <td>{student.Age}</td>
          <td>{student.Mobile}</td>
          <td>{student.Email}</td>
        </tr>
      )
    })
  }


  return (
    <div>
      <div id='tablebox'>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">SNo</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {renderTable()}
          </tbody>
        </table>
      </div>
      <div className='buttonbox'>
        <button onClick={navigateToAddStudent}>Add Student</button>
        <button onClick={navigateToUpdateStudent}>Update Student</button>
        <button onClick={navigateToDeleteStudent}>Delete Student</button>
      </div>
    </div>
  )
}

export default SRecord
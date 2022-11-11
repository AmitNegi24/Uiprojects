import React from 'react'
import { useEffect, useState } from "react";
import './SRecords.css'
function SRecord() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`getstudents url`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.students);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    
    fetchData();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

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
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.SNo}</td>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Mobile}</td>
                <td>{item.Email}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      <div className='buttonbox'>
        <button>Add Student</button>
        <button>Update Student</button>
        <button>Delete Student</button>
      </div>
    </div>
  )
}

export default SRecord
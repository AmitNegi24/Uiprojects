import React, { useState } from 'react'
import './AddStudent.css';
import { useNavigate} from 'react-router-dom';

function AddStudent() {
    
    const navigate = useNavigate();

    const navigateToSrecords = () => {
        //  navigate to /Srecords
        navigate('/Srecords');
    };

    const [student, setStudent] = useState({
        Name: "", Age: "", MobileNumber: "", Email: ""
    });
    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setStudent({ ...student, [name]: value })
    }

    const PostData = async(e)=>{
        
        e.preventDefault();

        const { Name, Age, MobileNumber, Email}=student;

       const res=await fetch("/", {
        method: "POST",
        body: JSON.stringify({
            Name, Age, MobileNumber, Email
        })
       });
       const data =await res.json();
       if(data.status === 422 || !data){
        Window.alert("INVALID ENTRY");
       }
       else{
        Window.alert("NEW DATA ENTERED");
       }
    }




    return (
        <div>
            <div className='Container'>
                <h1>AddStudent</h1>
                <form method='POST'>
                    <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" name='Name' id="inputName" placeholder="Name"
                                value={student.Name}
                                onChange={handleInputs}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Age</label>
                        <div class="col-sm-5">
                            <input type="number" class="form-control" name='Age' id="inputAge" placeholder="Age" min="1" max="100"
                                value={student.Age}
                                onChange={handleInputs}

                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Mobile</label>
                        <div class="col-sm-5">
                            <input type="tel" class="form-control" name='MobileNumber' id="inputPassword3" placeholder="Mobile number"
                                value={student.MobileNumber}
                                onChange={handleInputs}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-5">
                            <input type="email" class="form-control" name='Email' id="inputEmail3" placeholder="Email"
                                value={student.Email}
                                onChange={handleInputs}
                            />
                        </div>
                    </div>


                    <div class="form-group row">

                        <button id="button" type="submit" onClick={PostData}>Add Student</button>
                        <button id="button" type="submit" onClick={navigateToSrecords}>cancel</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddStudent
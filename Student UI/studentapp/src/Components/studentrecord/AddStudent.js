import React, { useState} from 'react'
import './AddStudent.css';
import { useNavigate} from 'react-router-dom';


function AddStudent() {
    
    const navigate = useNavigate();

    const navigateToSrecords = () => {
        //  navigate to /Srecords
        navigate('/Srecords');
    };

        const [Name, setName] = useState('');
        const [Age, setAge] = useState('');
        const [Mobile, setMobile] = useState('');
        const [Email, setEmail] = useState('');

        function SaveUser()
        {
            console.warn({Name,Age,Mobile,Email});
            let data={Name,Age,Mobile,Email}
            fetch('http://localhost:3001/create',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            }).then((result)=>{
                console.warn("result",result)
                result.json().then((resp)=>{
                    console.warn("resp",resp)
                })
                })
        }



    return (
        <div>
            <div className='Container'>
                <h1>AddStudent</h1>
                <form>
                    <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" name='Name' id="inputName" placeholder="Name" 
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Age</label>
                        <div class="col-sm-5">
                            <input type="number" class="form-control" name='Age' id="inputAge" placeholder="Age" min="1" max="100" 
                            value={Age}
                            onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Mobile</label>
                        <div class="col-sm-5">
                            <input type="tel" class="form-control" name='MobileNumber' id="inputPassword3" placeholder="Mobile number" 
                            value={Mobile} 
                            onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-5">
                            <input type="email" class="form-control" name='Email' id="inputEmail3" placeholder="Email" 
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>


                    <div class="form-group row">

                        <button id="button" type="submit" onClick={SaveUser}>Add Student</button>
                        <button id="button" type="submit" onClick={navigateToSrecords}>cancel</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddStudent
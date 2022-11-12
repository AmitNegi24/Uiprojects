import React from 'react'
import { useNavigate } from 'react-router-dom';


function UpdateStudent() {
    const navigate = useNavigate();

    const navigateToSrecords = () => {
        //  navigate to /Srecords
        navigate('/Srecords');
    };


    return (
        <div>
            <div className='Container'>
                <h1>UpdateStudent</h1>
                <form method='UPDATE'>
                    <div class="form-group row">
                        <label for="inputName" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" name='Name' id="inputName" placeholder="Name"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Age</label>
                        <div class="col-sm-5">
                            <input type="number" class="form-control" name='Age' id="inputAge" placeholder="Age" min="1" max="100"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Mobile</label>
                        <div class="col-sm-5">
                            <input type="tel" class="form-control" name='MobileNumber' id="inputPassword3" placeholder="Mobile number"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-5">
                            <input type="email" class="form-control" name='Email' id="inputEmail3" placeholder="Email"/>
                        </div>
                    </div>


                    <div class="form-group row">

                        <button id="button" type="submit" >Update</button>
                        <button id="button" type="submit" onClick={navigateToSrecords}>cancel</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent
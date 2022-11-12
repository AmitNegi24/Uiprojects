import React from 'react'
import { useNavigate } from 'react-router-dom';

function DeleteStudent() {

    const navigate = useNavigate();

    const navigateToSrecords = () => {
        //  navigate to /Srecords
        navigate('/Srecords');
    };
  return (
    <div>
        <div className='Container'>
                <h1>DeleteStudent</h1>
                <form method='DELETE'>
                    
                   
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Mobile</label>
                        <div class="col-sm-5">
                            <input type="tel" class="form-control" name='MobileNumber' id="inputPassword3" placeholder="Mobile number"/>
                        </div>
                    </div>
                    


                    <div class="form-group row">

                        <button id="button" type="submit" >Delete</button>
                        <button id="button" type="submit" onClick={navigateToSrecords}>cancel</button>

                    </div>
                </form>
            </div>
    </div>
  )
}

export default DeleteStudent
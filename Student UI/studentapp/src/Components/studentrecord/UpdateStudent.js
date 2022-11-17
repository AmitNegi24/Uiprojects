import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function UpdateStudent() {
    const navigate = useNavigate();

    const navigateToSrecords = () => {
        //  navigate to /Srecords
        navigate('/Srecords');
    };

    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Mobile, setMobile] = useState('');
    const [Email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const handleSubmit = () => {
        setLoading(true);
        setIsError(false);
        const data = {
            Name: Name,
            Age: Age,
            Mobile: Mobile,
            Email: Email
        }
        axios.put('/students/:studentId', data).then(res => {
            setData(res.data);
            setName('');
            setAge('');
            setMobile('');
            setEmail('');
            setLoading(false);
        }).catch(err => {
            setLoading(false);
            setIsError(true);
        });
    }

    return (
        <div>
            <div className='Container'>
                <h1>UpdateStudent</h1>
                <form method='UPDATE'>
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



                    {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}

                    <div class="form-group row">

                        <button id="button" type="submit" onClick={handleSubmit}
                            disabled={loading}
                        >{loading ? 'Loading...' : 'Update'}</button>
                        {data && <div className="mt-3">
                            <strong>Output:</strong><br />
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        </div>
                        }
                        <button id="button" type="submit" onClick={navigateToSrecords}>cancel</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent
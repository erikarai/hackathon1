import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JudgeChangepass() {
  const [data, setData] = useState({
    name: '', // Change to store comma-separated email addresses
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('name', data.name);
    formdata.append('password', data.password);

    axios
      .post('http://localhost:8081/create', formdata)
      .then((res) => {
        navigate('/employee');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
      <h2>Update Profile</h2>
      <form className='row g-3 w-50' onSubmit={handleSubmit}>
        <div className='col-12'>
          <label htmlFor='inputIdeaName' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='inputname'
            placeholder='Enter Name'
            autoComplete='off'
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className='col-12'>
          <label htmlFor='inputOldpassword' className='form-label'>
            Old Password
          </label>
          <input
            type='oldpassword'
            className='form-control'
            id='inputOldpassword'
            placeholder='Enter Old Password'
          />
        </div>
        <div className='col-12'>
          <label htmlFor='inputPassword' className='form-label'>
            New Password
          </label>
          <input
            type='password'
            className='form-control'
            id='inputPassword'
            placeholder='Enter Password'
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className='col-12'>
          <button type='submit' className='btn btn-primary'>
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default JudgeChangepass;

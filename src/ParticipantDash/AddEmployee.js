import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

function AddEmployee() {
  const { userId } = useParams();
  console.log(userId);
  const [data, setData] = useState({
    title: '',
    //emails: '',  Change to store comma-separated email addresses
    description: '',
  });

  const navigate = useNavigate();
  const [emailList, setEmailList] = useState([{ service: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...emailList];
    list[index][name] = value;
    setEmailList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...emailList];
    list.splice(index, 1);
    setEmailList(list);
  };

  const handleServiceAdd = () => {
    setEmailList([...emailList, { service: "" }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const formdata = new FormData();
    // formdata.append('title', data.ideaName);
    // formdata.append('email', data.email);  Update to store emails
    // formdata.append('description', data.description);
// const url = `http://localhost:8081/hackathon/ideas/${userId}/add`;

    axios
      .post('https://984r65i5h0.execute-api.eu-north-1.amazonaws.com/dev/hackathon/ideas/' + userId + '/add', data, {headers: {
        'Content-Type': 'application/json',
      },})
      .then((res) => {
        //navigate('/employee');
        const json = JSON.stringify(res);
        console.log(json);

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
      <h2>Add New Ideas</h2>
      <form className='row g-3 w-50' >
        <div className='col-12'>
          <label htmlFor='inputIdeaName' className='form-label'>
            Idea Name
          </label>
          <input
            type='text'
            className='form-control'
            id='inputIdeaName'
            value={data.title}
            placeholder='Enter Name'
            autoComplete='off'
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        </div>
        {/* <div className='col-12'>
          <label htmlFor='inputEmails' className='form-label'>
            Email Addresses (comma-separated)
          </label>
          <input
            type='text'
            className='form-control'
            id='inputEmails'
            placeholder='abc@gmail.com, def@example.com'
            autoComplete='off'
            onChange={(e) => setData({ ...data, emails: e.target.value })}
            multiline
          />
        </div> */}
        {/* <div className="form-field">
        <label htmlFor="email">Email (Add Team Members)</label>
        {emailList.map((singleEmail, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
                name="service"
                type="text"
                id="service"
                value={singleEmail.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {emailList.length - 1 === index && emailList.length < 4 && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>Add</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {emailList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div> */}
      {/* <div className="output">
        {emailList &&
          emailList.map((singleEmail, index) => (
            <ul key={index}>
              {singleEmail.service && <li>{singleEmail.service}</li>}
            </ul>
          ))}
      </div> */}
        <div className='col-12'>
          <label htmlFor='inputDescription' className='form-label'>
            Description
          </label>
          <textarea
    className='form-control'
    id='inputDescription'
    value={data.description}
    rows='4' // Adjust the number of rows as needed
    autoComplete='off'
    onChange={(e) => setData({ ...data, description: e.target.value })}
  />

          {/* <input
            type='text'
            className='form-control'
            id='inputDescription'
            autoComplete='off'
            onChange={(e) => setData({ ...data, description: e.target.value })}
          /> */}
        </div>
        <div className='col-12'>
          <button type='submit' onClick={handleSubmit} className='btn btn-primary'>
            Submit
          </button>
        </div>
        <div className='col-12'  style={{ display: 'flex',justifyContent: 'center'}}>
          <button type='submit' className='btn btn-primary'>
          <Link to='/addteam' style={{color: "white"}}>Add new member</Link>
          </button>
          <button type='submit' className='btn btn-primary mx-2' >
            <Link to='/partside/Employee' style={{color: "white"}}>Home</Link>
          </button>
        </div>
      </form>
      
    </div>
  );
}

export default AddEmployee;

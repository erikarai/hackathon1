import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

function Addteam() {
    const [data, setData] = useState({
        emails: '', // Change to store comma-separated email addresses
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
        const formdata = new FormData();
        formdata.append('email', data.email); // Update to store emails
      };
  return (
    <div className='d-flex flex-column align-items-center pt-4'>
    <h2>Add New Member</h2>
    <form className='row g-3 w-50' onSubmit={handleSubmit}>
      <div className="form-field">
      <label htmlFor="email">Email</label>
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
        </div>
      ))}
    </div>
    {/* <div className="output">
      {emailList &&
        emailList.map((singleEmail, index) => (
          <ul key={index}>
            {singleEmail.service && <li>{singleEmail.service}</li>}
          </ul>
        ))}
    </div> */}
      <div className='col-12'>
        <button type='submit' className='btn btn-primary'>
        <Link to='/partside/Employee' style={{color: "white"}}>Submit</Link>
        </button>
      </div>
    </form>
    
  </div>
  )
}

export default Addteam

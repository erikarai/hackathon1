import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from './modal';
import Editmodal from './Editmodal'


function Employee() {
  const { userId } = useParams();
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch ideas by user ID
    axios.get(`https://984r65i5h0.execute-api.eu-north-1.amazonaws.com/dev/hackathon/ideas/${userId}/ideaByUserId`)
      .then(response => {
        setIdeas(response.data); // Assuming the API returns an array of idea
      })
      .catch(error => {
        console.error('Error fetching ideas:', error);
      });
  }, [userId]);

  return (
    <div className='px-5 py-3'>
      <Link to={`/create/${userId}`} className='btn btn-dark' style={{ backgroundColor: '#240A40' }}>Submit New Idea</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Idea Name</th>
            <th scope="col">Description</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            <tr key={ideas.ideaId}>
              <td>{ideas.title}</td>
              <td>{ideas.description}</td>
              <td><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Members
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<Modal />
</div></td>
              <td>
              <button type="button" class="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">
 Update
</button>
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<Editmodal />
</div>
                <button type="button" className="btn btn-danger">Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Employee;

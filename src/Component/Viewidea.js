import React from 'react'
import { Link } from 'react-router-dom'

function Viewidea() {
  return (
    <div className='px-5 py-3'>
      {/* <div className='d-flex justify-content-center mt-2'>
        <h3>Participants List</h3>
      </div> */}
      {/* <Link to="/create" className='btn btn-success'>Submit New Idea</Link> */}
      <div>
      <select class="form-select" aria-label="Default select example">
              <option selected>Status</option>
              <option value="1">Approved</option>
              <option value="2">Pending</option>
              <option value="2">Rejected</option>
      </select>
      </div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr.No.</th>
      <th scope="col">Idea Name</th>
      <th scope="col">Action</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td><button type="button" class="btn btn-success">Read</button></td>
      <td><div class="dropdown">
  <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Status
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Approved</a></li>
    <li><a class="dropdown-item" href="#">Pending</a></li>
    <li><a class="dropdown-item" href="#">Rejected</a></li>
  </ul>
</div></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td><button type="button" class="btn btn-success">Read</button></td>
      <td><div class="dropdown">
  <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   Status
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Approved</a></li>
    <li><a class="dropdown-item" href="#">Pending</a></li>
    <li><a class="dropdown-item" href="#">Rejected</a></li>
  </ul>
</div></td>
    </tr>
    <tr>
      <th>3</th>
      <td>Larry the Bird</td>
      <td><button type="button" class="btn btn-success">Read</button></td>
      <td><div class="dropdown">
  <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Status
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Approved</a></li>
    <li><a class="dropdown-item" href="#">Pending</a></li>
    <li><a class="dropdown-item" href="#">Rejected</a></li>
  </ul>
</div></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Viewidea

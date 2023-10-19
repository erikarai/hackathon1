import React from 'react'
import { Link } from 'react-router-dom'

function Judge() {
  return (
    
    <div className='px-5 py-3'>
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
   Score
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">1</a></li>
    <li><a class="dropdown-item" href="#">2</a></li>
    <li><a class="dropdown-item" href="#">3</a></li>
  </ul>
</div></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td><button type="button" class="btn btn-success">Read</button></td>
      <td><div class="dropdown">
  <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   Score
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">1</a></li>
    <li><a class="dropdown-item" href="#">2</a></li>
    <li><a class="dropdown-item" href="#">3</a></li>
  </ul>
</div></td>
    </tr>
    <tr>
      <th>3</th>
      <td>Larry the Bird</td>
      <td><button type="button" class="btn btn-success">Read</button></td>
      <td><div class="dropdown">
  <a class="btn btn-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Score
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">1</a></li>
    <li><a class="dropdown-item" href="#">2</a></li>
    <li><a class="dropdown-item" href="#">3</a></li>
  </ul>
</div></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Judge

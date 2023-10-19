// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function AddJudge() {
//   const [data, setData] = useState({
//     ideaName: '',
//     emails: '', // Change to store comma-separated email addresses
//     password: '',
//     description: '',
//   });

//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formdata = new FormData();
//     formdata.append('ideaName', data.ideaName);
//     formdata.append('emails', data.emails); // Update to store emails
//     formdata.append('password', data.password);
//     formdata.append('description', data.description);

//     axios
//       .post('http://localhost:8081/create', formdata)
//       .then((res) => {
//         navigate('/employee');
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className='d-flex flex-column align-items-center pt-4'>
//       <h2>Add New Ideas</h2>
//       <form className='row g-3 w-50' onSubmit={handleSubmit}>
//         <div className='col-12'>
//           <label htmlFor='inputIdeaName' className='form-label'>
//             Idea Name
//           </label>
//           <input
//             type='text'
//             className='form-control'
//             id='inputIdeaName'
//             placeholder='Enter Name'
//             autoComplete='off'
//             onChange={(e) => setData({ ...data, ideaName: e.target.value })}
//           />
//         </div>
//         <div className='col-12'>
//           <label htmlFor='inputEmails' className='form-label'>
//             Email Addresses (comma-separated)
//           </label>
//           <input
//             type='text'
//             className='form-control'
//             id='inputEmails'
//             placeholder='abc@gmail.com, def@example.com'
//             autoComplete='off'
//             onChange={(e) => setData({ ...data, emails: e.target.value })}
//           />
//         </div>
//         <div className='col-12'>
//           <label htmlFor='inputPassword' className='form-label'>
//             Password
//           </label>
//           <input
//             type='password'
//             className='form-control'
//             id='inputPassword'
//             placeholder='Enter Password'
//             onChange={(e) => setData({ ...data, password: e.target.value })}
//           />
//         </div>
//         <div className='col-12'>
//           <label htmlFor='inputDescription' className='form-label'>
//             Description
//           </label>
//           <textarea
//     className='form-control'
//     id='inputDescription'
//     rows='4' // Adjust the number of rows as needed
//     autoComplete='off'
//     onChange={(e) => setData({ ...data, description: e.target.value })}
//   />

//           {/* <input
//             type='text'
//             className='form-control'
//             id='inputDescription'
//             autoComplete='off'
//             onChange={(e) => setData({ ...data, description: e.target.value })}
//           /> */}
//         </div>
//         <div className='col-12'>
//           <button type='submit' className='btn btn-primary'>
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddJudge;

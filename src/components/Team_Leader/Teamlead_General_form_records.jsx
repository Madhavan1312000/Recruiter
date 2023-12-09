import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Team_Navbar from './Teamlead_Navbar';
import Teamlead_Sidebar from './Teamlead_Sidebar';

const Teamlead_General_form_records = () => {

  const [content, setContent] = useState([]);

  // useEffect(() => {
  //   axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
  //     .then((response) => {
  //      setContent(response.data)
  //      console.log(content)
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  return (
    <div>
      <Team_Navbar></Team_Navbar>
        <div className="d-flex main-container">
            <Teamlead_Sidebar></Teamlead_Sidebar>
            <div class="table-responsive w-100 p-3 bg-white">
              <h6 className='text-danger'>General Form Details</h6>
            <table class="table table-hover table-bordered">
  <thead className=''>
    <tr>
      <th scope="col" className='fw-medium'>Name</th>
      <th scope="col" className='fw-medium'>Email</th>
      <th scope="col" className='fw-medium'>Mobile No</th>
      <th scope="col" className='fw-medium'>Key Skills</th>
      <th scope="col" className='fw-medium'>Experience</th>
    </tr>
  </thead>
        <tbody>
        {/* {content.map((x)=>{
    return(
    <tr style={{fontSize:'15px'}}>
      <td>{x.name}</td>
      <td>{x.city}</td>
      <td>{x.completed}</td>
      <td>Python</td>
      <td>2 Years</td>
    </tr>
    )
  })} */}
  <tr style={{fontSize:'15px'}}>
      <td>Raja</td>
      <td>raja123@gmail.com</td>
      <td>7878898978</td>
      <td>Python</td>
      <td>2 Years</td>
    </tr>
  </tbody>
</table>
</div>
        </div>
    </div>
  )
}

export default Teamlead_General_form_records
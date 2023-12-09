import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Candidates = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div class="table-responsive w-100 p-3 bg-white">
              <h6 className='text-primary'>Candidate Details</h6>
            <table class="table table-hover table-bordered">
  <thead className=''>
    <tr>
      <th scope="col" className='fw-medium'>Name</th>
      <th scope="col" className='fw-medium'>Education</th>
      <th scope="col" className='fw-medium'>Company</th>
      <th scope="col" className='fw-medium'>Total Experience</th>
      <th scope="col" className='fw-medium'>Remarks</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{fontSize:'15px'}}>
      <td>Virat</td>
      <td>M.Tech</td>
      <td>Merida</td>
      <td>1 Year</td>
      <td>Good</td>
    </tr>
    <tr style={{fontSize:'15px'}}>
    <td>Rahul</td>
    <td>MCA</td>
      <td>Abc</td>
      <td>2 Years</td>
      <td>Good</td>
    </tr>
    <tr>
    <td style={{fontSize:'15px'}}>Ram</td>
    <td>B.Tech</td>
      <td>Xyz</td>
      <td>1 Year</td>
      <td>Excellent</td>
    </tr>
    <tr style={{fontSize:'15px'}}>
    <td>Raju</td>
    <td>M.Tech</td>
      <td>Merida</td>
      <td>1 Year</td>
      <td>Good</td>
    </tr>
  </tbody>
</table>
</div>
        </div>
    </div>
  )
}

export default Candidates
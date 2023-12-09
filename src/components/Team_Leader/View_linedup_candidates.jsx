import React from 'react'
import Team_Navbar from './Teamlead_Navbar'
import Teamlead_Sidebar from './Teamlead_Sidebar'

const View_linedup_candidates = () => {
  return (
    <div>
      <Team_Navbar></Team_Navbar>
        <div className="d-flex main-container">
            <Teamlead_Sidebar></Teamlead_Sidebar>
            <div className="p-3 w-100 bg-white">
          <div className="d-flex justify-content-between">
            <h6 className="text-primary">Lined up Candidates</h6>
          </div>
          {/* Content to change */}
<div className="">
          {/* Table */}
          <div class="table-responsive w-100 p-3" id='team1'>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">Name</th>
                  <th scope="col" className="fw-medium">Mobile No</th>
                  <th scope="col" className="fw-medium">Requirement</th>
                  <th scope="col" className="fw-medium">Recruiter</th>
                  <th scope="col" className="fw-medium">Company</th>
                  <th scope="col" className="fw-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Vimal</td>
                  <td>8989909090</td>
                  <td>SQL</td>
                  <td>Kani</td>
                  <td>Self</td>
                  <td><button className='btn btn-sm btn-primary text-white'>Walked In</button></td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                <td>Vikram</td>
                  <td>7678909090</td>
                  <td>Java Developer</td>
                  <td>Raju</td>
                  <td>Google</td>
                  <td><button className='btn btn-sm btn-primary text-white'>Walked In</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>

        </div>
        </div>
    </div>
  )
}

export default View_linedup_candidates
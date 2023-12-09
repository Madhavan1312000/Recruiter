import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Candidatewise_tables = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div className="w-100 bg-white p-3 bg-white">
            <div className="d-flex justify-content-between">
            <h6 className="text-black">Walked In Candidates</h6>
            <div className="text-end w-50">
            <Link to="/live_interviews" className="btn btn-sm btn-primary active-btn">
            <i class="fa-solid fa-backward me-2"></i>General View
            </Link>
            </div>
          </div>

          {/* Table */}
          <div class="table-responsive w-100 p-3">
            <div className='d-flex justify-content-between'>
            <span>Shravan</span><span className=''>Recruiter 1</span>
            </div>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">Rounds</th>
                  <th scope="col" className="fw-medium">
                    Interviewer
                  </th>
                  <th scope="col" className="fw-medium">
                    Remarks
                  </th>
                  <th scope="col" className="fw-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Written</td>
                  <td>Maxi</td>
                  <td>Good</td>
                  <td>Completed</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                <td>Written</td>
                  <td>Virat</td>
                  <td>Good</td>
                  <td>Completed</td>
                </tr>
              </tbody>
              <tfoot className=''>
                <Link to="/attendpage"><button className='text-white border-0 btn btn-sm bg-warning' disabled>Attend</button></Link>
              </tfoot>
            </table>
          </div>

          <div class="table-responsive w-100 p-3">
            <div className='d-flex justify-content-between'>
            <span>Shravan</span><span className=''>Recruiter 1</span>
            </div>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">Rounds</th>
                  <th scope="col" className="fw-medium">
                    Interviewer
                  </th>
                  <th scope="col" className="fw-medium">
                    Remarks
                  </th>
                  <th scope="col" className="fw-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Written</td>
                  <td>Maxi</td>
                  <td>Good</td>
                  <td>Completed</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                <td>Written</td>
                  <td>Virat</td>
                  <td>Good</td>
                  <td>Completed</td>
                </tr>
              </tbody>
              <tfoot className=''>
              <Link to="/attendpage"><button className='text-white border-0 btn btn-sm bg-warning'>Attend</button></Link>
              </tfoot>
            </table>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Candidatewise_tables
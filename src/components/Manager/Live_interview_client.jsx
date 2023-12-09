import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import Report_form from './Forms/Report_form'

const Live_interview_client = () => {
  return (
    <div>
        <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div className="p-3 w-100 bg-white">
          <div className="">
            <h6 className="text-black">Live Interviews - <span className='text-primary'>Client Company</span></h6>
          </div>
          <div class=" mt-3">
            <h6>Google Company</h6>
          </div>
          {/* Content to change */}
<div className="">
<div className="d-flex justify-content-between mt-3">
            <h6 className="">Technical Department : <span className='text-primary'>React</span></h6>
            <a className="text-white bg-primary btn btn-sm" data-bs-toggle="modal" data-bs-target="#report_form">
              Generate Report
            </a>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-evenly py-3 px-2 border mt-2 bg-light">
            <div className="mb-2">
              <span className="text-danger d-block">Position:</span>
              <span className="text-black d-block">Developer</span>
            </div>
            <div className="mb-2">
              <span className="text-danger d-block">Experience:</span>
              <span className="text-black d-block">2 Years</span>
            </div>
          </div>

          {/* Table 1 */}
          <div class="table-responsive w-100 p-3">
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-normal"></th>
                  <th scope="col" className="fw-medium">
                    Recruiter 1
                  </th>
                  <th scope="col" className="fw-medium">
                    Recruiter 2
                  </th>
                  <th scope="col" className="fw-medium">
                    Recruiter 3
                  </th>
                  <th scope="col" className="fw-medium">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Contacted</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Linedup</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Walked In</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 3 */}
          <h6 className="text-primary">Walked In Candidates</h6>
          <div class="dropdown mt-3">
  <a class="btn btn-primary bg-gradient text-white dropdown-toggle btn-sm" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fa-solid fa-users-line me-2"></i>Recruiters
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#recruiter1"><i class="fa-solid fa-user-large fa-sm me-2"></i>Recruiter 1</a></li>
    <li><a class="dropdown-item" href="#recruiter2"><i class="fa-solid fa-user-large fa-sm me-2"></i>Recruiter 2</a></li>
    <li><a class="dropdown-item" href="#recruiter3"><i class="fa-solid fa-user-large fa-sm me-2"></i>Recruiter 3</a></li>
  </ul>
</div>
          <div class="table-responsive w-100 p-3" id='recruiter1'>
            <span>Recruiter 1</span>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">
                    Name
                  </th>
                  <th scope="col" className="fw-medium">
                    Qualification
                  </th>
                  <th scope="col" className="fw-medium">
                    Experience
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raju</td>
                  <td>MCA</td>
                  <td>1 Year</td>
                  </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raja</td>
                  <td>BE</td>
                  <td>2 Years</td>
                 </tr>
              </tbody>
            </table>
          </div>

          <div class="table-responsive w-100 p-3" id='recruiter2'>
            <span>Recruiter 2</span>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">
                    Name
                  </th>
                  <th scope="col" className="fw-medium">
                    Qualification
                  </th>
                  <th scope="col" className="fw-medium">
                    Experience
                  </th>
                 </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raju</td>
                  <td>MCA</td>
                  <td>1 Year</td>
                  </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raja</td>
                  <td>BE</td>
                  <td>2 Years</td>
                 </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
        </div>
    </div>

    {/* Generate Report Form */}
    <Report_form></Report_form>
    </div>
  )
}

export default Live_interview_client
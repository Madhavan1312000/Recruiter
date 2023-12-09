import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Teams = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div className="w-100 px-3 py-1 bg-white">
            <div class="dropdown mt-3">
  <a class="btn btn-primary text-white dropdown-toggle btn-sm" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fa-solid fa-users me-2"></i>Teams
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#Team1"><i class="fa-solid fa-user-group me-2"></i>Team 1</a></li>
    <li><a class="dropdown-item" href="#Team2"><i class="fa-solid fa-user-group me-2"></i>Team 2</a></li>
  </ul>
</div>

<div className="">
<div className="d-flex justify-content-between mt-3">
            <h6 className="">Team 1 : <span className='text-primary'>Virat</span></h6>
            <Link to="/view_teams" className="text-white bg-primary btn btn-sm">
              View Team
            </Link>
          </div>
          <div>
            <span>Assigned Requirements : <span>React,Django</span></span>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-evenly py-3 px-2 border mt-2 bg-light">
            <div className="mb-2">
              <span className="text-black d-block">Position:</span>
              <span className="text-primary d-block">Developer</span>
            </div>
            <div className="mb-2">
              <span className="text-black d-block">Experience Required:</span>
              <span className="text-primary d-block">0 to 2 Years</span>
            </div>
            <div className="mb-2">
              <span className="text-black d-block">Qualification Required:</span>
              <span className="text-primary d-block">Any Degree</span>
            </div>
          </div>

          <div class="dropdown mt-3">
          <a class="btn btn-primary bg-gradient text-white dropdown-toggle btn-sm" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-clipboard-list me-2"></i>Requirements
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#react"><i class="fa-solid fa-caret-down fa-rotate-270 me-2"></i>React</a></li>
    <li><a class="dropdown-item" href="#django"><i class="fa-solid fa-caret-down fa-rotate-270 me-2"></i>Django</a></li>
  </ul>
</div>
          {/* Table 1 */}
          <div class="table-responsive w-100 p-3" id='react'>
            <h6>React</h6>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-normal"></th>
                  <th scope="col" className="fw-medium">
                    Contacted
                  </th>
                  <th scope="col" className="fw-medium">
                    Linedup
                  </th>
                  <th scope="col" className="fw-medium">
                    Walked In
                  </th>
                  <th scope="col" className="fw-medium">
                    Offered
                  </th>
                  <th scope="col" className="fw-medium">
                    Rejected
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td role='row'>Recruiter 1</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                  <td>34</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                <td role='row'>Recruiter 2</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                  <td>34</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 2 */}
          <div class="table-responsive w-100 p-3" id='django'>
            <h6>Django</h6>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-normal"></th>
                  <th scope="col" className="fw-medium">
                    Contacted
                  </th>
                  <th scope="col" className="fw-medium">
                    Linedup
                  </th>
                  <th scope="col" className="fw-medium">
                    Walked In
                  </th>
                  <th scope="col" className="fw-medium">
                    Offered
                  </th>
                  <th scope="col" className="fw-medium">
                    Rejected
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td role='row'>Recruiter 1</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                  <td>34</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                <td role='row'>Recruiter 2</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                  <td>34</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="dropdown mt-3">
          <a class="btn btn-primary bg-gradient text-white dropdown-toggle btn-sm" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-users-line me-2"></i>Recruiters
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#recruiter1"><i class="fa-solid fa-user-large fa-sm me-2"></i>Recruiter 1</a></li>
    <li><a class="dropdown-item" href="#recruiter2"><i class="fa-solid fa-user-large fa-sm me-2"></i>Recruiter 2</a></li>
  </ul>
</div>

<h6 className="mt-2">Lined Up Candidates: <span className='text-primary'>React</span></h6>
          <div class="table-responsive w-100 p-3">
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

          <div class="table-responsive w-100 p-3">
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
  )
}

export default Teams
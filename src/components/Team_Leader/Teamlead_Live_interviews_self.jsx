import React from 'react'
import { Link } from 'react-router-dom'
import Team_Navbar from './Teamlead_Navbar'
import Teamlead_Sidebar from './Teamlead_Sidebar'

const Teamlead_Live_interviews_self = () => {
  return (
    <div>
      <Team_Navbar></Team_Navbar>
        <div className="d-flex main-container">
            <Teamlead_Sidebar></Teamlead_Sidebar>
            <div className="p-3 w-100 bg-white">
          <div className="">
            <h6 className="text-danger">Live Interviews</h6>
          </div>
          <div class="d-flex flex-wrap justify-content-evenly mt-3">
            <a href="" class="requirements text-white p-2 mt-2">
              React
            </a>
            <a href="" class="requirements text-white p-2 mt-2">
              Accountant
            </a>
            <a href="" class="requirements text-white p-2 mt-2">
              Python
            </a>
            <a href="" class="requirements text-white p-2 mt-2">
              Java
            </a>
            <a href="" class="requirements text-white p-2 mt-2">
              Javascript
            </a>
            
          </div>
          {/* Content to change */}
<div className="">
<div className="d-flex justify-content-between mt-3">
            <h6 className="">Technical Department : <span className='text-primary'>React</span></h6>
            <Link to="/teamlead_candidate_wise_tables" className="text-danger">
              View Candidate Wise
            </Link>
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
                  <th scope="col" className="fw-medium">
                    Level of Interview
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raju</td>
                  <td>MCA</td>
                  <td>1 Year</td>
                  <td>Written Test</td>
                  <td><Link to="/teamlead_attend_page"><button className='btn btn-sm btn-warning text-white'>Attend</button></Link></td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raja</td>
                  <td>BE</td>
                  <td>2 Years</td>
                  <td>HR Round</td>
                  <td><Link to="/teamlead_attend_page"><button className='btn btn-sm btn-warning text-white'>Attend</button></Link></td>
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
                  <th scope="col" className="fw-medium">
                    Level of Interview
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raju</td>
                  <td>MCA</td>
                  <td>1 Year</td>
                  <td>Written Test</td>
                  <td><Link to="/teamlead_attend_page"><button className='btn btn-sm btn-warning text-white'>Attend</button></Link></td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raja</td>
                  <td>BE</td>
                  <td>2 Years</td>
                  <td>HR Round</td>
                  <td><Link to="/teamlead_attend_page"><button className='btn btn-sm btn-warning text-white'>Attend</button></Link></td>
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

export default Teamlead_Live_interviews_self
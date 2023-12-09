import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Closed_requirement = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div className="p-3 w-100 bg-white">
            <h6 className="">Closed Requirement : <span className='text-primary'>Java Developer</span></h6>
          {/* Content to change */}
<div className="">
          <div className="mt-3">
            <nav class="navbar navbar-expand-lg shadow-none p-0">
              <div class="container-fluid ps-0">
                <span className="text-black">
                  Assigned To :
                </span>
                <button
                  class="navbar-toggler shadow-none border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="">
                    <i class="fa-solid fa-list"></i>
                  </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav d-flex justify-content-between">
                    <a class="nav-link text-black" href="#" data-bs-toggle="modal" data-bs-target="#edit_requirement">
                      Team 1
                    </a>
                    <a class="nav-link text-black" href="#">
                      Team 2
                    </a>
                    <a class="nav-link text-black" href="#" data-bs-toggle="modal" data-bs-target="#holdModal">
                      Team 3
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-3 px-2 border mt-2 bg-light">
            <div className="mb-2">
              <span className="text-black d-block">Position:</span>
              <span className="text-black d-block">Developer</span>
            </div>
            <div className="mb-2">
              <span className="text-black d-block">Experience:</span>
              <span className="text-black d-block">2 Years</span>
            </div>
            <div className="mb-2">
              <span className="text-black">Qualification Required:</span>
              <span className="text-black d-block">Any Degree</span>
            </div>
          </div>

          {/* Tables */}
<div class="dropdown mt-4">
  <a class="btn btn-primary bg-gradient text-white dropdown-toggle btn-sm" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fa-solid fa-users me-2"></i>Teams
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#team1"><i class="fa-solid fa-user-group me-2"></i>Team 1</a></li>
    <li><a class="dropdown-item" href="#team2"><i class="fa-solid fa-user-group me-2"></i>Team 2</a></li>
    <li><a class="dropdown-item" href="#team3"><i class="fa-solid fa-user-group me-2"></i>Team 3</a></li>
  </ul>
</div>
          <div class="table-responsive w-100 p-3" id='team1'>
            <h6>Team 1</h6>
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
                  <td>Attended</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Selected</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Rejected</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                </tr>
              </tbody>
            </table>
          </div>

{/* Team 2 */}
<div class="table-responsive w-100 p-3" id='team2'>
            <h6>Team 2</h6>
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
                  <td>Attended</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Selected</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Rejected</td>
                  <td>20</td>
                  <td>10</td>
                  <td>10</td>
                  <td>40</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h6 className="text-primary">Offered Candidates</h6>
          <div class="table-responsive w-100 p-3">
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">
                    Name
                  </th>
                  <th scope="col" className="fw-medium">
                    Company
                  </th>
                  <th scope="col" className="fw-medium">
                    Salary Package
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raju</td>
                  <td>Abc</td>
                  <td>25000</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raja</td>
                  <td>Xyz</td>
                  <td>30000</td>
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

export default Closed_requirement
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Create_requirement from "./Forms/Create_requirement";
import Edit_requirement from "./Forms/Edit_requirement";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Activerequirements = () => {

  return (
    <div>
      <Navbar></Navbar>
      <div className="d-flex main-container">
        <Sidebar></Sidebar>
        <div className="p-3 w-100 bg-white">
          <div className="d-flex justify-content-between">
            <h6 className="text-black">Active Requirements</h6>
            <div className="text-end w-50">
            <button className="btn btn-sm btn-primary active-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <i class="fa-solid fa-plus me-2"></i>Create
            </button>
            <button className="btn btn-sm btn-primary ms-0 mt-2 mt-sm-0 ms-sm-2 active-btn">
            <i class="fa-solid fa-clipboard-list me-2"></i>Job Description
            </button>
            </div>
          </div>
          <div class="d-flex flex-wrap justify-content-between mt-3">
            <a href="" class="requirements text-white p-2">
              Marketing Executive
            </a>
            <a href="" class="requirements text-white p-2">
              Accountant
            </a>
            <a href="" class="requirements text-white p-2 mt-2 mt-sm-0">
              Web Designer
            </a>
            <a href="" class="requirements text-white p-2 mt-2 mt-sm-0">
              Telecaller
            </a>
          </div>
          {/* Content to change */}
<div className="">
          <div className="mt-3">
            <nav class="navbar navbar-expand-lg shadow-none p-0">
              <div class="container-fluid ps-0">
                <span className="">
                  Requirement :
                  <span className="text-primary">Marketing Executive</span>
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
                  <div class="navbar-nav ms-auto d-flex justify-content-between">
                    <a class="nav-link text-black" href="#" data-bs-toggle="modal" data-bs-target="#edit_requirement">
                      Edit
                    </a>
                    <a class="nav-link text-black" href="#">
                      Reassign
                    </a>
                    <a class="nav-link text-black" href="#" data-bs-toggle="modal" data-bs-target="#holdModal">
                      Hold
                    </a>
                    <a class="nav-link text-black" href="#" data-bs-toggle="modal" data-bs-target="#closedModal">
                      Close
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-3 px-2 border mt-2 bg-light">
            <div className="mb-2">
              <span className="text-black d-block">Position:</span>
              <span className="text-primary d-block">Developer</span>
            </div>
            <div className="mb-2">
              <span className="text-black d-block">Experience:</span>
              <span className="text-primary d-block">2 Years</span>
            </div>
            <div className="mb-2">
              <span className="text-black">Qualification Required:</span>
              <span className="text-primary d-block">Any Degree</span>
            </div>
            <Link to="/matched_records"><button className="btn btn-sm btn-primary mt-2 mt-sm-0 h-50">
              Show Matched Records
            </button>
            </Link>
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
              </tbody>
            </table>
          </div>

          {/* Table 3 */}
          <h6 className="text-primary">Lined Up Candidates</h6>
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

{/* Create Requirement */}
<Create_requirement></Create_requirement>

{/* Edit Requirement */}
<Edit_requirement></Edit_requirement>

{/* Hold Modal */}
<div class="modal fade" id="holdModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <h5 className="text-center mt-3 text-success">This requirement is successfully Hold !!!</h5>
        <h6 className="text-center">This is hidden currently</h6>
        <div className="text-end">
        <button type="button" class="btn btn-primary btn-sm" data-bs-dismiss="modal">Done</button>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Closed Modal */}
<div class="modal fade" id="closedModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <h6 className="text-center mt-3 text-success">This requirement is successfully Moved to Closed !!!</h6>
        <div className="text-end">
        <button type="button" class="btn btn-primary btn-sm mt-2" data-bs-dismiss="modal">Done</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Activerequirements;

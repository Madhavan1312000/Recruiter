import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Reactivating_requirement from './Forms/Reactivating_requirement'

const Hold_detailedpage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="d-flex main-container">
        <Sidebar></Sidebar>
        <div className="w-100 bg-white p-3">
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
          </div>
          <div className='mt-5 text-end'><button className='btn btn-sm btn-primary text-white' data-bs-toggle="modal" data-bs-target="#reactivate_requirement"><i class="fa-solid fa-check me-2"></i>Reactivate Requirement</button></div>
          </div>
        </div>
      </div>

      {/* Reactivate Modal */}
      <Reactivating_requirement></Reactivating_requirement>
    </div>
  )
}

export default Hold_detailedpage
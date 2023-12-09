import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
        <div className="border-end d-none d-lg-block h-100" style={{width:'200px'}}>
            <div className="d-flex flex-column sidebar">
                <h5 className="p-3 fw-medium fs-6 ps-3" href="#!">Name</h5>
                <Link to="/manager_dashboard" className=" p-3 ps-3 text-decoration-none text-dark" href="#">Dashboard</Link>
                <a
                  className="p-3 ps-3 dropdown-toggle text-decoration-none text-dark"
                  data-bs-toggle="collapse"
                  href="#candidates"
                  role="button"
                >
                  Candidates
                </a>
                <ul className="collapse ps-3" id="candidates">
                  <li className='sidebar_dropdown'>
                    <Link to="/general_details" className='text-decoration-none text-dark'><i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>General Form Records</Link>
                  </li>
                  <li className='sidebar_dropdown'>
                    <Link to="/candidates" className='text-decoration-none text-dark'><i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Candidates</Link>
                  </li>
                </ul>
                <a
                  className="p-3 ps-3 dropdown-toggle text-decoration-none text-dark className='text-decoration-none text-dark' text-decoration-none text-dark"
                  data-bs-toggle="collapse"
                  href="#requirements"
                  role="button"
                >
                  Requirements
                </a>
                <ul className="collapse ps-3" id="requirements">
                  <li className='sidebar_dropdown'>
                    <Link to="/active_requirements" className='text-decoration-none text-dark '><i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Active</Link>
                  </li>
                  <li className='sidebar_dropdown  mt-1'>
                   <Link to="/hold_requirements"><a href="#" className='text-decoration-none text-dark'> <i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Hold</a></Link>
                  </li>
                  <li className='sidebar_dropdown mt-1'>
                  <i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i> <a
                  className="dropdown-toggle text-decoration-none text-dark className='text-decoration-none text-dark' text-decoration-none text-dark"
                  data-bs-toggle="collapse"
                  href="#live_interviews"
                  role="button"
                >
                  Live Interviews
                </a>
                <ul className="collapse ps-3" id="live_interviews">
                  <li className='sidebar_dropdown'>
                    <Link to="/live_interviews_self" className='text-decoration-none text-primary'><i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Self</Link>
                  </li>
                  <li className='sidebar_dropdown  mt-1'>
                   <Link to="/live_interviews_client" className='text-decoration-none text-primary'> <i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Client</Link>
                  </li>
                  </ul>
                  </li>
                  <li className='sidebar_dropdown mt-1'>
                    <Link to="/offered_candidates"><a href="#" className='text-decoration-none text-dark'> <i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Offered Candidates</a></Link>
                  </li>
                  <li className='sidebar_dropdown mt-1'>
                    <Link to="/closed_mainpage"><a href="#" className='text-decoration-none text-dark'><i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Closed</a></Link>
                  </li>
                </ul>
                <Link to="/teams" className="p-3 ps-3 text-decoration-none text-dark">Teams</Link>
                <Link to="/clients" className="p-3 ps-3 text-decoration-none text-dark">Clients</Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
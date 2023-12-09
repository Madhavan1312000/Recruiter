import React from 'react'
import { Link } from 'react-router-dom'

const Teamlead_Sidebar = () => {
  return (
    <div>
        <div className="border-end d-none d-lg-block h-100" style={{width:'200px'}}>
            <div className="d-flex flex-column sidebar">
                <h5 className="p-3 fw-medium fs-6 ps-3" href="#!">Name</h5>
                <Link to="/teamlead_dashboard" className=" p-3 ps-3 text-decoration-none text-dark" href="#">Dashboard</Link>
                <a className="p-3 ps-3 dropdown-toggle text-decoration-none text-dark" data-bs-toggle="collapse" href="#candidates" role="button">
                  Candidates
                </a>
                <ul className="collapse ps-3" id="candidates">
                  <li className='sidebar_dropdown'>
                    <Link to="/teamlead_general_form_records" className='text-decoration-none text-dark'><i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>General Form Records</Link>
                  </li>
                  <li className='sidebar_dropdown'>
                    <Link to="/teamlead_candidate_records" className='text-decoration-none text-dark'><i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Candidates</Link>
                  </li>
                </ul>
                <a className="p-3 ps-3 dropdown-toggle text-decoration-none text-dark className='text-decoration-none text-dark' text-decoration-none text-dark" data-bs-toggle="collapse"
                  href="#requirements" role="button">
                  Requirements
                </a>
                <ul className="collapse ps-3" id="requirements">
                  <li className='sidebar_dropdown'>
                    <Link to="/teamlead_active_requirements" className='text-decoration-none text-dark '><i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Active</Link>
                  </li>
                  <li className='sidebar_dropdown mt-1'>
                  <i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i> 
                  <a className="dropdown-toggle text-decoration-none text-dark className='text-decoration-none text-dark' text-decoration-none text-dark" data-bs-toggle="collapse"
                  href="#live_interviews" role="button">
                  Live Interviews
                </a>
                <ul className="collapse ps-3" id="live_interviews">
                  <li className='sidebar_dropdown'>
                    <Link to="/teamlead_live_interviews_self" className='text-decoration-none text-primary'><i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Self</Link>
                  </li>
                  <li className='sidebar_dropdown  mt-1'>
                   <Link to="/teamlead_live_interviews_client" className='text-decoration-none text-primary'> <i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Client</Link>
                  </li>
                  </ul>
                  </li>
                  <li className='sidebar_dropdown mt-1'>
                    <Link to="/view_linedup_candidates"><a href="#" className='text-decoration-none text-dark'> <i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>View Linedup Candidates</a></Link>
                  </li>
                </ul>

                <a className="p-3 ps-3 dropdown-toggle text-decoration-none text-dark" data-bs-toggle="collapse" href="#teams" role="button">
                  Team
                </a>
                <ul className="collapse ps-3" id="teams">
                  <li className='sidebar_dropdown'>
                    <Link to="" className='text-decoration-none text-dark'><i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Recruiter 1</Link>
                  </li>
                  <li className='sidebar_dropdown'>
                    <Link to="" className='text-decoration-none text-dark'><i class="fa-solid fa-caret-up fa-rotate-90 me-1"></i>Recruiter 2</Link>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Teamlead_Sidebar
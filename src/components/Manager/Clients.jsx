import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Clients = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div className="w-100 p-3 bg-white">
                <h5 className='text-center text-primary'>CLIENTS</h5>

            <div class="d-flex flex-wrap justify-content-between mt-3">
            <Link to="/client_specification" class="bg-primary bg-gradient text-white p-2 fw-medium clients_data"><i class="fa-brands fa-google-plus me-2"></i>Google</Link>
            <Link to="/client_specification" class="bg-primary bg-gradient text-white p-2 fw-medium clients_data"><i class="fa-brands fa-amazon me-2"></i>Amazon</Link>
            <Link to="/client_specification" class="bg-primary bg-gradient text-white p-2 fw-medium clients_data mt-2 mt-sm-0"><i class="fa-brands fa-facebook me-2"></i>Facebook</Link>
            <Link to="/client_specification" class="bg-primary bg-gradient text-white p-2 fw-medium clients_data mt-2 mt-sm-0"><i class="fa-brands fa-apple me-2"></i>Apple</Link>
            <Link to="/client_specification" class="bg-primary bg-gradient text-white p-2 fw-medium clients_data mt-2 mt-sm-0"><i class="fa-brands fa-windows me-2"></i>Microsoft</Link>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Clients
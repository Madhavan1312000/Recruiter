import React from 'react'
import { Link } from 'react-router-dom'
import Team_Navbar from './Teamlead_Navbar'
import Teamlead_Sidebar from './Teamlead_Sidebar'
import Walkedin_status_forms from './Form/Offer_details'

const Teamlead_Live_interview_client = () => {
  return (
    <div>
        <div>
            <Team_Navbar></Team_Navbar>
        <div className="d-flex main-container">
            <Teamlead_Sidebar></Teamlead_Sidebar>
            <div className="p-3 w-100 bg-white">
          <div className="">
            <h6 className="text-black">List of walked in Candidates</h6>
          </div>
          <div class=" mt-3">
            <h6>Company : <span className='text-primary'>Google</span></h6>
          </div>
          {/* Content to change */}
<div className="">
          <div className="d-flex flex-column flex-sm-row justify-content-evenly py-3 px-2 border mt-2 bg-light">
            <div className="mb-2">
              <span className="text-danger d-block">Position:</span>
              <span className="text-black d-block">Developer</span>
            </div>
            <div className="mb-2">
              <span className="text-danger d-block">Number of Positions:</span>
              <span className="text-black d-block">8</span>
            </div>
          </div>

          {/* Table 1 */}
          <div class="table-responsive w-100 p-3">
            <table class="table table-hover border">
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Harish</td>
                  <td><button className='btn btn-sm btn-primary text-white' data-bs-toggle="modal" data-bs-target="#offer_details">Offered</button></td>
                  <td><button className='btn btn-sm btn-primary text-white' data-bs-toggle="modal" data-bs-target="#contract_details">Contract</button></td>
                  <td><button className='btn btn-sm btn-primary text-white' data-bs-toggle="modal" data-bs-target="#rejected_details">Rejected</button></td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                <td>Yogendra</td>
                  <td><button className='btn btn-sm btn-primary text-white' data-bs-toggle="modal" data-bs-target="#offer_details">Offered</button></td>
                  <td><button className='btn btn-sm btn-primary text-white' data-bs-toggle="modal" data-bs-target="#contract_details">Contract</button></td>
                  <td><button className='btn btn-sm btn-primary text-white' data-bs-toggle="modal" data-bs-target="#rejected_details">Rejected</button></td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                <td>Murali</td>
                  <td><button className='btn btn-sm btn-primary text-white'>Offered</button></td>
                  <td><button className='btn btn-sm btn-primary text-white'>Contract</button></td>
                  <td><button className='btn btn-sm btn-primary text-white'>Rejected</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
        </div>
    </div>

    {/* Offer Details */}
    <Walkedin_status_forms></Walkedin_status_forms>
    </div>
  )
}

export default Teamlead_Live_interview_client
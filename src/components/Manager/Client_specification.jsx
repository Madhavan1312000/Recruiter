import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Client_specification = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div className="w-100 p-3 bg-white">
                <h5 className='text-primary'>Google</h5>
                
                {/* Table */}
            <div class="table-responsive w-100 p-3">
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">Date</th>
                  <th scope="col" className="fw-medium">Requirement</th>
                  <th scope="col" className="fw-medium">Walked In</th>
                  <th scope="col" className="fw-medium">Selected</th>
                  <th scope="col" className="fw-medium">Billing Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>06-12-2023</td>
                  <td>Python</td>
                  <td>10</td>
                  <td>6</td>
                  <td>Rs : </td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Client_specification
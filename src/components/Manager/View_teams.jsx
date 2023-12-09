import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const View_teams = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div className="w-100 p-2 px-3 bg-white">
                <h5 className='text-danger'>Team 1</h5>
                <h6>Team Leader : <span className='text-primary'>Manoj</span></h6>

                {/* Table */}
            <div class="table-responsive w-100 p-3" id='react'>
            <h6>Recruiters</h6>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">Name</th>
                  <th scope="col" className="fw-medium">
                    Monthly Linedup
                  </th>
                  <th scope="col" className="fw-medium">
                   Monthly Walked In
                  </th>
                  <th scope="col" className="fw-medium">
                   Monthly Selected
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td role='row'>Rajesh</td>
                  <td>100</td>
                  <td>70</td>
                  <td>10</td>
                  <td><button className='btn btn-sm btn-info text-white'>Move to Different Team</button></td>
                  <td><button className='btn btn-sm btn-info text-white'>Promote as Team Leader</button></td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                <td role='row'>Ramesh</td>
                  <td>90</td>
                  <td>70</td>
                  <td>10</td>
                  <td><button className='btn btn-sm btn-info text-white'>Move to Different Team</button></td>
                  <td><button className='btn btn-sm btn-info text-white'>Promote as Team Leader</button></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Total Records Table */}
          <div class="table-responsive w-100 p-3" id='react'>
            <h6>Total Records</h6>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">
                    Monthly Linedup
                  </th>
                  <th scope="col" className="fw-medium">
                   Monthly Walked In
                  </th>
                  <th scope="col" className="fw-medium">
                   Monthly Selected
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>100</td>
                  <td>70</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
        </div>
    </div>
  )
}

export default View_teams
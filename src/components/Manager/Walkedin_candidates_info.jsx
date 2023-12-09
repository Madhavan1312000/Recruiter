import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Walkedin_candidates_info = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div className="p-3 w-100 bg-white">
          <div className="">
            <h6 className="text-black">Walked In Candidates Information</h6>
          </div>
          <div class=" mt-3">
            <h6>Company : <span className='text-primary'>Google</span></h6>
          </div>
          {/* Content to change */}
<div className="">
          <div className="d-flex flex-column flex-sm-row justify-content-evenly py-3 px-2 border mt-2 bg-light">
            <div className="mb-2">
              <span className="text-danger d-block">Position:</span>
              <span className="text-black d-block">Java Developer</span>
            </div>
            <div className="mb-2">
              <span className="text-danger d-block">Number of Positions :</span>
              <span className="text-black d-block">8</span>
            </div>
          </div>

          {/* Table 1 */}
          <div class="table-responsive w-100 p-3">
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">Name</th>
                  <th scope="col" className="fw-medium">Status</th>
                  <th scope="col" className="fw-medium">Remarks</th>
                  <th scope="col" className="fw-medium">Salary</th>
                  <th scope="col" className="fw-medium">Date of Joining</th>
                  <th scope="col" className="fw-medium">Recruiter Name</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Rajesh</td>
                  <td>Selected</td>
                  <td>Good</td>
                  <td>30000</td>
                  <td>07-12-2023</td>
                  <td>Kani</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                <td>Yoga</td>
                  <td>Selected</td>
                  <td>Good in SQL</td>
                  <td>35000</td>
                  <td>07-12-2023</td>
                  <td>Karthik</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 3 */}
          <h6 className="text-danger">Rejected Candidates</h6>
          <div class="table-responsive w-100 p-3">
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">
                    Name
                  </th>
                  <th scope="col" className="fw-medium">
                    Remarks
                  </th>
                  <th scope="col" colspan="2" className="fw-medium">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raju</td>
                  <td>Good in SQl. Not fit for the Position</td>
                  <td><button className='btn btn-sm btn-primary'>Consider</button></td>
                  <td><button className='btn btn-sm btn-primary'>Not Consider</button></td>
                  </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raja</td>
                  <td>No Technical skills</td>
                  <td><button className='btn btn-sm btn-primary'>Consider</button></td>
                  <td><button className='btn btn-sm btn-primary'>Not Consider</button></td>
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

export default Walkedin_candidates_info
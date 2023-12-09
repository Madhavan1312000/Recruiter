import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import EducationForm from '../Detailed_form'

const Matched_records = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div className="w-100 p-3 bg-white">
               <h6 className='text-black'>Matched Records for Marketing Executive</h6>
                <div class="table-responsive w-100 p-3" id='team1'>
            <h6>Team 1</h6>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">
                    Name
                  </th>
                  <th scope="col" className="fw-medium">
                    Mobile No
                  </th>
                  <th scope="col" className="fw-medium">
                    Experience
                  </th>
                  <th scope="col" colspan="3" className="fw-medium text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Virat</td>
                  <td>8978898989</td>
                  <td>2 Years</td>
                  <td><button className='btn btn-sm bg-primary bg-gradient text-white' data-bs-toggle="modal" data-bs-target="#detailed_form">Update</button></td>
                  <td><button className='btn btn-sm bg-primary text-white'>Lineup</button></td>
                  <td><button className='btn btn-sm bg-primary text-white'>Not Lineup</button></td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Maxi</td>
                  <td>7078898989</td>
                  <td>1 Year</td>
                  <td><button className='btn btn-sm bg-primary bg-gradient text-white' data-bs-toggle="modal" data-bs-target="#detailed_form">Update</button></td>
                  <td><button className='btn btn-sm bg-primary text-white'>Lineup</button></td>
                  <td><button className='btn btn-sm bg-primary text-white'>Not Lineup</button></td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
        </div>

        {/* Detailed Form */}
        <EducationForm></EducationForm>
    </div>
  )
}

export default Matched_records
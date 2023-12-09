import React from 'react'
import Team_Navbar from './Teamlead_Navbar'
import Teamlead_Sidebar from './Teamlead_Sidebar'
import General_screening_form from '../Manager/Forms/General_screening_form'
import Interview_Forms from '../Manager/Forms/Interview_Forms'
import Group_discussion_form from '../Manager/Forms/Group_discussion_form'
import Face_to_face_form from '../Manager/Forms/Face_to_face_form'

const Teamlead_Attendpage = () => {
  return (
    <div>
      <Team_Navbar></Team_Navbar>
        <div className="d-flex main-container">
            <Teamlead_Sidebar></Teamlead_Sidebar>
            <div className="w-100 p-2 px-3 bg-white">
            <div className="d-flex justify-content-between">
            <h6 className="">Interviewee : <span className='text-primary'>Rajesh</span></h6>
            <div className="text-end w-50">
            <h6 className="">Interviewer : <span className='text-primary'>Team Leader</span></h6>
            </div>
          </div>

          {/* Table */}
          <div class="table-responsive w-100 p-3">
            <div className='d-flex justify-content-between'>
            <span>Shravan</span><span className=''>Recruiter 1</span>
            </div>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">Rounds</th>
                  <th scope="col" className="fw-medium">
                    Interviewer
                  </th>
                  <th scope="col" className="fw-medium">
                    Remarks
                  </th>
                  <th scope="col" className="fw-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Written</td>
                  <td>Maxi</td>
                  <td>Good</td>
                  <td>Completed</td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                <td>Written</td>
                  <td>Virat</td>
                  <td>Good</td>
                  <td>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Rounds */}
          <div class="dropdown">
  <a class="btn btn-primary bg-gradient text-white dropdown-toggle btn-sm" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fa-solid fa-clipboard-question me-2"></i>Rounds
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href='' data-bs-toggle="modal" data-bs-target="#general_screening_form"><i class="fa-solid fa-share me-2"></i>General Screening</a></li>
    <li><a class="dropdown-item" href='' data-bs-toggle="modal" data-bs-target="#aptitude_form"><i class="fa-solid fa-share me-2"></i>Quantitative Aptitude</a></li>
    <li><a class="dropdown-item" href='' data-bs-toggle="modal" data-bs-target="#verbal_form"><i class="fa-solid fa-share me-2"></i>Verbal Ability</a></li>
    <li><a class="dropdown-item" href='' data-bs-toggle="modal" data-bs-target="#reasoning_form"><i class="fa-solid fa-share me-2"></i>Reasoning Ability</a></li>
    <li><a class="dropdown-item" href='' data-bs-toggle="modal" data-bs-target="#technical1_form"><i class="fa-solid fa-share me-2"></i>Technical 1 - Written</a></li>
    <li><a class="dropdown-item" href='' data-bs-toggle="modal" data-bs-target="#technical2_form"><i class="fa-solid fa-share me-2"></i>Technical 2 - Written</a></li>
    <li><a class="dropdown-item" href='' data-bs-toggle="modal" data-bs-target="#group_discussion_form"><i class="fa-solid fa-share me-2"></i>Group Discussion</a></li>
    <li><a class="dropdown-item" href='' data-bs-toggle="modal" data-bs-target="#face_to_face_form"><i class="fa-solid fa-share me-2"></i>Face to Face</a></li>
  </ul>
</div>
            </div>
        </div>

         {/* General Screening Modal */}
         <General_screening_form></General_screening_form>

{/* Interview Form */}
<Interview_Forms></Interview_Forms>

{/* Group Discussion Form */}
<Group_discussion_form></Group_discussion_form>

{/* Face to Face Interview Form */}
<Face_to_face_form></Face_to_face_form>
    </div>
  )
}

export default Teamlead_Attendpage
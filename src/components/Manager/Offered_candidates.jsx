import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Offered_candidates = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div className="w-100 p-0 p-sm-3 bg-white">
            <h5 className="text-primary m-3 text-center">Offered Candidates</h5>
          <div class="mt-4 mx-auto d-flex justify-content-between">
            <h6 className="">Technical Department : <span className='text-primary'>React</span></h6>
            <span>Date : <span>05-12-2023</span></span>
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
            <div className="mb-2">
              <span className="text-black">Skills Required:</span>
              <span className="text-primary d-block">React</span>
            </div>
          </div>

          <div class="dropdown mt-3">
  <a class="btn btn-primary bg-gradient text-white dropdown-toggle btn-sm" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Candidates
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#selectedcandidates">Selected Candidates</a></li>
    <li><a class="dropdown-item" href="#rejectedcandidates">Rejected Candidates</a></li>
  </ul>
</div>
        {/* Selected Table */}
          <div class="table-responsive w-100 p-3 py-2" id='selectedcandidates'>
          <h6 className="text-success mt-3">Selected Candidates</h6>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">
                    Name
                  </th>
                  <th scope="col" className="fw-medium">
                    Final Remark
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raju</td>
                  <td>Suitable for Requirement</td>
                  <td><button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target="#permanentModal">Permanent</button></td>
                  <td><button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target="#contractModal">Contract</button></td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Renu</td>
                  <td>Suitable for Requirement</td>
                  <td><button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target="#permanentModal">Permanent</button></td>
                  <td><button className='btn btn-primary btn-sm' data-bs-toggle="modal" data-bs-target="#contractModal">Contract</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        
         {/* Rejected Table */}
          <div class="table-responsive w-100 px-3" id='rejectedcandidates'>
          <h6 className="text-danger mt-3">Rejected Candidates</h6>
            <table class="table table-hover border">
              <thead className="">
                <tr>
                  <th scope="col" className="fw-medium">
                    Name
                  </th>
                  <th scope="col" className="fw-medium">
                    Final Remark
                  </th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "15px" }}>
                  <td>Raju</td>
                  <td>No Logical Thinking</td>
                  <td><button className='btn btn-primary btn-sm'>Consider</button></td>
                  <td><button className='btn btn-primary btn-sm'>Not Consider</button></td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <td>Renu</td>
                  <td>Communication Needed</td>
                  <td><button className='btn btn-primary btn-sm'>Consider</button></td>
                  <td><button className='btn btn-primary btn-sm'>Not Consider</button></td>
                </tr>
              </tbody>
            </table>
          </div>
            </div>
        </div>

{/* PermanentModal */}
<div class="modal fade modal-sm" id="permanentModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="text-end p-1">
        <button type="button" class="btn-close shadow-none border-0 btn btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="container w-100">
                    <form class="row">
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-sm-12">
                            <label for="">Date of Joining</label>
                              <input type="date" name="date_of_joining" class="form-control shadow-none"/>
                          </div>
                           <div class="col-sm-12 mt-2">
                            <label for="">Salary Package</label>
                              <input type="number" name="salary_package" class="form-control shadow-none"/>
                          </div>
                          <div class="col-sm-12 mt-2">
                            <label for="">Company</label>
                              <input type="text" name="company" class="form-control shadow-none"/>
                          </div>
                          <div class="col-sm-12 text-end mt-4">
                            <button type="submit" class="btn btn-primary btn-sm" value="Register">Submit</button>
                        </div>
                      </div>
                      </div>
                </form>
                </div>
      </div>
    </div>
  </div>
</div>

{/* ContactModal */}
<div class="modal fade modal-sm" id="contractModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="text-end p-2">
        <button type="button" class="btn-close shadow-none border-0 btn btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="container w-100">
                    <form class="row">
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-sm-12">
                            <label for="">Date of Joining</label>
                              <input type="date" name="date_of_joining" class="form-control shadow-none"/>
                          </div>
                           <div class="col-sm-12 mt-2">
                            <label for="">Salary Package</label>
                              <input type="number" name="salary_package" class="form-control shadow-none"/>
                          </div>
                          <div class="col-sm-12 mt-2">
                            <label for="">Contract Period</label>
                              <input type="text" name="contract_period" class="form-control shadow-none"/>
                          </div>
                          <div class="col-sm-12 mt-2">
                            <label for="">Company</label>
                              <input type="text" name="company" class="form-control shadow-none"/>
                          </div>
                          <div class="col-sm-12 text-end mt-4">
                            <button type="submit" class="btn btn-primary btn-sm" value="Register">Submit</button>
                        </div>
                      </div>
                      </div>
                </form>
                </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Offered_candidates
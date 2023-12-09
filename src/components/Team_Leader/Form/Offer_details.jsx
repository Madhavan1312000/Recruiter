import React from 'react'

const Walkedin_status_forms = () => {
  return (
    <div>
        {/* Offer Details */}
        <div class="modal fade modal-sm" id="offer_details" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="text-end p-1 bg-light">
              <button type="button" class="btn-close shadow-none border-0 btn btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-light">
              <div class="container w-100 p-2 shadow bg-white rounded">
                <form class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div className="col-sm-12">
                        <label for="">Name</label>
                        <input type="text" name="name" class="form-control shadow-none" readOnly/>
                      </div>
                      <div className="col-sm-12">
                        <label for="">Position</label>
                        <input type="text" name="position" class="form-control shadow-none" readOnly/>
                      </div>
                      <div className="col-sm-12">
                        <label for="">Company</label>
                        <input type="text" name="company" class="form-control shadow-none" readOnly/>
                      </div>
                      <div className="col-sm-12">
                      <hr className='mt-3'/>
                      </div>
                      <div className="col-sm-12">
                        <label for="">Salary</label>
                        <input type="number" name="salary" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 mt-2">
                        <label for="">Date of Joining</label>
                        <input type="date" name="marks_obtained" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 mt-2">
                        <label for="">Remarks</label>
                        <textarea name="remarks" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 text-end mt-4">
                        <button type="submit" class="btn btn-primary btn-sm" value="Register">Save</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contract details */}
      <div class="modal fade modal-sm" id="contract_details" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="text-end p-1 bg-light">
              <button type="button" class="btn-close shadow-none border-0 btn btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-light">
              <div class="container w-100 p-2 shadow bg-white rounded">
                <form class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div className="col-sm-12">
                        <label for="">Name</label>
                        <input type="text" name="name" class="form-control shadow-none" readOnly/>
                      </div>
                      <div className="col-sm-12">
                        <label for="">Position</label>
                        <input type="text" name="position" class="form-control shadow-none" readOnly/>
                      </div>
                      <div className="col-sm-12">
                        <label for="">Company</label>
                        <input type="text" name="company" class="form-control shadow-none" readOnly/>
                      </div>
                      <div className="col-sm-12">
                      <hr className='mt-3'/>
                      </div>
                      <div className="col-sm-12">
                        <label for="">Salary</label>
                        <input type="number" name="salary" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 mt-2">
                        <label for="">Date of Joining</label>
                        <input type="date" name="marks_obtained" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 mt-2">
                        <label for="">Contract Period</label>
                        <input type="text" name="contract_period" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 mt-2">
                        <label for="">Remarks</label>
                        <textarea name="remarks" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 text-end mt-4">
                        <button type="submit" class="btn btn-primary btn-sm" value="Register">Save</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reject details */}
      <div class="modal fade modal-sm" id="rejected_details" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="text-end p-1 bg-light">
              <button type="button" class="btn-close shadow-none border-0 btn btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-light">
              <div class="container w-100 p-2 shadow bg-white rounded">
                <form class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div className="col-sm-12">
                        <label for="">Name</label>
                        <input type="text" name="name" class="form-control shadow-none" readOnly/>
                      </div>
                      <div className="col-sm-12">
                        <label for="">Position</label>
                        <input type="text" name="position" class="form-control shadow-none" readOnly/>
                      </div>
                      <div className="col-sm-12">
                        <label for="">Company</label>
                        <input type="text" name="company" class="form-control shadow-none" readOnly/>
                      </div>
                      <div className="col-sm-12">
                      <hr className='mt-3'/>
                      </div>
                      <div class="col-sm-12 mt-2">
                        <label for="">Remarks</label>
                        <textarea name="remarks" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 text-end mt-4">
                        <button type="submit" class="btn btn-primary btn-sm" value="Register">Save</button>
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

export default Walkedin_status_forms
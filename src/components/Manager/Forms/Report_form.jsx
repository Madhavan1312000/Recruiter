import React from 'react'
import { Link } from 'react-router-dom'

const Report_form = () => {
  return (
    <div>
        <div class="modal fade modal-md" id="report_form" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="text-end p-1">
              <button type="button" class="btn-close shadow-none border-0 btn btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h6 className="text-center text-primary">Report of React Position for Google Company</h6>
            <div class="modal-body">
              <div class="container w-100 border p-3">
                <form class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div className="col-sm-12">
                        <label for="">Number of walk-in persons</label>
                        <input type="number" name="" class="form-control shadow-none w-50" readOnly/>
                      </div>
                      <hr className='mt-3'/>
                      <div className="col-sm-12">
                        <span className='text-success'>Number of selected candidates</span>
                        <div className="row mt-2">
                            <div className="col">
                                <label htmlFor="">Permanent</label>
                                <input type="number" name="" class="form-control shadow-none" readOnly/>
                            </div>
                            <div className="col">
                            <label htmlFor="">Contract</label>
                                <input type="number" name="" class="form-control shadow-none" readOnly/>
                            </div>
                            <div className="col">
                            <label htmlFor="">Total</label>
                                <input type="number" name="" class="form-control shadow-none" readOnly/>
                            </div>
                        </div>
                      </div>
                      <hr className='mt-3'/>
                      <div className="col-sm-12">
                        <label for="" className='text-danger'>Number of Rejected Candidates</label>
                        <input type="number" name="" class="form-control shadow-none w-50" readOnly/>
                      </div>
                      <hr className='mt-3'/>
                      <div className="col-sm-12">
                        <label for="">Billing Amount</label>
                        <input type="number" name="" placeholder='Rs :' class="form-control shadow-none w-50" readOnly/>
                      </div>
                      <hr className='mt-3'/>
                      <div class="col-sm-12 text-center">
                       <Link to="/walkedin_candidates_info"><button class="btn btn-primary btn-sm w-75">View Candidate Information</button></Link>
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

export default Report_form
import React from 'react'

const Face_to_face_form = () => {
  return (
    <div>
        <div
        class="modal fade modal-md"
        id="face_to_face_form"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="text-end p-1">
              <button
                type="button"
                class="btn-close shadow-none border-0 btn btn-sm"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div><h6 className='text-primary text-center'>Face to Face Interview Form</h6></div>
            <div class="modal-body">
              <div class="container w-100">
                <form class="row">
                  <div class="col-md-12">
                    <div class="row">
                    <div className="col-sm-6">
                        <label for="">Interviewee</label>
                        <input type="text" name="interviewee" class="form-control shadow-none" hidden/>
                      </div>
                      <div className="col-sm-6">
                        <label for="">Interviewer</label>
                        <input type="text" name="interviewer" class="form-control shadow-none" hidden/>
                      </div>
                      <div className="col-sm-6">
                        <label for="">Position</label>
                        <input type="text" name="text" class="form-control shadow-none" hidden/>
                      </div>
                      <div className="col-sm-6">
                        <label for="">Requirement</label>
                        <input type="text" name="requirement" class="form-control shadow-none" hidden/>
                      </div>
                      <hr className='mt-2'/>
                    <div className="col-sm-12">
                <label for="" className="form-label">1. Suitability of a Candidate</label>
                <div className="">
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="suitability" value="1"  checked/>1
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="suitability" value="2" />2
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="suitability" value="3" />3
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="suitability" value="4" />4
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="suitability" value="5" />5
                </div>
              </div>
              <div className="col-sm-12 mt-2">
                <label for="" className="form-label">2. Ability to Work in a Team</label>
                <div className="">
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="ability_to_work" value="1"  checked/>1
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="ability_to_work" value="2" />2
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="ability_to_work" value="3" />3
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="ability_to_work" value="4" />4
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="ability_to_work" value="5" />5
                </div>
              </div>
              <div className="col-sm-12 mt-2">
                <label for="" className="form-label">3. Technical Strength</label>
                <div className="">
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="technical_strength" value="1"  checked/>1
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="technical_strength" value="2" />2
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="technical_strength" value="3" />3
                  <input className="form-check-input mx- shadow-none" type="radio" name="technical_strength" value="4" />4
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="technical_strength" value="5" />5
                </div>
              </div>
              <div className="col-sm-12 mt-2">
                <label for="" className="form-label">4. Ability to Learn</label>
                <div className="">
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="ability_to_learn" value="1"  checked/>1
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="ability_to_learn" value="2" />2
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="ability_to_learn" value="3" />3
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="ability_to_learn" value="4" />4
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="ability_to_learn" value="5" />5
                </div>
              </div>
              <div className="col-sm-12 mt-2">
                <label for="" className="form-label">5. Other Skills</label>
                <div className="">
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="other_skills" value="1"  checked/>1
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="other_skills" value="2" />2
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="other_skills" value="3" />3
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="other_skills" value="4" />4
                  <input className="form-check-input mx-1 shadow-none" type="radio" name="other_skills" value="5" />5
                </div>
              </div>
              <hr className='mt-3'/>
              <div className="col-sm-12">
                <label for="" className="form-label">Total Score</label>
                <input type="number" className='form-control shadow-none' name='total_score' />
              </div>
              <div className="col-sm-12 mt-2">
                <label for="" className="form-label">Remarks</label>
                <textarea className='form-control shadow-none' name='remarks' />
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

export default Face_to_face_form
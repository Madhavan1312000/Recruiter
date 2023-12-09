import React from "react";

const Interview_Forms = () => {
  return (
    <div>
      {/* Aptitude Form */}
      <div class="modal fade modal-md" id="aptitude_form" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="text-end p-1">
              <button type="button" class="btn-close shadow-none border-0 btn btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h6 className="text-center text-primary">Quantitative Aptitude Form</h6>
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
                      <div class="col-sm-12 mt-2">
                        <label for="">Marks Obtained</label>
                        <input type="number" name="marks_obtained" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 mt-2">
                        <label for="">Remarks</label>
                        <textarea name="remarks" class="form-control shadow-none"/>
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

      {/* Verbal Ability */}
      <div class="modal fade modal-md" id="verbal_form" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="text-end p-1">
              <button type="button" class="btn-close shadow-none border-0 btn btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h6 className="text-center text-primary">Verbal Ability Form</h6>
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
                      <div class="col-sm-12 mt-2">
                        <label for="">Marks Obtained</label>
                        <input type="number" name="marks_obtained" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 mt-2">
                        <label for="">Remarks</label>
                        <textarea name="remarks" class="form-control shadow-none"/>
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

      {/* Reasoning */}
      <div class="modal fade modal-md" id="reasoning_form" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="text-end p-1">
              <button type="button" class="btn-close shadow-none border-0 btn btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h6 className="text-center text-primary">Reasoning Ability Form</h6>
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
                      <div class="col-sm-12 mt-2">
                        <label for="">Marks Obtained</label>
                        <input type="number" name="marks_obtained" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 mt-2">
                        <label for="">Remarks</label>
                        <textarea name="remarks" class="form-control shadow-none"/>
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

      {/* Technical 1 */}
      <div class="modal fade modal-md" id="technical1_form" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="text-end p-1">
              <button type="button" class="btn-close shadow-none border-0 btn btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h6 className="text-center text-primary">Technical Round 1 Form</h6>
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
                      <div class="col-sm-12 mt-2">
                        <label for="">Marks Obtained</label>
                        <input type="number" name="marks_obtained" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 mt-2">
                        <label for="">Remarks</label>
                        <textarea name="remarks" class="form-control shadow-none"/>
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

      {/* Technical 2 */}
      <div class="modal fade modal-md" id="technical2_form" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="text-end p-1">
              <button type="button" class="btn-close shadow-none border-0 btn btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <h6 className="text-center text-primary">Technical Round 2 Form</h6>
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
                      <div class="col-sm-12 mt-2">
                        <label for="">Marks Obtained</label>
                        <input type="number" name="marks_obtained" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-12 mt-2">
                        <label for="">Remarks</label>
                        <textarea name="remarks" class="form-control shadow-none"/>
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
  );
};

export default Interview_Forms;

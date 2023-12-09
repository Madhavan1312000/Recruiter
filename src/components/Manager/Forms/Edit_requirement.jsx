import React from "react";

const Edit_requirement = () => {
  return (
    <div>
      <div class="modal modal-lg fade" id="edit_requirement" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-primary"  id="staticBackdropLabel">
                Edit Requirement
              </h1>
              <button type="button" class="btn-close shadow-none border-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="container w-100">
                <form class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="col-sm-6">
                        <label for="">Requirement</label>
                        <input type="text" name="requirement" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-6">
                        <label for="">Category</label>
                        <select name="category" id="" class="form-select shadow-none">
                          <option value="">Select...</option>
                          <option value="aptitude">Aptitude</option>
                          <option value="technical">Technical</option>
                          <option value="grop_discussion">
                            Group Discussion
                          </option>
                        </select>
                      </div>
                      <div class="col-sm-6 mt-2">
                        <label for="">Position</label>
                        <input type="text" name="position" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-6 mt-2">
                        <label for="">Qualification Required</label>
                        <select id="degree" name="degree" class="form-select shadow-none"
                        >
                          <option selected>Select your Degree</option>
                          <option value="Bsc">Bsc</option>
                          <option value="BE">BE</option>
                          <option value="BBA">BBA</option>
                          <option value="BCA">BCA</option>
                          <option value="B-Tech">B-Tech</option>
                          <option value="BCom">BCom</option>
                          <option value="Msc">Msc</option>
                          <option value="ME">ME</option>
                          <option value="MBA">MBA</option>
                          <option value="MCA">MCA</option>
                          <option value="M-Tech">M-Tech</option>
                          <option value="MS">MS</option>
                          <option value="MCom">MCom</option>
                          <option value="phd">Phd</option>
                          <option value="anydegree">Any Degree</option>
                        </select>
                      </div>
                      <div class="col-sm-6 mt-2">
                        <label for="">Experience Required</label>
                        <input type="text" name="experience_required" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-6 mt-2">
                        <label for="">Acceptable Notice Period</label>
                        <select name="acceptable_notice_period" id="" class="form-select shadow-none">
                          <option value="">Select...</option>
                          <option value="immediate_joiner">
                            Immediate Joiner
                          </option>
                          <option value="15_days">15 Days</option>
                          <option value="30_days">30 Days</option>
                          <option value="60_days">60 Days</option>
                        </select>
                      </div>
                      <div class="col-sm-6 mt-2">
                        <label for="">Company Name</label>
                        <input type="text" name="company_name" class="form-control shadow-none"/>
                      </div>
                      <div class="col-sm-6 mt-2">
                        <label for="">Priority</label>
                        <select name="priority" id="" class="form-select shadow-none">
                          <option value="">Select...</option>
                          <option value="high">High</option>
                          <option value="medium">Medium</option>
                          <option value="low">Low</option>
                        </select>
                      </div>
                      <div class="col-sm-6 mt-2">
                        <label for="">Role</label>
                        <select name="role" id="" class="form-select shadow-none">
                          <option value="">Select...</option>
                          <option value="permanent">Permanent</option>
                          <option value="temporary">Temporary</option>
                          <option value="intern">Intern</option>
                        </select>
                      </div>
                      <div class="col-sm-6 mt-2">
                        <label for="">Mode</label>
                        <select name="mode" id="" class="form-select shadow-none">
                          <option value="">Select...</option>
                          <option value="work_from_home">Work From Home</option>
                          <option value="on_site">On-site</option>
                          <option value="hybrid">Hybrid</option>
                        </select>
                      </div>
                      <div class="col-sm-6 mt-2">
                        <label for="">Assign To</label>
                        <select name="assign_to" id="" class="form-select shadow-none">
                          <option value="">Select...</option>
                          <option value="work_from_home">Team</option>
                          <option value="on_site">Recruiter</option>
                        </select>
                      </div>
                      <div class="col-sm-12 text-end mt-4">
                        <button type="submit" class="btn btn-primary btn-sm" value="Register">
                          Save Changes
                        </button>
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

export default Edit_requirement;

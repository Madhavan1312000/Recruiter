import React from "react";

const General_screening_form = () => {
  return (
    <div>
      <div className="modal modal-lg fade" id="general_screening_form" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-primary" id="staticBackdropLabel">General Screening Form</h1>
        <button type="button" className="btn-close shadow-none border-0" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="container w-100">
        <form className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-sm-6">
                <label for="">Interviewer Name</label>
                <input
                  type="text"
                  name="interviewer_name"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-sm-6">
                <label for="">Candidate Name</label>
                <input
                  type="text"
                  name="candidate_name"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-sm-6">
                <label for="">Contact Number</label>
                <input
                  type="tel"
                  name="contact_number"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-sm-6">
                <label for="">Position Applied</label>
                <select
                  name="position_applied"
                  id=""
                  className="form-select"
                  required
                >
                  <option value="">Select...</option>
                  <option value="java_developer">Java Developer</option>
                  <option value="react_developer">React Developer</option>
                  <option value="web_designer">Web Designer</option>
                </select>
              </div>
              <div className="col-sm-12 mt-2">
                <label for="">Interviwer Remark</label>
                {/* <input type="textarea" name="interviewer_remark" className="form-control" required/> */}
                <textarea
                  name="interviewer_remark"
                  className="form-control"
                  required
                />
              </div>

              <div className="col-sm-6 mt-2">
                <label for="">Last/Current CTC</label>
                <input
                  type="number"
                  className="form-control"
                  name="last/current_ctc"
                  required
                />
              </div>
              <div className="col-sm-6 mt-2">
                <label for="">Expected CTC</label>
                <input
                  type="number"
                  className="form-control"
                  name="expected_ctc"
                  required
                />
              </div>
              <div className="col-sm-6 mt-2">
                <label for="">Notice Period</label>
                <select name="notice_period" id="" className="form-select">
                  <option value="">Select...</option>
                  <option value="immediate_joiner">Immediate Joiner</option>
                  <option value="15_days">15 Days</option>
                  <option value="30_days">30 Days</option>
                  <option value="60_days">60 Days</option>
                </select>
              </div>
              <hr className="mt-3" />
              <h6>Answer the Following Questions</h6>
              <div className="col-sm-12">
                <span>1. Comfortable working for 6 days/week</span>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="question1"
                    id="question1"
                  />
                  <label className="form-check-label" for="question1">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="question1"
                    id="question2"
                    checked
                  />
                  <label className="form-check-label" for="question2">
                    No
                  </label>
                </div>
              </div>
              <div className="col-sm-12">
                <span>2. Comfortable working on flexible timing</span>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="question2"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="question2"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    No
                  </label>
                </div>
              </div>
              <div className="col-sm-12">
                <span>3. Ready to relocate to other places?</span>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="question3"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="question3"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    No
                  </label>
                </div>
              </div>
              <div className="col-sm-12">
                <span>
                  4. Ready to relocate to other centers within Bangalore?
                </span>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="question4"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="question4"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault2">
                    No
                  </label>
                </div>
              </div>

              <hr className="mt-3" />
              <div className="col-sm-6 mt-2">
                <label for="customRange2" className="form-label">
                  Qualification
                </label>
                <div className="">
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="qualification"
                    id="flexRadioDefault1"
                    value="1"
                    checked
                  />
                  1
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="qualification"
                    id="flexRadioDefault2"
                    value="2"
                  />
                  2
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="qualification"
                    id="flexRadioDefault1"
                    value="3"
                  />
                  3
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="qualification"
                    id="flexRadioDefault2"
                    value="4"
                  />
                  4
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="qualification"
                    id="flexRadioDefault2"
                    value="5"
                  />
                  5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">
                  Relevant Experience
                </label>
                <div className="">
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="relevant_experience"
                    value="1"
                    checked
                  />
                  1
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="relevant_experience"
                    value="2"
                  />
                  2
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="relevant_experience"
                    value="3"
                  />
                  3
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="relevant_experience"
                    value="4"
                  />
                  4
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="relevant_experience"
                    value="5"
                  />
                  5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">
                  Job Stability
                </label>
                <div className="">
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="job_stability"
                    value="1"
                    checked
                  />
                  1
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="job_stability"
                    value="2"
                  />
                  2
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="job_stability"
                    value="3"
                  />
                  3
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="job_stability"
                    value="4"
                  />
                  4
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="job_stability"
                    value="5"
                  />
                  5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">
                  Reason to Leave Previous/Current Job
                </label>
                <div className="">
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="reason"
                    value="1"
                    checked
                  />
                  1
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="reason"
                    value="2"
                  />
                  2
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="reason"
                    value="3"
                  />
                  3
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="reason"
                    value="4"
                  />
                  4
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="reason"
                    value="5"
                  />
                  5
                </div>
              </div>

              <hr className="mt-3"/>

              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">
                  Appearance & Personality
                </label>
                <div className="">
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="appearance_personality"
appearance_personality
                    checked
                  />
                  1
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="appearance_personality"
                    value="2"
                  />
                  2
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="appearance_personality"
                    value="3"
                  />
                  3
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="appearance_personality"
                    value="4"
                  />
                  4
                  <input
                    className="form-check-input mx-1"
                    type="radio"
                    name="appearance_personality"
                    value="5"
                  />
                  5
                </div>
              </div>

              <div className="col-sm-6 mt-2">
                <label for="" className="form-label"> Clarity of Thoughts</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="clarity_of_thoughts" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="clarity_of_thoughts" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="clarity_of_thoughts" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="clarity_of_thoughts" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="clarity_of_thoughts" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">English Speaking Skill</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="english_skill" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="english_skill" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="english_skill" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="english_skill" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="english_skill" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Awarness of Technical Dynamics</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="awarness" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="awarness" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="awarness" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="awarness" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="awarness" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Interpersonal Skills</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="interpersonal_skill" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="interpersonal_skill" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="interpersonal_skill" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="interpersonal_skill" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="interpersonal_skill" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Confidence Level</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="confidence_level" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="confidence_level" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="confidence_level" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="confidence_level" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="confidence_level" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Age Group Suitability</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="age_group" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="age_group" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="age_group" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="age_group" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="age_group" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Analytics and Logical Reasoning</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="logical_reasoning" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="logical_reasoning" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="logical_reasoning" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="logical_reasoning" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="logical_reasoning" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Career Plans</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="career_plans" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="career_plans" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="career_plans" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="career_plans" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="career_plans" value="5" />5
                </div>
              </div>

              <hr className="mt-3"/>
              
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Achievement Orientation</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="achievement_orientation" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="achievement_orientation" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="achievement_orientation" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="achievement_orientation" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="achievement_orientation" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Problem Solving Abilities</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="problem_solving" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="problem_solving" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="problem_solving" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="problem_solving" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="problem_solving" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Ability to Take up Challenges</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="challenges" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="challenges" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="challenges" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="challenges" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="challenges" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Leadership Skills</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="leadership_skill" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="leadership_skill" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="leadership_skill" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="leadership_skill" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="leadership_skill" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Interest with the Company</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="interest" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="interest" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="interest" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="interest" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="interest" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Researched about the Company</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="research" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="research" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="research" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="research" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="research" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Ability to Handle Targets/Pressures</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="target" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="target" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="target" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="target" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="target" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Customer Service Attitude</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="customer_service" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="customer_service" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="customer_service" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="customer_service" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="customer_service" value="5" />5
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <label for="" className="form-label">Overall Candidate Ranking</label>
                <div className="">
                  <input className="form-check-input mx-1" type="radio" name="candidate_ranking" value="1"  checked/>1
                  <input className="form-check-input mx-1" type="radio" name="candidate_ranking" value="2" />2
                  <input className="form-check-input mx-1" type="radio" name="candidate_ranking" value="3" />3
                  <input className="form-check-input mx-1" type="radio" name="candidate_ranking" value="4" />4
                  <input className="form-check-input mx-1" type="radio" name="candidate_ranking" value="5" />5
                </div>
              </div>

              <div className="col-sm-12 text-end mt-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                  value="Register"
                >
                  Submit
                </button>
                <button type="button" className="btn btn-primary btn-sm ms-2" data-bs-dismiss="modal">
                  Close
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

export default General_screening_form;

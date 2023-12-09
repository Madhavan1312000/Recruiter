import React, { useState } from 'react';

const EducationForm = () => {
  const [educationSections, setEducationSections] = useState([{ id: 1 }]);

  const addEducation = () => {
    setEducationSections((prevSections) => [...prevSections, { id: prevSections.length + 1 }]);
  };

  const removeEducation = (id) => {
    setEducationSections((prevSections) => prevSections.filter((section) => section.id !== id));
  };

  return (
    <div class="modal modal-lg fade" id="detailed_form" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-primary" id="staticBackdropLabel">Detailed Form</h1>
        <button type="button" class="btn-close shadow-none border-0" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    <div class="container w-100">
    <form class="row bg-white p-2">
      <div class="col-md-12">
        <h5>General Details</h5>
        <div class="row">
          <div class="col-sm-6">
            <label for="">Full Name</label>
            <input type="text" name="fullname" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Email</label>
            <input type="email" name="email" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Contact Number</label>
            <input type="tel" name="contact_number" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Alternative Contact Number</label>
            <input type="tel" name="alternative_contact_number" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Location</label>
            <input type="text" name="location" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Total Number of Experience</label>
            <input type="number" name="total_number_of_experience" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Key Skills</label>
            <input type="text" name="keyskills" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Designation Applied For</label>
            <select name="designation" id="" class="form-select shadow-none">
              <option value="">Select...</option>
              <option value="python_developer">Python Developer</option>
              <option value="web_developer">Web Developer</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        </div>
<hr class="mt-3" />
        <div class="row mt-3">
          <h5>Education Details</h5>

          {/* Add EDUCATION */}
          {educationSections.map((section) => (
              <div key={section.id} className="education-section row">

<div class="col-sm-6">
            <label for="">Education</label>
            <input type="text" name="education" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">University</label>
            <input type="text" name="university" class="form-control shadow-none"/>
          </div>
          
          <div class="col-sm-6">
            <label for="degree">Degree</label>
            <select id="degree" name="degree" class="form-select shadow-none" onchange="Specification()">
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
          <div class="col-sm-6">
            <label for="specification">Specification</label>
            <select id="specification" class="select-tag form-select shadow-none" name="specification"></select>
          </div>
          <div class="col-md-4">
            <label for="grade">Grade</label>
            <select name="grade" id="" class="form-select shadow-none">
              <option value="">Select...</option>
              <option value="percentage">Percentage</option>
              <option value="cgpa">CGPA</option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="percentage">Enter The Grade/Percentage</label>
            <input type="text" id="percentage" name="percentage" class="form-control shadow-none"/>
          </div>
          <div class="col-md-4">
            <label for="yop">Year of Passed Out</label>
            <input type="text" id="yop" name="yop" class="form-control shadow-none"/>
          </div>
          
                {/* ... Education section content ... */}
                <div className="col-sm-9 mt-3">
                <button
                  type="button"
                  onClick={() => removeEducation(section.id)}
                  className="btn btn-danger btn-sm m-2"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                </div>
              </div>
            ))}
            <div className="col-md-4 mt-3">
              <button type="button" className="btn btn-primary btn-sm" onClick={addEducation}>
                + Add Education
              </button>
            </div>
            <hr className="mt-3" />
          {/*  */}

          <div class="col-sm-6">
            <label for="">Current CTC</label>
            <input type="text" name="current_ctc" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Notice Period</label>
            <select name="notice_period" id="" class="form-select shadow-none">
              <option value="">Select...</option>
              <option value="immediate_joiner">Immediate Joiner</option>
              <option value="15_days">15 Days</option>
              <option value="30_days">30 Days</option>
              <option value="60_days">60 Days</option>
            </select>
          </div>
          <div class="col-sm-6">
            <label for="">Expected CTC</label>
            <input type="number" name="expected_ctc" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Expected Shift</label>
            <select name="expected_shift" id="" class="form-select shadow-none">
              <option value="">Select...</option>
              <option value="Morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="30_days">Night</option>
            </select>
          </div>
          <div class="col-sm-6">
            <label for="">Expected Location</label>
            <input type="text" name="expected_location" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Last Contacted Date</label>
            <input type="date" name="last_contacted_date" class="form-control shadow-none"/>
          </div>
        </div>
        <div class="row mt-3">
          <h6>Company Details</h6>
          <div class="col-sm-6">
            <label for="">Company Name</label>
            <input type="text" name="company_name" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Designation</label>
            <input type="text" name="designation" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Worked From</label>
            <input type="date" name="worked_from" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">To</label>
            <input type="date" name="worked_to" class="form-control shadow-none"/>
          </div>
          <div class="col-sm-6">
            <label for="">Skills Used</label>
            <input type="text" name="skills_used" class="form-control shadow-none"/>
          </div>
        </div>
        <div class="col-sm-12 text-end mt-4">
          <button type="submit" class="btn btn-primary btn-sm" value="Register">Submit</button>
          <button class="btn btn-primary ms-2 btn-sm" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </form>
  </div>
  </div>
  </div>
  </div>
  </div>
  );
};

export default EducationForm;

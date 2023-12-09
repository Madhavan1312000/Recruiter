import React from 'react'
import { useState } from 'react';

const Create_requirement = () => {

  const [selectedMarketingPosition, setSelectedMarketingPosition] = useState('');
  const [relatedItems, setRelatedItems] = useState([]);

  const marketingPositions = [
    'Marketing positions',
    'IT Department',
    'Administration Department',
    'HR Department',
    'Health care',
  ];

  const relatedItemsMap = {
    // MARKETNG
    'Marketing positions': ["Creative Director", "Marketing Specialist", "Product Marketing Manager",
    "Marketing Analyst", "SEO Specialist", "Marketing Assistant",
    "Copywriter", "Marketing Coordinator", "PR Manager",
    "Social Media Manager", "Brand Management", "Chief Marketing Officer",
    "Communications Manager", "Content Marketer", "Content Marketing Specialist",
    "Marketing Manager", "Event Marketing", "Social Media Coordinator",
    "VP of Marketing", "Brand Marketing", "Digital Strategist",
    "Product Management", "Community Manager", "Email Marketer"],

    // IT DEPARTMENT
    'IT Department': [ "Web Designer", "Web Engineer", "Web Producers", "Web Development Manager", "Web Development Project Manager",
    "User Experience (UX) Designer", "User Interface (UI) Designer", "UX/UI Researcher", "UX/UI Specialist",
    "Webmaster", "Web Producer", "Web Project Manager", "Web Content Manager", "Multimedia Architect",
    "Web Analytics Developer", "Search Engine Optimization (SEO) Consultant", "SEO Manager", "Internet Engineer",
    "Interaction Designer", "Front-end Designer", "Front-end Developer", "Mobile Developer", "Full-stack Developer",
    
    "Technology Manager", "Technology Assistant", "Technology Specialist", "Technical Account Manager",
    "IT Sales Executive", "IT Sales Director", "Business Systems Analyst",
    
    "Security Specialist", "IT Security Analyst", "Network Security Engineer", "Information Security Analyst",
    "Information Security Engineer", "Information Security Manager", "Information Security Consultant",
    "Information Security Project Manager", "Information Security Program Manager", "Management Information Director",
    "Cyber Security Specialist", "Cyber Security Manager", "Computer Forensic Investigator",
    
    "Database Developer", "Database Analyst", "Database Manager", "Database Engineer", "Database Specialist",
    "Database Coordinator", "Data Quality Manager", "Data Modeler", "Data Scientist", "Data Architect",
    "Information Architect", "Computer Data Scientist",
    
    "Computer Network Specialist", "Computer Systems Analyst", "Computer and Information Research Scientist",
    "Computer and Information Research Manager", "Network Administrator", "Network Architect", "Network Analyst",
    "Network Technician", "Network Operations Engineer", "Network Reliability Engineer", "Network Infrastructure Specialist",
    
    "Software Engineer", "Software Architect", "Software Test Engineer", "Software Development Manager",
    "Software Development Engineer", "Artificial Intelligence Engineer", "Application Developer", "Application Designer",
    "Application Engineer", "DevOps Engineer", "Computer Programmer", "Lead Programmer", "Iteration Manager",
    "Frameworks Specialist", "Game Developer",
    
    "Cloud Systems Engineer", "Cloud Computing Engineer", "Cloud Architect", "Cloud System Administrator",
    "Cloud Consultant", "Cloud Services Provider", "Cloud Services Developer", "Cloud Product Manager",
    
    "Chief Information Officer (CIO)", "Chief Technology Officer (CTO)", "IT Manager", "IT Director",
    "IT Project Manager", "Director of Technology", "Technical Operations Officer", "Information Management Systems Director",
    "Senior IT Consultant", "Technical Lead"],

    // ADMINISTRATION DEPARTMENT
    'Administration Department': ["Executive Assistant", "Administrative Assistant", "Administrative Specialist",
    "Office Manager", "Administrator", "Data Entry Clerk",
    "Administrative Coordinator", "Receptionist", "Administrative Director",
    "Bookkeeper", "Office Clerk", "Secretary",
    "Receptionists", "Administrative Analyst", "Administrative Manager",
    "Facility Management", "Virtual Assistant", "Accountant",
    "Auditor", "Legal Secretary", "Staff Assistant",
    "Accounts Payable Clerk", "Administrative Assistants", "Assistant Manager"],

    // HR
    'HR Department':[ "HR Coordinator", "Generalist", "HR Assistant",
    "Recruiter", "Employee Relations Manager", "Benefits Manager",
    "Recruitment Manager", "Recruiting Coordinator", "Analyst",
    "Business Partner", "Director of Recruiting", "Benefits Specialist",
    "Chief HR Officer", "Development Manager", "HR Manager",
    "Learning Manager", "VP of Mobility", "Administrator",
    "Compensation", "HRIS Director", "Personnel Manager",
    "Safety Manager", "Chief Diversity Officer", "HR Director"],

    // HEALTH
    'Health care':[ "Registered Nurse", "Medical Records Clerk", "Occupational Therapist",
    "Pharmacist", "Physician Assistant", "Dietitian",
    "Audiologist", "Dental Hygienist", "Dentist",
    "Health Information Technician", "Nursing Assistant", "Physical Therapist",
    "Clinical Administrator", "Hospital Manager", "Physician",
    "Respiratory Therapist", "Home Health Aide", "Medical Technologist",
    "Nurse Practitioner", "Pathology", "Veterinarian",
    "Coding Specialist", "Licensed Practical Nurse", "Medical Assistant"],
  };

  const handleMarketingPositionChange = (position) => {
    setSelectedMarketingPosition(position);
    setRelatedItems(relatedItemsMap[position] || []);
  };


  return (
    <div>
        <div class="modal modal-lg fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-primary" id="staticBackdropLabel">Create Requirement</h1>
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
                                <option value="grop_discussion">Group Discussion</option>
                              </select>
                          </div>
                          <h6 className='mt-3 text-primary'>Position : </h6>
                           <div class="col-sm-6">
                           <label htmlFor="marketingPosition">Department</label>
                           <select id="marketingPosition" className='form-select shadow-none'  onChange={(e) => handleMarketingPositionChange(e.target.value)}
                                value={selectedMarketingPosition}>
                             <option value="">Select...</option>
                                {marketingPositions.map((position) => (
                                <option key={position} value={position}>
                                  {position}
                                </option>
                             ))}
                           </select>
                          </div>
                          <div class="col-sm-6">
                          <label htmlFor="relatedItems">Specification</label>
                           <select id="relatedItems" className='form-select shadow-none' disabled={!selectedMarketingPosition}>
                             <option value="">Select...</option>
                             {relatedItems.map((item) => (
                               <option key={item} value={item}>
                                 {item}
                               </option>
                             ))}
                           </select>
                          </div>
                          <hr className='mt-3'/>
                           <div class="col-sm-6">
                            <label for="">Qualification Required</label>
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
                            <label for="">Experience Required</label>
                              <input type="text" name="experience_required" class="form-control shadow-none"/>
                          </div>
                           <div class="col-sm-6 mt-2">
                           <label for="">Acceptable Notice Period</label>
            <select name="acceptable_notice_period" id="" class="form-select shadow-none">
              <option value="">Select...</option>
              <option value="immediate_joiner">Immediate Joiner</option>
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
                            <button type="submit" class="btn btn-primary btn-sm" value="Register">Create</button>
                            <button type="button" class="btn btn-primary btn-sm ms-2">Hold</button>
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

export default Create_requirement
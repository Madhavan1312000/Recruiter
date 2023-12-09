import { useState } from "react";

const General=()=>{
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

    return(
        <div>
            <div class="container w-100 mt-sm-3">
                    <form class="row bg-light">
                      <div class="col-md-12">
                          <h5>General Details</h5>
                        <div class="row">
                          <div class="col-sm-12">
                            <label for="">Full Name</label>
                              <input type="text" name="fullname" class="form-control shadow-none"/>
                          </div>
                           <div class="col-sm-12">
                            <label for="">Email</label>
                              <input type="email" name="email" class="form-control shadow-none"/>
                          </div>
                           <div class="col-sm-12">
                            <label for="">Contact Number</label>
                              <input type="tel" name="contact_number" class="form-control shadow-none"/>
                          </div>
                           <div class="col-sm-12">
                            <label for="">Alternative Contact Number</label>
                              <input type="tel" name="alternative_contact_number" class="form-control shadow-none"/>
                          </div>
                           <div class="col-sm-12">
                            <label for="">Location</label>
                              <input type="text" name="location" class="form-control shadow-none"/>
                          </div>
                           <div class="col-sm-12">
                            <label for="">Total Number of Experience</label>
                              <input type="number" name="total_number_of_experience" class="form-control shadow-none"/>
                          </div>
                          <div class="col-sm-12">
                            <label for="">Key Skills</label>
                              <input type="text" name="keyskills" class="form-control shadow-none"/>
                          </div>
                          <div class="col-sm-12">
                            <label for="">Source</label>
                              <select name="source" id="" class="form-select shadow-none">
                                <option value="">Select...</option>
                                <option value="Naukri">Naukri</option>
                                <option value="Foundit">Foundit</option>
                                <option value="Mail">Mail</option>
                                <option value="Whatsapp">Whatsapp</option>
                                <option value="Just Dial">Just Dial</option>
                                <option value="Others">Others</option>
                              </select>
                          </div>
                          <h6 className="mt-3">Designation Applied For</h6>
                          <div class="col-sm-6">
                           <label htmlFor="Position">Department</label>
                           <select id="Position" className='form-select shadow-none'  onChange={(e) => handleMarketingPositionChange(e.target.value)}
                                value={selectedMarketingPosition}>
                             <option value="">Select...</option>
                                {marketingPositions.map((x) => (
                                <option key={x} value={x}>
                                  {x}
                                </option>
                             ))}
                           </select>
                          </div>
                          <div class="col-sm-6">
                          <label htmlFor="relatedItems">Specification</label>
                           <select id="relatedItems" className='form-select shadow-none'>
                             <option value="">Select...</option>
                             {relatedItems.map((item) => (
                               <option key={item} value={item}>
                                 {item}
                               </option>
                             ))}
                           </select>
                          </div>
                          <div class="col-sm-12 text-end mt-4">
                            <button type="submit" class="btn btn-primary" value="Register">Register</button>
                        </div>
                      </div>
                      </div>
                </form>
                </div>
        </div>
    )
}
export default General
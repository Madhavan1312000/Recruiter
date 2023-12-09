import React from 'react'

// Manager
import Main from './components/Manager/Main'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import General_form_records from './components/Manager/General_form_records'
import Loginpage from './components/Loginpage'
import Candidates from './components/Manager/Candidates'
import Activerequirements from './components/Manager/Activerequirements'
import Holdpage from './components/Manager/Holdpage'
import Closed_requirement from './components/Manager/Closed_requirement'
import Live_interviews from './components/Manager/Live_interviews'
import Offered_candidates from './components/Manager/Offered_candidates'
import Teams from './components/Manager/Teams'
import Candidatewise_tables from './components/Manager/Candidatewise_tables'
import General_screening_form from './components/Manager/Forms/General_screening_form'
import Attendpage from './components/Manager/Attendpage'
import View_teams from './components/Manager/View_teams'
import Clients from './components/Manager/Clients'
import Client_specification from './components/Manager/Client_specification'
import Closed_mainpage from './components/Manager/Closed_mainpage'
import EducationForm from './components/Detailed_form'
import General from './components/General_form'
import Matched_records from './components/Manager/Matched_records'
import Live_interview_client from './components/Manager/Live_interview_client'
import Hold_detailedpage from './components/Manager/Hold_detailedpage'
import Walkedin_candidates_info from './components/Manager/Walkedin_candidates_info'

// Team Leader
import Teamlead_dashboard from './components/Team_Leader/Teamlead_dashboard'
import Teamlead_Activerequirements from './components/Team_Leader/Teamlead_Activerequirements'
import Teamlead_matched_records from './components/Team_Leader/Teamlead_matched_records'
import Teamlead_Live_interviews_self from './components/Team_Leader/Teamlead_Live_interviews_self'
import Teamlead_Candidatewise_tables from './components/Team_Leader/Teamlead_Candidatewise_tables'
import Teamlead_Attendpage from './components/Team_Leader/Teamlead_Attendpage'
import Teamlead_General_form_records from './components/Team_Leader/Teamlead_General_form_records'
import Teamlead_candidates from './components/Team_Leader/Teamlead_Candidates'
import Teamlead_Live_interview_client from './components/Team_Leader/Teamlead_live_interviews_client'
import View_linedup_candidates from './components/Team_Leader/View_linedup_candidates'

const App = () => {
  return (
    <div>
      {/* <General></General> */}
        <BrowserRouter>
        <Routes>
          {/* Manager */}
            <Route path='/' element={<Loginpage/>}/>
            <Route path='/manager_dashboard' element={<Main/>}/>
            <Route path='/general_details' element={<General_form_records></General_form_records>}/>
            <Route path='/candidates' element={<Candidates></Candidates>}/>
            <Route path='/active_requirements' element={<Activerequirements></Activerequirements>}/>
            <Route path='/matched_records' element={<Matched_records></Matched_records>}/>
            <Route path='/hold_requirements' element={<Holdpage></Holdpage>}/>
            <Route path='/hold_detailedpage' element={<Hold_detailedpage></Hold_detailedpage>}/>
            <Route path='/live_interviews_self' element={<Live_interviews></Live_interviews>}/>
            <Route path='/live_interviews_client' element={<Live_interview_client></Live_interview_client>}/>
            <Route path='/walkedin_candidates_info' element={<Walkedin_candidates_info></Walkedin_candidates_info>}/>
            <Route path='/candidate_wise_tables' element={<Candidatewise_tables></Candidatewise_tables>}/>
            <Route path='/attendpage' element={<Attendpage></Attendpage>}/>
            <Route path='/offered_candidates' element={<Offered_candidates></Offered_candidates>}/>
            <Route path='/closed_mainpage' element={<Closed_mainpage></Closed_mainpage>}/>
            <Route path='/closed_requirements' element={<Closed_requirement></Closed_requirement>}/>
            <Route path='/teams' element={<Teams></Teams>}/>
            <Route path='/view_teams' element={<View_teams></View_teams>}/>
            <Route path='/clients' element={<Clients></Clients>}/>
            <Route path='/client_specification' element={<Client_specification></Client_specification>}/>

            {/* Team Leader */}
            <Route path='/teamlead_dashboard' element={<Teamlead_dashboard></Teamlead_dashboard>}/>
            <Route path='/teamlead_general_form_records' element={<Teamlead_General_form_records></Teamlead_General_form_records>}/>  
            <Route path='/teamlead_candidate_records' element={<Teamlead_candidates></Teamlead_candidates>}/>  
            <Route path='/teamlead_active_requirements' element={<Teamlead_Activerequirements></Teamlead_Activerequirements>}/>
            <Route path='/teamlead_matched_records' element={<Teamlead_matched_records></Teamlead_matched_records>}/>  
            <Route path='/teamlead_live_interviews_self' element={<Teamlead_Live_interviews_self></Teamlead_Live_interviews_self>}/>  
            <Route path='/teamlead_candidate_wise_tables' element={<Teamlead_Candidatewise_tables></Teamlead_Candidatewise_tables>}/>  
            <Route path='/teamlead_attend_page' element={<Teamlead_Attendpage></Teamlead_Attendpage>}/>  
            <Route path='/teamlead_live_interviews_client' element={<Teamlead_Live_interview_client></Teamlead_Live_interview_client>}/>  
            <Route path='/view_linedup_candidates' element={<View_linedup_candidates></View_linedup_candidates>}/>  
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Reactivating_requirement from './Forms/Reactivating_requirement'
import { Link } from 'react-router-dom'

const Holdpage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="d-flex main-container">
            <Sidebar></Sidebar>
            <div className="w-100 bg-white">
                <h4 className='text-center mt-3 text-primary'>HOLD REQUIREMENTS</h4>
                <div class="d-flex flex-wrap justify-content-between mt-3 p-3">
            <Link to='/hold_detailedpage' class="hold text-white p-2  py-3 mt-2">
              Marketing Executive
            </Link>
            <Link to='/hold_detailedpage' href="" class="hold text-white p-2 py-3 mt-2">
              Java Developer
            </Link>
            <Link to='/hold_detailedpage' href="" class="hold text-white p-2 py-3 mt-2">
              Web Designer
            </Link>
            <Link to='/hold_detailedpage' href="" class="hold text-white p-2 py-3 mt-2">
              HTML Developer
            </Link>
            <Link to='/hold_detailedpage' href="" class="hold text-white p-2 py-3 mt-2">
              Bootstrap Developer
            </Link>
            <Link to='/hold_detailedpage' href="" class="hold text-white p-2 py-3 mt-2">
              Python Developer
            </Link>
            <Link to='/hold_detailedpage' href="" class="hold text-white p-2 py-3 mt-2">
              React Developer
            </Link>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Holdpage
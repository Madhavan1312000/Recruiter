
import { Link } from 'react-router-dom'
const Recruiter_Navbar = () => {
  return (
        <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 fixed-top">
  <div className="container-fluid px-0 ps-2">
    <a className="navbar-brand text-success" href="#"><i class="fa-solid fa-user me-2"></i>Recruiter LEADER</a>
    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 w-50 common-navbar  justify-content-evenly">
        <div class="input-group w-50">
  <input type="text" class="form-control shadow-none" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></span>
</div>
      <li className="nav-item">
          <a className="nav-link" href="#"><i class="fa-sharp fa-solid fa-right-from-bracket me-1"></i>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Recruiter_Navbar
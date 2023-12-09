import React from 'react'
import './Manager/main.css'
import { Link } from 'react-router-dom'

const Loginpage = () => {
  return (
    <div>
        <div className="d-flex justify-content-center bg-white">
        {/* <div class="row container-fluid animate__animated animate__fadeIn animate__delay-500ms bg-info">
        <div className="col-sm-12 d-flex justify-content-center"> */}
        <div class="row container mt-5">
          <div class="col mt-5">
            <div className="row ">
              <h1 class=" text-primary display-1 text-sm-start text-center ">
                Welcome
              </h1>
              <h3 className="text-sm-start text-center text-secondary">
                To Merida Tech Minds Pvt Limited
              </h3>
            </div>
            <div class="row mt-1">
            <div className="col-sm-12">
            <div className=''>
              {/* <span className='bg-info'>Scan the QR Code</span> */}
          <img src={require('../img/QRCode.png')} alt="" style={{height:160}} />
        </div>
            </div>
          </div>
          </div>
          <div class="col mt-5 d-flex justify-content-center">
            <div class="login-form-container">
              <form class="form-horizontal">
                <h3 class="title text-center">Login</h3>
                <h6 className="text-center merida_acc">Use Your Merida Account</h6>
                <div class="form-group">
                  <span class="input-icon"></span>
                  <input
                    class="form-control"
                    type="email"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <span class="input-icon"></span>
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <span class="forgot-pass">
                  <a href="#">Forgot password?</a>
                </span>
                  <Link to=""><button class="btn signin">Log in</button></Link>
              </form>
            </div>
          </div>
          <div>
            <Link to="/manager_dashboard">Manager</Link>
            <Link to='/teamlead_dashboard' className='m-3'>Team Leader</Link>
            <Link>Recruiter</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginpage
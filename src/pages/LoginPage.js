import React from 'react'
import CustomInput from '../components/CustomInput'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="py-5" style={{ background: " #808080", minHeight:'100vh' }}>
      <br />
      <br />
      <br />
      <div className="my-10 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Login</h3>
        <p className="text-center sub-title">Login to your account to continue</p>
        <form>
          <CustomInput type="email" placeholder="Email Account" id="email" />
          <CustomInput type="password" placeholder="Password" id="password" />
          <div className="mb-3 text-end">
            <Link to="/ForgotPassword" className="link-btn">
              Forgot Password?
            </Link>
          </div>
          <div>
          <button to='/admin' 
            className='border-0 px-3 py-2 text-white w-100' 
            style={{ background: "#008080" }}
            type='submit'
          >
            Submit
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage
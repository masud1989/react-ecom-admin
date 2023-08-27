import React from 'react'
import CustomInput from '../components/CustomInput'

const ForgotPasswordPage = () => {
  return (
    <div className="py-5" style={{ background: " #808080", minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <div className="my-10 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Forgot Password</h3>
        <p className="text-center subtitle">Input email to send Password Reset Link</p>
        <form>
          <CustomInput type="email" placeholder="Email" id="email" />
          <button to='/ResetPassword' className='border-0 px-3 py-2 text-center text-white w-100' style={{ background: "#008080" }}>Send Reset Link</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
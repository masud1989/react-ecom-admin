import React from 'react'
import CustomInput from '../components/CustomInput'

const ResetPasswordPage = () => {
  return (
    <div className="py-5" style={{ background: " #808080", minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <div className="my-10 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Reset Password</h3>
        <p className="text-center sub-title">Save Password to continue</p>
        <form>
          <CustomInput type="password" placeholder="Password" id="password" />
          <CustomInput type="password" placeholder="Confirm Password" id="password" />
          <button to='/' className='border-0 px-3 py-2 text-center text-white w-100' style={{ background: "#008080" }}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPasswordPage
import React, { useState }  from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddProduct = () => {
    const [value, setValue] = useState('');
  return (
      <>
        <section className="content-header">
              <div className="header-icon">
                  <i className="fa fa-user-plus" />
              </div>
              <div className="header-title mb-3">
                  <h1>Product</h1>
                  <small>Add New Product</small>
              </div>
          </section>
          <form>
              <section className='content-header'>
                  <div className="row mt-3">
                      <div className='col-6'>
                          <CustomInput type="text" placeholder="Type Coupon Name" id="coupon-name" />
                      </div>
                      <div className='col-6'>
                          <CustomInput type="text" placeholder="Discount Percentage" id="coupon-discount" />
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className='col-6'>
                          <CustomInput type="text" placeholder="Type Coupon Name" id="coupon-name" />
                      </div>
                      <div className='col-6'>
                          <CustomInput type="text" placeholder="Discount Percentage" id="coupon-discount" />
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className='col-12' >
                      <ReactQuill  value={value} onChange={setValue} placeholder='Description' />
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className='col-6'>
                          <CustomInput type="text" placeholder="Type Coupon Name" id="coupon-name" />
                      </div>
                      <div className='col-6'>
                          <CustomInput type="text" placeholder="Discount Percentage" id="coupon-discount" />
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className='col-6'>
                          <CustomInput type="text" placeholder="Type Coupon Name" id="coupon-name" />
                      </div>
                      <div className='col-6'>
                          <CustomInput type="text" placeholder="Discount Percentage" id="coupon-discount" />
                      </div>
                  </div>
                  <button to='/'
                      className='save-btn'
                      type='submit'
                  >
                      Add Product
                  </button>
              </section>
          </form>
      </>
  )
}

export default AddProduct
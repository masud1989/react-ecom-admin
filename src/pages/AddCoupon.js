import React from 'react';
import { BsFillPencilFill, BsFillTrashFill, BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs'
import CustomInput from '../components/CustomInput';


const AddCoupon = () => {
    return (
        <>
            <section className="content-header mb-3">
                <div className="header-icon">
                    <i className="fa fa-user-plus" />
                </div>
                <div className="header-title">
                    <h1>Coupon</h1>
                    <small>Add New Coupon</small>
                </div>
            </section>
            <form>
                <section className='content-header'>
                    <div className="row">
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
                        Add Coupon
                    </button>
                </section>
            </form>
        </>
    )
}

export default AddCoupon
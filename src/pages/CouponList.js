import React from 'react'
import Datatable from '../components/Datatable'

const CouponList = () => {
    return (
        <>
        <section className="content-header">
            <div className="header-icon">
                <i className="fa fa-user-plus" />
            </div>
            <div className="header-title">
                <h1>Coupons</h1>
                <small>Coupon List</small>
            </div>
        </section>
        
        <Datatable />
    </>
    )
}

export default CouponList
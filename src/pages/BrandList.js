import React from 'react'
import Datatable from '../components/Datatable'

const BrandList = () => {
  return (
    <>
      <section className="content-header">
        <div className="header-icon">
          <i className="fa fa-user-plus" />
        </div>
        <div className="header-title">
          <h1>Brands</h1>
          <small>Brand Category List</small>
        </div>
      </section>

      <Datatable />
    </>
  )
}

export default BrandList
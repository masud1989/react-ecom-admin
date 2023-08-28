import React from 'react'
import Datatable from '../components/Datatable'

const Customers = () => {
  return (
    <>
      <section className="content-header">
        <div className="header-icon">
          <i className="fa fa-user-plus" />
        </div>
        <div className="header-title">
          <h1>Customers</h1>
          <small>Customer List</small>
        </div>
      </section>

      <Datatable />
    </>
  )
}

export default Customers
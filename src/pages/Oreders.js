import React from 'react'
import Datatable from '../components/Datatable'

const Oreder = () => {
  return (
    <>
      <section className="content-header">
        <div className="header-icon">
          <i className="fa fa-user-plus" />
        </div>
        <div className="header-title">
          <h1>Orders</h1>
          <small>Order List</small>
        </div>
      </section>

      <Datatable />
    </>
  )
}

export default Oreder
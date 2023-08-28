import React from 'react'
import Datatable from '../components/Datatable';

const Enquiries = () => {
  return (
    <>
    <section className="content-header">
        <div className="header-icon">
            <i className="fa fa-user-plus" />
        </div>
        <div className="header-title">
            <h1>Enqueries</h1>
            <small>Enquery List</small>
        </div>
    </section>
    
    <Datatable />
</>
  )
}

export default Enquiries
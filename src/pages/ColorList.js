import React from 'react'
import Datatable from '../components/Datatable'

const ColorList = () => {
    return (
        <>
        <section className="content-header">
            <div className="header-icon">
                <i className="fa fa-user-plus" />
            </div>
            <div className="header-title">
                <h1>Colors</h1>
                <small>Color List</small>
            </div>
        </section>
        
        <Datatable />
    </>
  )
}

export default ColorList
import React from 'react'
import Datatable from '../components/Datatable'

const CategoryList = () => {
  return (
    <>
      <section className="content-header">
        <div className="header-icon">
          <i className="fa fa-user-plus" />
        </div>
        <div className="header-title">
          <h1>Categories</h1>
          <small>Category List</small>
        </div>
      </section>

      <Datatable />
    </>
  )
}

export default CategoryList
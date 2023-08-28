import React from 'react';
import Datatable from '../components/Datatable';

const BlogList = () => {
    return (
      <>
        <section className="content-header">
          <div className="header-icon">
            <i className="fa fa-user-plus" />
          </div>
          <div className="header-title">
            <h1>Blogs </h1>
            <small>Blog List</small>
          </div>
        </section>

        <Datatable />

      </>
    )
  }

  export default BlogList
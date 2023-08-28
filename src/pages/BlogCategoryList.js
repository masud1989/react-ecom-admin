import React from 'react'
import Datatable from '../components/Datatable'

const BlogCategoryList = () => {
    return (
        <>
            <section className="content-header">
                <div className="header-icon">
                    <i className="fa fa-user-plus" />
                </div>
                <div className="header-title">
                    <h1>Blog Category</h1>
                    <small>Blog Category List</small>
                </div>
            </section>
            
            <Datatable />
        </>
    )
}

export default BlogCategoryList
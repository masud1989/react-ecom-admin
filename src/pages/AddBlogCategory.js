import React from 'react'
import CustomInput from '../components/CustomInput'

const AddBlogCategory = () => {
  return (
    <>
            <section className="content-header">
                <div className="header-icon">
                    <i className="fa fa-user-plus" />
                </div>
                <div className="header-title mb-3">
                    <h1>Blog Category</h1>
                    <small>Add New Blog Category</small>
                </div>
            </section>
            <form>
                <section className='content-header'>

                    <div className="row mt-3">
                        <div className='col-10'>
                            <CustomInput type="text" placeholder="Type Blog Category Name" id="blog-category-name" />
                        </div>
                    </div>


                    <button to='/'
                        className='save-btn'
                        type='submit'
                    >
                        Add Blog Category
                    </button>
                </section>
            </form>
        </>
  )
}

export default AddBlogCategory
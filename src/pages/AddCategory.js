import React from 'react'
import CustomInput from '../components/CustomInput'



const AddCategory = () => {
    return (
        <>
            <section className="content-header">
                <div className="header-icon">
                    <i className="fa fa-user-plus" />
                </div>
                <div className="header-title mb-3">
                    <h1>Category</h1>
                    <small>Add New Category</small>
                </div>
            </section>
            <form>
                <section className='content-header'>
                    
                    <div className="row mt-3">
                        <div className='col-10'>
                            <CustomInput type="text" placeholder="Type Category Name" id="ccategory-name" />
                        </div>
                    </div>
                    
                    
                    <button to='/'
                        className='save-btn'
                        type='submit'
                    >
                        Add Category
                    </button>
                </section>
            </form>
        </>
    )
}

export default AddCategory
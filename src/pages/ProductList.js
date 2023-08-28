import React from 'react'
import Datatable from '../components/Datatable'

const ProductList = () => {
    return (
        <>
            <section className="content-header">
                <div className="header-icon">
                    <i className="fa fa-user-plus" />
                </div>
                <div className="header-title">
                    <h1>Products</h1>
                    <small>Product List</small>
                </div>
            </section>

            <Datatable />
        </>
    )
}

export default ProductList
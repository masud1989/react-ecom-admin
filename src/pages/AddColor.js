import React from 'react';
import {BsFillPencilFill, BsFillTrashFill, BsFillHandThumbsUpFill, BsFillHandThumbsDownFill } from 'react-icons/bs'

const AddColor = () => {
  return (
      <>
          <section className="content-header">
              <div className="header-icon">
                  <i className="fa fa-user-plus" />
              </div>
              <div className="header-title">
                  <h1>Color</h1>
                  <small>Add New Color</small>
              </div>
          </section>
          <section className='content-header'>
              <div>
                  <section className="content">
                      <div className="row">
                          <div className="col-sm-12">
                              <div className="panel panel-bd lobidrag">
                                  <div className="panel-body">
                                      <div className="table-responsive">
                                          <table id="dataTableExample1" className="table table-bordered table-striped table-hover">
                                              <thead>
                                                  <tr className="info">
                                                      <th>Sl</th>
                                                      <th>Photo</th>
                                                      <th>User Name</th>
                                                      <th>Type</th>
                                                      <th>status</th>
                                                      <th>Action</th>
                                                  </tr>
                                              </thead>
                                              <tbody>
                                                  <tr>
                                                      <td>4</td>
                                                      <td><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                                                      <td>Alvaro morata</td>
                                                      <td><span className="label-custom label label-default">admin</span>
                                                      </td>
                                                      <td><span className="label-danger label label-default">deactive</span>
                                                      </td>
                                                      <td >
                                                          <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                                                          <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                                                          <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                                                          <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td>4</td>
                                                      <td><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                                                      <td>Alvaro morata</td>
                                                      <td><span className="label-custom label label-default">admin</span>
                                                      </td>
                                                      <td><span className="label-danger label label-default">deactive</span>
                                                      </td>
                                                      <td >
                                                          <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                                                          <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                                                          <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                                                          <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td>4</td>
                                                      <td><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                                                      <td>Alvaro morata</td>
                                                      <td><span className="label-custom label label-default">admin</span>
                                                      </td>
                                                      <td><span className="label-danger label label-default">deactive</span>
                                                      </td>
                                                      <td >
                                                          <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                                                          <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                                                          <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                                                          <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
          </section>
      </>
  )
}

export default AddColor
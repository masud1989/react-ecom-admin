import React from 'react';
import {BsFillPencilFill, BsFillTrashFill, BsFillHandThumbsUpFill, BsFillHandThumbsDownFill} from 'react-icons/bs';

const Datatable = () => (
  <>
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
                          <th className='text-center'>Sl</th>
                          <th className='text-center'>Photo</th>
                          <th className='text-center'>User Name</th>
                          <th className='text-center'>Type</th>
                          <th className='text-center'>status</th>
                          <th className='text-center'>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                           <td className='text-center '>01.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>
                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>02.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>
                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>03.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>04.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>05.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>06.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>07.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>08.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>09.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>10.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>11.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>12.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>13.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
                            <button type="button" className="btn btn-add btn-sm me-1" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                            <button type="button" className="btn btn-danger btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                            <button type="button" className="btn btn-success btn-sm me-1" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsUpFill /> </button>
                            <button type="button" className="btn btn-secondary btn-sm" data-toggle="modal" data-target="#customer2"><BsFillHandThumbsDownFill /> </button>
                          </td>
                        </tr>
                        <tr>
                           <td className='text-center fw-bold'>14.</td>
                           <td className='text-center'><img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg" className="rounded-circle border border-2 border-secondary" alt="User Image" width={40} height={40} /></td>
                           <td className='text-center'>Alvaro morata</td>
                           <td className='text-center'><span className="label-custom label label-default">admin</span>
                          </td>
                           <td className='text-center'><span className="label-danger label label-default">deactive</span>
                          </td>

                           <td className='text-center'>
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
  
);
export default Datatable;
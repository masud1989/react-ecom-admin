import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'


const DemoTable = () => {
  return (
   <div>
         <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="header-icon">
        <i className="fa fa-user-plus" />
      </div>
      <div className="header-title">
        <h1>Users</h1>
        <small>List of User</small>
      </div>
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-bd lobidrag">
            <div className="panel-heading">
              <div className="btn-group" id="buttonexport">
                <Link to="/">
                  <h4>User Details</h4>
                </Link>
              </div>
            </div>
            <div className="panel-body">
              {/* Plugin content:powerpoint,txt,pdf,png,word,xl */}
              <div className="btn-group">
                <div className="buttonexport"> 
                  <Link to="" className="btn btn-add" data-toggle="modal" data-target="#adduser"><i className="fa fa-plus" /> Add New User</Link>  
                </div>
                <button className="btn btn-exp btn-sm dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bars" /> Export Table Data</button>
                <ul className="dropdown-menu exp-drop" role="menu">
                  <li>
                    <a href="#" onclick="$('#dataTableExample1').tableExport({type:'json',escape:'false'});"> 
                      <img src="assets/dist/img/json.png" width={24} alt="logo" /> JSON</a>
                  </li>
                  <li>
                    <a href="#" onclick="$('#dataTableExample1').tableExport({type:'json',escape:'false',ignoreColumn:'[2,3]'});">
                      <img src="assets/dist/img/json.png" width={24} alt="logo" /> JSON (ignoreColumn)</a>
                  </li>
                  <li><a href="#" onclick="$('#dataTableExample1').tableExport({type:'json',escape:'true'});">
                      <img src="assets/dist/img/json.png" width={24} alt="logo" /> JSON (with Escape)</a>
                  </li>
                  <li className="divider" />
                  <li><a href="#" onclick="$('#dataTableExample1').tableExport({type:'xml',escape:'false'});">
                      <img src="assets/dist/img/xml.png" width={24} alt="logo" /> XML</a>
                  </li>
                  <li><a href="#" onclick="$('#dataTableExample1').tableExport({type:'sql'});"> 
                      <img src="assets/dist/img/sql.png" width={24} alt="logo" /> SQL</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#" onclick="$('#dataTableExample1').tableExport({type:'csv',escape:'false'});"> 
                      <img src="assets/dist/img/csv.png" width={24} alt="logo" /> CSV</a>
                  </li>
                  <li>
                    <a href="#" onclick="$('#dataTableExample1').tableExport({type:'txt',escape:'false'});"> 
                      <img src="assets/dist/img/txt.png" width={24} alt="logo" /> TXT</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#" onclick="$('#dataTableExample1').tableExport({type:'excel',escape:'false'});"> 
                      <img src="assets/dist/img/xls.png" width={24} alt="logo" /> XLS</a>
                  </li>
                  <li>
                    <a href="#" onclick="$('#dataTableExample1').tableExport({type:'doc',escape:'false'});">
                      <img src="assets/dist/img/word.png" width={24} alt="logo" /> Word</a>
                  </li>
                  <li>
                    <a href="#" onclick="$('#dataTableExample1').tableExport({type:'powerpoint',escape:'false'});"> 
                      <img src="assets/dist/img/ppt.png" width={24} alt="logo" /> PowerPoint</a>
                  </li>
                  <li className="divider" />
                  <li>
                    <a href="#" onclick="$('#dataTableExample1').tableExport({type:'png',escape:'false'});"> 
                      <img src="assets/dist/img/png.png" width={24} alt="logo" /> PNG</a>
                  </li>
                  <li>
                    <a href="#" onclick="$('#dataTableExample1').tableExport({type:'pdf',pdfFontSize:'7',escape:'false'});"> 
                      <img src="assets/dist/img/pdf.png" width={24} alt="logo" /> PDF</a>
                  </li>
                </ul>
              </div>
              {/* ./Plugin content:powerpoint,txt,pdf,png,word,xl */}
              <div className="table-responsive">
                <table id="dataTableExample1" className="table table-bordered table-striped table-hover">
                  <thead>
                    <tr className="info">
                      <th>Photo</th>
                      <th>User Name</th>
                      <th>Type</th>
                      <th>status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src="assets/dist/img/m1.png" className="img-circle" alt="User Image" width={50} height={50} /></td>
                      <td>Tony Kroos</td>
                      <td><span className="label-custom label label-default">Admin</span>
                      </td>
                      <td><span className="label-custom label label-default">Active</span>
                      </td>
                      <td>
                        <button type="button" className="btn btn-add btn-sm" data-toggle="modal" data-target="#update"><i className="fa fa-pencil" /></button>
                        <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#customer2"><i className="fa fa-trash-o" /> </button>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="assets/dist/img/m2.png" className="img-circle" alt="User Image" width={50} height={50} /></td>
                      <td>Mateo kovocih</td>
                      <td><span className="label-warning label label-default">Co-admin</span>
                      </td>
                      <td><span className="label-custom label label-default">Active</span>
                      </td>
                      <td>
                        <button type="button" className="btn btn-add btn-sm" data-toggle="modal" data-target="#update"><i className="fa fa-pencil" /></button>
                        <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#customer2"><i className="fa fa-trash-o" /> </button>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="assets/dist/img/m2.png" className="img-circle" alt="User Image" width={50} height={50} /></td>
                      <td>Luca Modric</td>
                      <td><span className="label-primary label label-default">Client</span>
                      </td>
                      <td><span className="label-custom label label-default">Active</span>
                      </td>
                      <td>
                        <button type="button" className="btn btn-add btn-sm" data-toggle="modal" data-target="#update"><i className="fa fa-pencil" /></button>
                        <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#customer2"><i className="fa fa-trash-o" /> </button>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="assets/dist/img/m4.png" className="img-circle" alt="User Image" width={50} height={50} /></td>
                      <td>Alvaro morata</td>
                      <td><span className="label-custom label label-default">admin</span>
                      </td>
                      <td><span className="label-danger label label-default">deactive</span>
                      </td>
                      <td>
                        <button type="button" className="btn btn-add btn-sm" data-toggle="modal" data-target="#update"><BsFillPencilFill /></button>
                        <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#customer2"><BsFillTrashFill /> </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* User Edit Modal */}
      <div className="modal fade" id="update" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header modal-header-primary">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
              <h3><i className="fa fa-plus m-r-5" /> Add new User</h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <form className="form-horizontal">
                    <fieldset>
                      {/* Text input*/}
                      <div className="col-md-6 form-group">
                        <label className="control-label">User Name</label>
                        <input type="text" placeholder="User Name" className="form-control" />
                      </div>
                       {/* Text input*/}
                       <div className="col-md-6 form-group">
                        <label className="control-label">Email</label>
                        <input className="form-control" type="email" />
                      </div>
                      {/* Text input*/}
                      <div className="col-md-6 form-group">
                        <label className="control-label">Password</label>
                        <input className="form-control" type="password" />
                      </div>
                      {/* Text input*/}
                      <div className="col-md-6 form-group">
                        <label className="control-label">Address</label>
                        <input className="form-control" type="text" />
                      </div>
                      {/* Text input*/}
                      <div className="col-md-6 form-group">
                        <label className="control-label">Mobile</label>
                        <input className="form-control" type="text" />
                      </div>
  
                      <div className="col-md-6 form-group">
                        <label className="control-label">Type</label>
                        <input type="text" placeholder="Type" className="form-control" />
                      </div>
  
                       {/* Text input*/}
                       <div className="col-md-6 form-group">
                        <label className="control-label">Photo</label>
                        <input name="filebutton" className="form-control" type="file" />
                      </div>
                      {/* <div className="col-md-12 form-group user-form-group">
                        <div className="d-flex gap-5">
                          <button type="button" className="btn btn-danger btn-sm">Cancel</button>
                          <button type="submit" className="btn btn-add btn-sm">Update</button>
                        </div>
                      </div> */}
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className=" d-flex modal-footer">
              {/* <button type="button" className="btn btn-danger pull-left" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success pull-right" >Save</button> */}
              <button type="submit" className="btn btn-add pull-left">Save</button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      {/* /.modal */}
      {/* Modal */}    
      {/* User Delete Modal */}
      <div className="modal fade" id="update" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header modal-header-primary">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
              <h3><i className="fa fa-plus m-r-5" /> Add new User</h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <form className="form-horizontal">
                    <fieldset>
                      {/* Text input*/}
                      <div className="col-md-6 form-group">
                        <label className="control-label">User Name</label>
                        <input type="text" placeholder="User Name" className="form-control" />
                      </div>
                       {/* Text input*/}
                       <div className="col-md-6 form-group">
                        <label className="control-label">Email</label>
                        <input className="form-control" type="email" />
                      </div>
                      {/* Text input*/}
                      <div className="col-md-6 form-group">
                        <label className="control-label">Password</label>
                        <input className="form-control" type="password" />
                      </div>
                      {/* Text input*/}
                      <div className="col-md-6 form-group">
                        <label className="control-label">Address</label>
                        <input className="form-control" type="text" />
                      </div>
                      {/* Text input*/}
                      <div className="col-md-6 form-group">
                        <label className="control-label">Mobile</label>
                        <input className="form-control" type="text" />
                      </div>
  
                      <div className="col-md-6 form-group">
                        <label className="control-label">Type</label>
                        <input type="text" placeholder="Type" className="form-control" />
                      </div>
  
                       {/* Text input*/}
                       <div className="col-md-6 form-group">
                        <label className="control-label">Photo</label>
                        <input name="filebutton" className="form-control" type="file" />
                      </div>
                      {/* <div className="col-md-12 form-group user-form-group">
                        <div className="d-flex gap-5">
                          <button type="button" className="btn btn-danger btn-sm">Cancel</button>
                          <button type="submit" className="btn btn-add btn-sm">Update</button>
                        </div>
                      </div> */}
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className=" d-flex modal-footer">
              {/* <button type="button" className="btn btn-danger pull-left" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success pull-right" >Save</button> */}
              <button type="submit" className="btn btn-add pull-left">Save</button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      {/* /.modal */}
      {/* Modal */}    
      {/* delete user Modal2 */}
      <div className="modal fade" id="customer2" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header modal-header-primary">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
              <h3><i className="fa fa-user m-r-5" /> Delete User</h3>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <form className="form-horizontal">
                    <fieldset>
                      <div className="col-md-12 form-group user-form-group">
                        <label className="control-label">Delete User</label>
                        <div className="pull-right">
                          <button type="button" className="btn btn-danger btn-sm">NO</button>
                          <button type="submit" className="btn btn-add btn-sm">YES</button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger pull-left" data-dismiss="modal">Close</button>
            </div>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
      {/* /.modal */}
    </section>
    {/* /.content */}
    </div>
   </div>
  )
}

export default DemoTable
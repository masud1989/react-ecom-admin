import React from 'react'
import {BsArrowDownRight, BsArrowUpRight} from 'react-icons/bs'
import Chart from '../components/Chart'
import Datatable from '../components/Datatable'
import Tables from '../components/Tables'



const DashboardPage = () => {
  return (
    <div className='mb-10'>
      <h3 className='mb-4 title'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <h5 className='title'>Total</h5>
            <h4 className="mb-0 title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className='text-success fw-bold '>
              <BsArrowUpRight /> 32%
            </h6>
            <p className="mb-0 fw-bold text-secondary">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <h5 className="title">Total</h5>
            <h4 className="mb-0 title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className='text-success fw-bold '>
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 fw-bold text-secondary">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <h5 className="title">Total</h5>
            <h4 className="mb-0 title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className='text-danger fw-bold '>
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0 fw-bold text-secondary">Compared To April 2022</p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-bd lobidrag">
                <div className="panel-body">
      <div className='mt-5 text-center'>
     
        <Chart />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* charts  */}
      {/* <Chart /> */}

      <div className='mt-5 text-center'>
        <Datatable />
      </div>
    </div>
  )
}

export default DashboardPage
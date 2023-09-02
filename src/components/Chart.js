import React from 'react'
import { Column } from "@ant-design/plots";

 //Charts
 const data = [
    {
      type: "Jan",
      sales: 45,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 148,
    },
    {
      type: "Jun",
      sales: 138,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 138,
    },
    {
      type: "Nov",
      sales: 110,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#008080";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  //charts
const Chart = () => {
  return (
    // <div>
    //      {/* charts */}
    //   <div className="mt-4">
    //     {/* <h3 className="title text-center">Income Statics</h3> */}
    //     <div>
    //       <Column {...config} />
    //     </div>
    //   </div>
    //   {/* charts  */}
    // </div>
    <section className='content-header'>
    <div>
    <h3 className='mb-4 title'>Income Statics..</h3>
      <section className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-bd lobidrag">
              <div className="panel-body">
                <div className="table-responsive">
                  <div>
                    <Column {...config} />
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
  )
}

export default Chart
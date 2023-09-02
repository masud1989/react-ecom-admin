import React, { useState } from 'react';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { BiAbacus, BiLogoBlogger, BiSolidDashboard } from 'react-icons/bi'
import { FaVectorSquare, FaRing } from 'react-icons/fa'
import { BsPeopleFill, BsFillTicketFill } from 'react-icons/bs'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { IoIosNotifications } from 'react-icons/io'

import { Layout, Menu, theme } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">RMA</span>
            <span className="lg-logo">RM Admin Panel</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === 'signout') {

            } else {
              navigate(key)
            }
          }}
          items={[
            {
              key: '/admin',
              icon: <BiSolidDashboard />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <BsPeopleFill />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <FaVectorSquare />,
              label: 'Catalog',
              children: [
                {
                  key: 'add-category',
                  label: 'Add Category',
                },
                {
                  key: 'category-list',
                  label: 'Category List',
                },
                {
                  key: 'add-brand',
                  label: 'Add Brand',
                },
                {
                  key: 'brand-list',
                  label: 'Brand List',
                },
                {
                  key: 'add-product',
                  label: 'Add Product',
                },
                {
                  key: 'product-list',
                  label: 'Product List',
                },
              ]
            },
            {
              key: 'colors',
              icon: <FaRing />,
              label: 'Colors',
              children: [
                {
                  key: 'add-color',
                  label: 'Add Color',
                },
                {
                  key: 'color-list',
                  label: 'Color List',
                }
              ]
            },
            {
              key: 'coupons',
              icon: <BsFillTicketFill className="fs-4" />,
              label: 'Coupons',
              children: [
                {
                  key: 'add-coupon',
                  label: 'Add Coupon',
                },
                {
                  key: 'coupon-list',
                  label: 'Coupon List',
                }
              ]
            },
            {
              key: "blogs",
              icon: <BiLogoBlogger className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "add-blog",
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  label: "Blog List",
                },
                {
                  key: "add-blog-category",
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "orders",
              icon: <BiAbacus className="fs-4" />,
              label: "Orders",
            },
            {
              key: "enquiries",
              icon: <AiFillQuestionCircle className="fs-4" />,
              label: "Enquiries",
            },

          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4 text-info" />
              <span className="badge bg-info rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div >
                <img
                  className="rounded-circle border border-2 border-info"
                  width={42}
                  height={42}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0  title">Admin</h5>
                <p className="mb-0  sub-title">admin@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;



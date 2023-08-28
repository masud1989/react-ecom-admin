import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import ResetPasswordPage from './pages/ResetPassword';
import ForgotPasswordPage from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';
import Oreder from './pages/Oreders';
import Enquiries from './pages/Enquiries';
import Customers from './pages/Customers';
import CategoryList from './pages/CategoryList';
import BrandList from './pages/BrandList';
import ProductList from './pages/ProductList';
import ColorList from './pages/ColorList';
import CouponList from './pages/CouponList';
import BlogList from './pages/BlogList';
import BlogCategoryList from './pages/BlogCategoryList';
import AddColor from './pages/AddColor';
import AddCoupon from './pages/AddCoupon';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/ResetPassword' element={<ResetPasswordPage />} />
        <Route path='/ForgotPassword' element={<ForgotPasswordPage />} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path='orders' element={<Oreder />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='customers' element={<Customers />} />
          <Route path='category-list' element={<CategoryList />} />
          <Route path='brand-list' element={<BrandList />} />
          <Route path='product-list' element={<ProductList />} />
          <Route path='add-product' element={<AddProduct />} />
          <Route path='color-list' element={<ColorList />} />
          <Route path='add-coupon' element={<AddCoupon />} />
          <Route path='coupon-list' element={<CouponList />} />
          <Route path='blog-list' element={<BlogList />} />
          <Route path='blog-category-list' element={<BlogCategoryList />} />
          <Route path='add-color' element={<AddColor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

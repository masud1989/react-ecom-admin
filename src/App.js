import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/ResetPassword' element={<ResetPasswordPage />} />
        <Route path='/ForgotPassword' element={<ForgotPasswordPage />} />  
        <Route path='/admin' element={<MainLayout />}>
          <Route index element= {<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

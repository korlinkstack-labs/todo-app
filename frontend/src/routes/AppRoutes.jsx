import { Routes, Route } from 'react-router-dom';
import Login from '../components/pages/auth/Login';
import LandingPage from '../components/pages/LandingPage';
import Register from '../components/pages/auth/Register';
import Dashboard from '../components/pages/Dashboard';
import Settings from '../components/pages/Settings';
import ProtectedRoute from '../routes/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes Group */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
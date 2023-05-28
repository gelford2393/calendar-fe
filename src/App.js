import React from 'react';
import './App.css';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import CalendarLanding from './pages/CalendarLanding';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.user.hasAccess);

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace />
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          CALENDAR APP
        </h2>
        {location.pathname === '/' && (
          <div className="flex justify-center mt-4">
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            > 
              Log In
            </Link>
          </div>
        )}
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/appointment/*"
          element={
            <PrivateRoute>
              <CalendarLanding />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

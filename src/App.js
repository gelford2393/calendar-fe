
import React, { useState } from 'react'
import './App.css';
import CalendarLanding from './pages/CalendarLanding';
import Login from './pages/Login';
import { useSelector } from 'react-redux';

function App() {
  const userHasAccess = useSelector(state => state.user.hasAccess)

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          CALENDAR APP
        </h2>
      </div>
      {userHasAccess ? <CalendarLanding /> :
        <Login />}
    </div>
  )
}

export default App;

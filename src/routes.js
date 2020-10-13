import React from 'react'
import { Navigate } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import MainLayout from './layouts/MainLayout'
import AccountView from './views/account/AccountView'
import ServiceListView from './views/services/ServiceListView'
import DashboardView from './views/dash/DashboardView'
import LoginView from './views/auth/LoginView'
import NotFoundView from './views/errors/NotFoundView'
import FAQs from './views/faqs/FAQs'
import RegisterView from './views/auth/RegisterView'
import ContactUs from './views/contact-us/ContactUs'

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'profile', element: <AccountView /> },
      { path: 'services', element: <ServiceListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'FAQs', element: <FAQs /> },
      { path: 'contact-support', element: <ContactUs /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> },
    ],
  },
]

export default routes

import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout'
import { HomePage } from '../pages/HomePage/HomePage'
import { AboutPage } from '../pages/AboutPage/AboutPage'
import { ServicesPage } from '../pages/ServicesPage/ServicesPage'
import { PricingPage } from '../pages/PricingPage/PricingPage'
import { GalleryPage } from '../pages/GalleryPage/GalleryPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'gallery', element: <GalleryPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}

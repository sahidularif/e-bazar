import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductDetailsPage from './pages/ProductDetails.tsx'
import { Provider } from 'react-redux'
import store from './redux/store/store.ts'
import LoginPage from './pages/Login.tsx'
import RegisterPage from './pages/Register.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

)

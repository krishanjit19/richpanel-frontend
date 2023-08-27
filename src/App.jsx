import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from '../src/pages/Home/Home';
import './App.scss';
import Register from "./pages/Register/Register";
import Plans from "./pages/Plans/Plans";
import Payment from "./pages/Payment/Payment";
import Success from "./pages/Success/Success";

const Layout = () => {
  return(
    <div className='app'>
      <Outlet/>
      <div className="footer">© Krishanjit Rajbongshi</div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/plans',
        element: <Plans/>
      },
      {
        path: '/payment',
        element: <Payment/>
      },{
        path:'/success',
        element:<Success/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

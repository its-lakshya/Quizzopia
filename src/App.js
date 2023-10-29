import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';

const AppLayout = () => {
  return (
    <div className="bg-black h-screen w-full">
      <Outlet/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"",
        element:<Login/>
      }
    ]
  }
])

const App = () => {
  return (
    // <Provider>
      <RouterProvider router ={appRouter}/>
    // </RouterProvider>
  )
}

export default App;

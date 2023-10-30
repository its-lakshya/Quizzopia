import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import { Provider } from 'react-redux';
import  Store  from './store/Store';

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
      },
      {
        path:"signIn",
        element:<SignIn/>
      }
    ]
  }
])

const App = () => {
  return (
    <Provider store={Store}>
      <RouterProvider router ={appRouter}/>
    </Provider>
  )
}

export default App;

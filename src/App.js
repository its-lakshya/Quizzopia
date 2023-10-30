import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import { Provider } from 'react-redux';
import  Store  from './store/Store';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Question1 from './components/Question1';
import Question2 from './components/Question2';

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
        path:"signin",
        element:<SignIn/>
      },
      {
        path:"welcome",
        element:<Welcome/>
      },
      {
        path:"quiz",
        element:<Quiz/>,
        children:[
          {
            path:"/quiz",
            element:<Question1/>,
          },
          {
            path:"/quiz/question2",
            element:<Question2/>,
          }
        ]
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

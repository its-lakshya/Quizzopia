import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import { Provider } from 'react-redux';
import  Store  from './store/Store';
import Welcome from './components/Welcome';
import Game from './components/Game';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3'
import Score from './components/Score';

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
        path:"/game",
        element:<Game/>,
        children:[
          {
            path:"/game/ques1",
            element:<Question1/>,
          },
          {
            path:"/game/ques2",
            element:<Question2/>,
          },
          {
            path:"/game/ques3",
            element:<Question3/>,
          }
        ]
      },
      {
        path:"/score",
        element:<Score/>
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

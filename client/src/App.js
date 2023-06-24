
import './App.css';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';
import {createBrowserRouter,RouteProvider, Router, RouterProvider} from 'react-router-dom';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },

    {
      path:'/cards',
      element:<Cards/>
    },
    

  ])
  
  return (
    <div className="App">
   <RouterProvider router={router}/>


    </div>
  );
}

export default App;

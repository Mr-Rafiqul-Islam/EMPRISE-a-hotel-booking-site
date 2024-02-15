import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>
    </Route>
));

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

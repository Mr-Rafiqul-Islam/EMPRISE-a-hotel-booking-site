import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
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

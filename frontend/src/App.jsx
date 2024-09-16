import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import QAJobs from './pages/QAJobs'
import OurCourses from './pages/OurCourses'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Blog from './pages/Blog'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/qajobs' element={<QAJobs/>}/>
      <Route path='/ourcourses' element={<OurCourses/>}/>
      <Route path='aboutus' element={<AboutUs/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Route>

  )
)
function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

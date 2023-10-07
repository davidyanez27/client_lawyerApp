import {Route, Routes} from 'react-router-dom';

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Home from './pages/HomePage';

import ProtectedRoute from './ProtectedRoute'

 function App() {
  return (
    <Routes>
      <Route path='/' element = {<LoginPage/>}/>
      <Route path='/login' element = {<LoginPage />}/>
      <Route path='/register' element = {<RegisterPage/>}/>
      
      <Route element={<ProtectedRoute/>}>

      <Route path='/home' element = {<Home/>}/>
      <Route path='/profile' element = {<h1 className=' bg-blue-500  text-4xl font-bold'>Profile</h1>}/>
    

      </Route>

      </Routes>
    
  )
}

export default App;

import {Route, Routes} from 'react-router-dom';

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Home from './pages/HomePage';


 function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/login' element = {<LoginPage />}/>
      <Route path='/register' element = {<RegisterPage/>}/>
      <Route path='/profile' element = {<h1 className='text-4xl font-bold'>Profile</h1>}/>
    </Routes>
    
  )
}

export default App;

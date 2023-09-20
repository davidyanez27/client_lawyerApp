import {Route, Routes} from 'react-router-dom';
//import Login from './pages/login'

 function App() {
  return (
    <Routes>
      <Route path='/' element = {<h1 className='text-4xl font-bold'>Home</h1>}/>
    </Routes>
  )
}

export default App;

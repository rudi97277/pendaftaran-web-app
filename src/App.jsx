import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

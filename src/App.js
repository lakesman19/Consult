import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Calendar from './Components/Userpage/Wrapper/Calendar'
import Customers from './Components/Userpage/Wrapper/Customers'
import Notifications from './Components/Userpage/Wrapper/Notifications'
import Reports from './Components/Userpage/Wrapper/Reports'
import Settings from './Components/Userpage/Wrapper/Settings'
import Login from './pages/login/Login'
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup.js'
import Forgotpassword from './pages/forgotpassword/Forgotpassword.js'
import Reset from './pages/resetpassword/Reset.js'

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Calendar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/resetpassword' element={<Reset />} />
          <Route path='/forgotpassword' element={<Forgotpassword />} />
          <Route path='/Wrapper/Calendar' element={<Calendar />} />
          <Route path='/Wrapper/Reports' element={<Reports />} />
          <Route path='/Wrapper/Customers' element={<Customers />} />
          <Route path='/Wrapper/Notifications' element={<Notifications />} />
          <Route path='/Wrapper/Settings' element={<Settings />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

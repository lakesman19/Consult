import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Calendar from './Components/Userpage/Wrapper/Calendars'
import Customers from './Components/Userpage/Wrapper/Customers'
import Notifications from './Components/Userpage/Wrapper/Notifications'
import Reports from './Components/Userpage/Wrapper/Reports'
import Settings from './Components/Userpage/Wrapper/Settings'
// import Login from './Pages/Login/Login'
// import Signin from './pages/Signin/Signin'
// import Signup from './pages/Signup/Signup.js'
// import Forgotpassword from './pages/Forgotpassword/Forgotpassword.js'
// import Reset from './pages/Resetpassword/Reset.js'

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Calendar />} />
          {/* <Route path='/login' element={<Login />} /> */}
          {/* <Route path='/Signin' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/resetpassword' element={<Reset />} />
         <Route path='/forgotpassword' element={<Forgotpassword />} />  */}
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

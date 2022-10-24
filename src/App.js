import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Calendar from "./Components/Userpage/Wrapper/Calendars";
import Customers from "./Components/Userpage/Wrapper/Customers";
import Notifications from "./Components/Userpage/Wrapper/Notifications";
import Reports from "./Components/Userpage/Wrapper/Reports";
import Settings from "./Components/Userpage/Wrapper/Settings";
import Login from "./Pages/Login/Login";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup.js";
import Forgotpassword from "./Pages/Forgotpassword/Forgotpassword.js";
import Reset from "./Pages/Resetpassword/Reset.js";
import Weekly from "./Pages/Weeklytime/Weekly.js";
import About from "./Pages/Aboutbusiness/About.js";
import Services from "./Pages/Servicesabout/Services";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>

<Route path='/Wrapper/Calendar' element={<Calendar />} />
          <Route path='/Wrapper/Reports' element={<Reports />} />
          <Route path='/Wrapper/Customers' element={<Customers />} />
          <Route path='/Wrapper/Notifications' element={<Notifications />} />
          <Route path='/Wrapper/Settings' element={<Settings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

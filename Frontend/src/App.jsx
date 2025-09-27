import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";

import StudentProfile from "./components/Student/StudentProfile";
import StudentResources from "./components/Student/StudentResource";
import StudentPayment from "./components/Student/StudentPayment";
import StudentLibrary from "./components/Student/StudentLibrary";
import StudentAttendance from "./components/Student/StudentAttendance";
import StudentDashboard from "./components/Student/StudentDashboard";
import StudentClasses from "./components/Student/StudentClasses";
import FacultyDashboard from "./components/Faculty/FacultyDashboard";
import HodDashboard from "./components/Hod/HodDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/resource" element={<StudentResources />} />
        <Route path="/student/payment" element={<StudentPayment />} />
        <Route path="/student/library" element={<StudentLibrary />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/classes" element={<StudentClasses />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/hod" element={<HodDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./LoginPage"; // your login page
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword"; // ← add this

// Optional: placeholder for the next page (create it later)
//import SetNewPassword from "./SetNewPassword"; // you can create this file next

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} /> {/* optional alias */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Next step in the flow - create this component when ready */}
        {/* <Route path="/set-new-password" element={<SetNewPassword />} /> */}
        {/* Optional: 404 / catch-all route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

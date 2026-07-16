import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import JobDetails from "./pages/JobDetails/JobDetails";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Companies from "./pages/Companies/Companies.jsx"
import CompanyDetails from "./pages/CompanyDetails/CompanyDetails";
import About from "./pages/About/About.jsx"
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/:id" element={<CompanyDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login  />}/>
        <Route path="/register" element={<Register />} />
      </Routes>
      

      <Footer />
      
    </>
  );
}

export default App;
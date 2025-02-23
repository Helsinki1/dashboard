import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./index.css"

import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {

  return (
    <Router>
      <nav className="flex items-center bg-slate-300 px-4 py-4">
        <h1 className="ml-10 text-xl">Dashboard</h1>

        <div className= "flex ml-auto">
          <Link to="/" className="text-gray-700 hover:underline mr-11 text-lg"> 
            Overview
          </Link>
          <Link to="/analytics" className="text-gray-700 hover:underline mr-11 text-lg"> 
            Analytics
          </Link>
          <Link to="/reports" className="text-gray-700 hover:underline mr-11 text-lg">
            Reports
          </Link>
          <Link to="/settings" className="text-gray-700 hover:underline mr-11 text-lg">
            Settings 
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App

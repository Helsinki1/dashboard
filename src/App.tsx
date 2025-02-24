import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./index.css"

import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {

  return (
    <Router>
      <div className="flex w-screen">
        <nav className="flex flex-col h-screen w-60 items-start justify-start bg-blue-500 px-4 py-4">
          <h1 className="ml-3 mt-10 text-3xl text-white font-bold">Dealer</h1>
          <h1 className="ml-3 mt-1 text-3xl text-white font-bold">Dashboard</h1>

          <div className= "flex flex-col w-full ml-3 mt-9 space-y-5">
            <Link to="/" className="text-white hover:underline mr-11 text-lg"> 
              Overview
            </Link>
            <Link to="/analytics" className="text-white hover:underline mr-11 text-lg"> 
              Analytics
            </Link>
            <Link to="/reports" className="text-white hover:underline mr-11 text-lg">
              Reports
            </Link>
            <Link to="/settings" className="text-white hover:underline mr-11 text-lg">
              Settings 
            </Link>
          </div>
        </nav>

        <div className="flex-1 p-4 w-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

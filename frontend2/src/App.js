import React from 'react';
import './App.css';
import 'https://www.w3schools.com/w3css/4/w3.css'; // Import W3.CSS stylesheet
import CreateEntry from './Pages/CreateEntry.jsx';
import MyDashboard from './Pages/MyDashboard.jsx';
import Header from './Components/Header.jsx';
import ViewEntry from './Pages/ViewEntry.jsx';
import Footer from './Components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Header with W3.CSS styles */}
      <Header className="w3-container w3-teal" title="Your App Title" />

      {/* Main content container with W3.CSS styles */}
      <div className="w3-container">
        <Routes>
          <Route exact path="/" element={<MyDashboard />} />
          <Route exact path="/createEntry" element={<CreateEntry />} />
          <Route exact path="/viewEntry" element={<ViewEntry />} />
        </Routes>
      </div>

      {/* Footer with W3.CSS styles */}
      <Footer className="w3-container w3-teal" />

    </Router>
  );
}

export default App;

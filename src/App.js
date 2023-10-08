import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactInfo';
import SignupPage from './Component'; // Create a SignupPage component
import LoginPage from './Component'; // Create a LoginPage component
import Navigation from './Links/Navigation';
import Header from './components/Header'; // Import your Header component
import Footer from './components/Footer'; // Import your Footer component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include your Header component */}
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignupPage />} /> {/* Add the SignupPage route */}
          <Route path="/login" element={<LoginPage />} /> {/* Add the LoginPage route */}
        </Routes>
        <Footer /> {/* Include your Footer component */}
      </div>
    </Router>
  );
}

export default App;

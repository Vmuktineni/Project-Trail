// HomePage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../CSS/HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <Header />
      <div className="content">
        <div className="center-content">
          <h1>Welcome to Mechazone</h1>
          <p>Discover amazing products and services</p>
          <div className="btn-container">
            <Link to="/signup" className="orange-button">Register</Link>
            <Link to="/login" className="red-button">Login</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

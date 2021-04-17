import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Navigation from "./components/Navigation";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Content from "./components/Content";
function App() {
  return (
    <div>

      <Navigation />

      <main className="main-container">

        <LeftSidebar />
        
       <Content /> 
        <RightSidebar />

      </main>
    </div>
  );
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Description from "./pages/Description";
import AllEvents from "./pages/AllEvents";
import Nav from './componet/Nav';
import Footer from './componet/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Photo from './pages/Photo';

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/allevents" element={<AllEvents />} />
          <Route path="/description" element={<Description />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/photo' element={<Photo/>}/> 


        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
}

export default App;

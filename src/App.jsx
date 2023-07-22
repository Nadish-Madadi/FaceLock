import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Navbar from './components/navbar/Navbar';
import Face_Detection from './components/face_detection/FaceDetection';
import FaceDetectionRegister from './components/face_detection_reg/FaceDetectionRegister';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#005BFF] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faceid" element={<Face_Detection />} />
          <Route path="/faceidregister" element={<FaceDetectionRegister />} />
        </Routes>
      </main>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

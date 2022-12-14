import React from 'react'
import './styles/App.css'
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <AppRouter />
  )
}

export default App;
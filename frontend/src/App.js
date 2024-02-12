
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateUser from './components/CreateUser';
import CreateNote from './components/CreateNote';
function App() {
  return (

    <BrowserRouter>
      <Navigation/>
      <div className="container p-4">
        <Routes>
            <Route path='/' Component={NotesList} exact />
            <Route path='/edit/:id' Component={CreateNote}  />
            <Route path='/create' Component={CreateNote}  />
            <Route path='/user' Component={CreateUser}  />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

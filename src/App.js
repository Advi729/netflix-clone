import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { originals, action } from './urls';

function App() {
  return (
    <div className='App'>
        <NavBar />
        <Banner />
        <RowPost url={originals} title='Netflix Originals' />
        <RowPost url={action} title='Action' isSmall />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
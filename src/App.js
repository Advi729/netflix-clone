import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { originals, action, horror, romance, documentaries, comedy, trending } from './urls';

function App() {
  return (
    <div className='App'>
        <NavBar />
        <Banner />
        <RowPost media={'tv'} url={originals} title='Netflix Originals' />
        <RowPost media={'movie'} url={action} title='Action' isSmall />
        <RowPost media={'movie'} url={horror} title='Horror' isSmall />
        <RowPost media={'movie'} url={romance} title='Romance' isSmall />
        <RowPost media={'movie'} url={documentaries} title='Documentaries' isSmall />
        <RowPost media={'movie'} url={comedy} title='Comedy' isSmall />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
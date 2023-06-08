import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { originals, action, horror, romance, documentaries, comedy, trending } from './urls';

function App() {
  const rowPosts = [
    { key: 'originals', media: 'tv', url: originals, title: 'Netflix Originals' },
    { key: 'action', media: 'movie', url: action, title: 'Action', isSmall: true },
    { key: 'horror', media: 'movie', url: horror, title: 'Horror', isSmall: true },
    { key: 'romance', media: 'movie', url: romance, title: 'Romance', isSmall: true },
    { key: 'documentaries', media: 'movie', url: documentaries, title: 'Documentaries', isSmall: true },
    { key: 'comedy', media: 'movie', url: comedy, title: 'Comedy', isSmall: true }
  ];

  return (
    <div className='App'>
        <NavBar />
        <Banner />
        {rowPosts.map((post) => (
        <RowPost key={post.key} media={post.media} url={post.url} title={post.title} isSmall={post.isSmall} />
        ))}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
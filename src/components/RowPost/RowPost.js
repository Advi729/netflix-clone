import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import './RowPost.css'
import axios from '../../axios';
import { imageUrl, baseUrl, API_KEY } from '../../constants/constants';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('');
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data);
            setMovies(response.data.results);
        }).catch(err => {
            alert('Network Error');
        });
    }, []);

    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleMovieTrailer = (id) => {
        console.log(id);
        axios.get(`${baseUrl}/${props.media}/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log('trailer:', response.data);
            if(response.data.results.length !== 0) {
                const filtered = response?.data?.results?.filter((obj) => obj.type.toLowerCase() === 'trailer' );
                console.log('filtered: ', filtered);
                if(filtered.length === 0) {
                    setUrlId(response?.data?.results[0]);
                } else {
                    setUrlId(filtered[0]);
                }
            }
        });
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies?.map((obj) => {
                return (
                    <img key={obj.id} onClick={() => {handleMovieTrailer(obj.id)}} className={props.isSmall ? 'small-poster' : 'poster'} alt='poster' src={`${obj ? imageUrl + obj?.backdrop_path : obj?.poster_path}`} />
                );
            })}
        </div>
        {urlId && <Youtube videoId={urlId.key} opts={opts}/>}
    </div>
  );
};

export default RowPost;
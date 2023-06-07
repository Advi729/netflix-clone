import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            const randomDecimal = Math.random();
            const randomInRange = Math.floor(randomDecimal * response?.data?.results.length);
            setMovie(response?.data?.results[randomInRange]);
            console.log('res:', response?.data?.results[randomInRange]);
        });
    }, []);
    return (
        <div style={{backgroundImage: `url(${movie ? imageUrl + movie?.backdrop_path : ''})`}}
            className="banner">
            <div className="content">
                <h1 className="title">{movie?.name || movie?.title}</h1>
                <div className="banner_btns">
                    <button className="btn">Play</button>
                    <button className="btn">My list</button>
                </div>
                <h1 className="description">{movie?.overview}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    );
};

export default Banner;
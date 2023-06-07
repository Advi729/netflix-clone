import { API_KEY, baseUrl } from "./constants/constants"

export const originals = `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const horror = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const romance = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const documentaries = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=99`;
export const comedy = `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`;




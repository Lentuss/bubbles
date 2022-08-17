import axios from 'axios';

const API_KEY = 'd181f6aed649ea703d889941a0afb502';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const getTVShowData = async searchLink => {
  const response = await axios.get(searchLink);
  const data = await response.data;
  return data;
};

export const getTrends = async () => {
  try {
    const link = `tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
    return await getTVShowData(link);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSearched = async searchQuery => {
  try {
    const link = `search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}&include_adult=false`;
    return await getTVShowData(link);
  } catch (error) {
    console.log(error.message);
  }
};

export const getDetails = async id => {
  try {
    const link = `tv/${id}?api_key=${API_KEY}&language=en-US`;
    return await getTVShowData(link);
  } catch (error) {
    console.log(error.message);
  }
};

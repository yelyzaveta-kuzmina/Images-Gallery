import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c16da31687654df0a01670a46f7ddaacea65474217706752d4433c3edc64af7a'
  }
});

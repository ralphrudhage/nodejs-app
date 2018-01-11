const querystring = require('querystring');
const googleUrl = 'http://www.google.com/search?q=';

const music = [
  { genre: 'metal', artist: 'Metallica' },
  { genre: 'metal', artist: 'Night Viper' },
  { genre: 'rock', artist: 'Danko Jones' },
  { genre: 'rock', artist: 'Motörhead' },
  { genre: 'rock', artist: 'Rancid' },
  { genre: 'trance', artist: 'Bassline Baby' },
  { genre: 'trance', artist: 'The Thrillseekers' },
  { genre: 'indie', artist: 'The Black Keys' },
  { genre: 'indie', artist: 'The White Stripes' }
];

function createQuery(artist) {
  const googleQuery = googleUrl + querystring.escape(artist);
  return googleQuery;
};

module.exports.createQuery = createQuery;
module.exports.music = music;

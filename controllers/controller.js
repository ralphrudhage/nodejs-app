const musicApi = require('../routes/musicApi.js');
const bodyParser = require('body-parser');
const musicSearch = require('../utilities/musicSearch');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const music = musicSearch.music;

module.exports = function (mockapp) {

  mockapp.get('/', function (req, res) {
    res.render('start');
  });

  // initialize modular route for use with mongodb
  mockapp.use('/api', musicApi);

  // error handling
  mockapp.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
  });

  // initialize routes
  mockapp.route('/musicSearch')
    .get(function (req, res) {
      let artist;
      if (req.query.genre === undefined) {
        artist = music.filter(s => s.genre === 'indie');
      } else {
        artist = music.filter(s => s.genre === req.query.genre);
      }
      res.render('musicSearch', { create: {}, list: artist });
    })
    .post(urlencodedParser, (req, res) => {
      if (!req.body) {return res.sendStatus(400);}
      const googleURL = musicSearch.createQuery(req.body.artist);
      const query = { artist: req.body.artist, str: 'google query: ', link: googleURL };
      const temp = req.body.genre;
      const genre = temp.split('=').pop();
      const artist = music.filter(s => s.genre === genre);
      res.render('musicSearch', { create: query, list: artist });
    });
};

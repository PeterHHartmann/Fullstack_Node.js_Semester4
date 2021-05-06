const { MovieDb } = require('moviedb-promise');
// ES6 Style
// import MovieDB from 'node-themoviedb';
const moviedb = new MovieDb('0e77296fcc10cd94343bc7518de413a0');

(async () => {
  try {
    const args = {
        sort_by: 'release_date.desc',
        year: '2006',
        with_cast: '2963'
    };
    const movie = await moviedb.discoverMovie(args);
    // const movie = await mdb.movie.getVideos(args);
    console.log(movie);
    /*
      {
        data: Object. Parsed json data of response
        headers: Object. Headers of response
      }
    */
  } catch (error) {
    console.error(error);
  }
})();
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT * FROM genres ORDER BY id ASC;`;
  pool.query(queryText)
  .then( result => {
    console.log('sending genres', result.rows)
    res.send(result.rows);
  }).catch(err => {
    console.log("error in GET genres", err);
    res.sendStatus(500);
  });
});

router.get('/details/:id', (req, res) => {
  console.log("In GET details: ", req.params.id);
  const queryText = 
      `SELECT "g"."name", "genre_id" FROM "movies_genres" as "mg"
      JOIN "genres" as "g" ON "mg"."genre_id" = "g"."id"
      WHERE "movie_id"=$1 -- expect 3 results
      GROUP BY "g"."name", "genre_id";
  `;
  pool.query(queryText, [req.params.id])
  .then((result) => {
    console.log("sending back: ", result.rows);
    res.send(result.rows); })
  .catch( (error) => {
    console.log('Error in genre router GET', error);
    res.sendStatus(500);
  });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
});

router.get('/details/:id', (req, res) => {
  console.log("In GET details: ", req.params.id);
  const queryText = 
      `SELECT "g"."name" FROM "movies" as "m"
      JOIN "movies_genres" as "mg" ON "m"."id" = "mg"."movie_id"
      RIGHT JOIN "genres" as "g" ON "mg"."genre_id" = "g"."id"
      WHERE "movie_id"=$1 -- expect 3 results
      GROUP BY "g"."name";
  `;
  pool.query(queryText, [req.params.id])
  .then((result) => {
    console.log("sending back: ", result.rows);
    res.send(result.rows); })
  .catch( (error) => {
    console.log('Error in movies router GET', error);
    res.sendStatus(500);
  });
});

module.exports = router;
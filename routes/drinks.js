const express = require('express');
const router = express.Router();
const fs = require('fs');

const getDrinksData = () => {
    const rawdata = fs.readFileSync('./public/json/drinks.json');
    return JSON.parse(rawdata);
  };

  const saveDrinksData = (data) => {
    fs.writeFileSync('../json/drinks.json', JSON.stringify(data, null, 2));
  };


// GET /drinks
router.get('/', (req, res) => {
    const drinks = getDrinksData();
    res.json(drinks);
});


module.exports = router;
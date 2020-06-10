var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Amery's PL test", is_response: false });
});

router.post('/', async function (req, res) {
    try {

      var ingested_data = JSON.parse(req.body.data);
      var game_list = await models.Games.findAll({
        where: {
          id: ingested_data.settings.game
        }
      });   
      var game = game_list[0];

      var console_list = await models.Consoles.findAll({
        where: {
          id: ingested_data.settings.console
        }
      });   
      var console = console_list[0];

      var creator_list = await models.Users.findAll({
        where: {
          id: ingested_data.creator.toString()
        }
      });   
      var creator = creator_list[0];

      var new_match =  models.Matches.create({
          id: 'test',
          timout: '2020-06-09 19:42:40.557000 +00:00',
          fee_amount: 432.543,
          fee_currencty_code: 'usd',
          price_amount: 4432.543,
          price_currencty_code: 'usd',
          play_two_for_region: false,
          createdAt: '2020-06-09 19:42:40.557000 +00:00',
          updatedAt: '2020-06-09 19:42:40.557000 +00:00',
          ConsolePkey: 3,
          FormatPkey: 3
      })
      res.render('index', { title: new_match, is_response: true });
    } catch (error)
    {
      res.render('index', { title: error, is_response: true });
    }
});

module.exports = router;

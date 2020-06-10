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

      var game_state_list = await models.GlobalStates.findAll({
        where: {
          id: ingested_data.status
        }
      });   
      var game_state = game_state_list[0];

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
      
      var opponent_list = await models.Users.findAll({
        where: {
          id: ingested_data.opponent.toString()
        }
      });   
      var opponent = opponent_list[0];

      var creator_is_win = creator.id == ingested_data.winner

      var format_search_key = (ingested_data.players.length == 2) ? '1v1 Duo' : '2v2 Duo'
      var format_list = await models.Formats.findAll({
        where: {
          title: format_search_key
        }
      });   
      var format = format_list[0];

      var new_match = await models.Matches.create({
          id: '290212453473860',
          timout: '2020-06-09 19:42:40.557000 +00:00',
          fee_amount: ingested_data.rules.entry_fee,
          fee_currency_code: 'usd',
          prize_amount: (ingested_data.rules.entry_fee * 2)*.9,
          prize_currency_code: 'usd',
          play_two_for_region: false,
          createdAt: '2020-06-09 19:42:40.557000 +00:00',
          updatedAt: '2020-06-09 19:42:40.557000 +00:00',
          ConsolePkey: console.pkey,
          FormatPkey: format.pkey,
          GamePkey: game.pkey,
          GlobalStatePkey: game_state.pkey
      })

      var creator_player = await models.Players.create({
        creator: true,
        winner: creator_is_win,
        ready: false,
        ready_at: '2020-06-09 19:42:40.557000 +00:00',
        joined_at: '2020-06-09 19:42:40.557000 +00:00',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00',
        MatchPkey: new_match.pkey,
        UserPkey: creator.pkey
      })

      var joiner_player = await models.Players.create({
        creator: false,
        winner: !creator_is_win,
        ready: false,
        ready_at: '2020-06-09 19:42:40.557000 +00:00',
        joined_at: '2020-06-09 19:42:40.557000 +00:00',
        createdAt: '2020-06-09 19:42:40.557000 +00:00',
        updatedAt: '2020-06-09 19:42:40.557000 +00:00',
        MatchPkey: new_match.pkey,
        UserPkey: opponent.pkey
      })

      res.render('index', { title: new_match, is_response: true });
    } catch (error)
    {
      res.render('index', { title: error, is_response: true });
    }
});

module.exports = router;

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
        include: [{model: models.Ratings}],
        where: {
          id: ingested_data.creator.toString()
        }
      });   
      var creator = creator_list[0];      
      var creator_gamertag_list = await models.Gamertags.findAll({
        include: [{model: models.Platforms}],
        where: {
          UserPkey: creator.pkey,
          PlatformPkey: game.PlatformPkey
        }
      });   
      var creator_gamertag = creator_gamertag_list[0];
      
      var opponent_list = await models.Users.findAll({
        include: [{model: models.Ratings}],
        where: {
          id: ingested_data.opponent.toString()
        }
      });   
      var opponent = opponent_list[0];      
      var opponent_gamertag_list = await models.Gamertags.findAll({
        include: [{model: models.Platforms}],
        where: {
          UserPkey: opponent.pkey,
          PlatformPkey: game.PlatformPkey
        }
      });   
      var opponent_gamertag = opponent_gamertag_list[0];

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

      var opponent_player = await models.Players.create({
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

      var is_disputed = ingested_data.disputed
      if(is_disputed){
        var dispute_search_key = ingested_data.dispute_reason_info.reason == '' ? 'match_expiration' : ingested_data.dispute_reason_info.reason
        var dispute_reason_list = await models.DisputeReasons.findAll({
          where: {
            type: dispute_search_key
          }
        }); 
        var dispute_reason = dispute_reason_list[0];
        var dispute = await models.Disputes.create({
          created_at: '2020-06-09 19:42:40.557000 +00:00',
          createdAt: '2020-06-09 19:42:40.557000 +00:00',
          updatedAt: '2020-06-09 19:42:40.557000 +00:00',
          DisputeReasonPkey: dispute_reason.pkey,
          MatchPkey: new_match.pkey,
        })
      }

      var response_object = {
        "data": {
          "getMatch": {
            "id": new_match.id,
            "timings": {
              "timeout": "1582996739000"
            },
            "state": {
              "global": {
                "value": game_state.value
              },
              "player": {
                "value": null,
                "isHost": null,
                "chatEnabled": null,
                "rulesReviewed": null,
                "canSubmitScores": null,
                "hasSubmittedPendingResults": null,
                "reports": [
                  {
                    "type": "AFK",
                    "active": false
                  },
                  {
                    "type": "STALLING",
                    "active": false
                  }
                ],
                "actions": null,
                "countdown": {
                  "type": null,
                  "start": null,
                  "end": null
                }
              }
            },
            "crossplay": false,
            "fee": {
              "amount": new_match.fee_amount,
              "currencyCode": new_match.fee_currency_code.toUpperCase(),
              "string": '$' + new_match.fee_amount
            },
            "prize": {
              "amount": new_match.prize_amount,
              "currencyCode": new_match.prize_currency_code.toUpperCase(),
              "string": '$' + new_match.prize_amount
            },
            "playTwoForRegion": new_match.play_two_for_region,
            "game": {
              "id": game.id,
              "name": game.name,
              "type": {
                "id": game.id,
                "name": game.name
              },
              "background": game.background,
              "scoreLabel": game.score,
              "rules": [
                {
                  "title": "No interference",
                  "body": "You're not allowed to intentionally interfere with your opponent's attempts to move around the map or score kills. You can't build in front of them or break their structures, unless Sabotage is explicitly allowed. You can break your own structures.",
                  "icon": "https://images.playerslounge.co/img/rules/restricted-icon.png"
                },
                {
                  "title": "Kills while downed",
                  "body": "Kills while downed count towards your final score. Kills after your death, however you get them, do not. Sorry, no trap kills from beyond the grave.",
                  "icon": "https://images.playerslounge.co/img/rules/restricted-icon.png"
                }
              ],
              "format": {
                "title": format.title,
                "icon": format.icon
              }
            },
            "console": {
              "id": console.id,
              "name": console.description
            },
            "players": [
              {
                "id": creator.id,
                "username": creator.username,
                "avatar": creator.avatar,
                "winner": creator_player.winner,
                "rating": {
                  "value": creator.Rating.value,
                  "color": creator.Rating.color
                },
                "gamertag": {
                  "tag": creator_gamertag.tag,
                  "platform": creator_gamertag.Platform.name
                },
                "currentUser": false,
                "ready": creator_player.ready
              },
              {
                "id": opponent.id,
                "username": opponent.username,
                "avatar": opponent.avatar,
                "winner": opponent_player.winner,
                "rating": {
                  "value": opponent.Rating.value,
                  "color": opponent.Rating.color
                },
                "gamertag": {
                  "tag": opponent_gamertag.tag,
                  "platform": opponent_gamertag.Platform.name
                },
                "currentUser": false,
                "ready": opponent_player.ready
              }
            ],
            "details": [
              {
                "title": "Game Type",
                "value": format.title
              }
            ],
            "dispute": {
              "type": is_disputed ? dispute_reason.type : '',
              "reason": is_disputed ? dispute_reason.reason : '',
              "reporter": is_disputed ? dispute_reason.type == 'match_expiration' ? '' : ingested_data.dispute_reason_info.starter  : '',
              "scores": [
                {
                  "userId": "",
                  "score": "false"
                },
                {
                  "userId": "1606057576026298",
                  "score": "false"
                }
              ]
            },
            "pendingResults": {
              "reporter": null,
              "isCounter": null,
              "winner": null,
              "scores": null
            }
          }
        }
      }
      res.render('index', { title: JSON.stringify(response_object, null, 4), is_response: true });
    } catch (error)
    {
      res.render('index', { title: error, is_response: true });
    }
});

module.exports = router;

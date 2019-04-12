const express = require('express');
const responseFactory = require('../factories/response.factory');
const emojiSn = require('emoji-to-short-name');

const router = express.Router();

router.route('/')
  .get(function(req, res) {
    let message = "Hit /encode ou /decode with either a GET or POST message passing an 'input' parameter with your text at QueryString (for GET) or Body (for POST)";
    res.write(message);
  });

router.route('/encode')
  .get(function(req, res) {
    let input = req.query.input;
    if(!input)
      return res.json(responseFactory.fail(-1, 'Missing "input" parameter on querystring'));

    let output = emojiSn.encode(input);
    res.json(responseFactory.success(output));
  })
  .post(function(req, res) {
    let input = req.body.input;
    if(!input)
      return res.json(responseFactory.fail(-1, 'Missing "input" parameter on body'));

    let output = emojiSn.encode(input);
    res.json(responseFactory.success(output));
  });

router.route('/decode')
  .get(function(req, res) {
    let input = req.query.input;
    let output = emojiSn.decode(input);
    res.json(responseFactory.success(output));
  })
  .post(function(req, res) {
    let input = req.body.input;
    let output = emojiSn.decode(input);
    res.json(responseFactory.success(output));
  });

module.exports = router;
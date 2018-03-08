#! /usr/bin/env node

const js = {};

const axios = require('axios');

js.show = function(username) {
  const yay = axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then(resp => console.log(resp.data))
  console.log('yay', yay);
  return yay;
}

module.exports = js;
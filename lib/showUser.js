#! /usr/bin/env node
const userKeys = require('./options/user');
const axios = require('axios');

module.exports = yargs => {
  yargs
    .options({
      'user': userKeys
    })

  const args = yargs.argv;

  axios
    .get(`https://api.github.com/users/${args.user}`)
    .then(repos => console.log('repos:\n', repos.data))
}
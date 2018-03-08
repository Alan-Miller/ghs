const repoKeys = require('./options/repo');
const axios = require('axios');
const pw = require('../config').password


module.exports = yargs => {
  yargs
    .options({
      'repo': repoKeys
    })

  const args = yargs.argv;

  axios({
    method: `POST`,
    url: `https://api.github.com/user/repos`,
    data: { "name": "yay", "username": "Alan-Miller", "password": pw },
    contentType: 'application/json'
  })
    .then(repos => console.log('repos:\n', repos))
}
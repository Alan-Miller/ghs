#! /usr/bin/env node
const userOptions = require('./options/user');
const yayOptions = require('./options/yay');
const axios = require('axios');

module.exports = yargs => {
  yargs
    .options({
      'user': userOptions,
      'yay': yayOptions,
    })

  const args = yargs.argv;

  console.log(args.yay ? `\nYay it's ${args.user}!` : `\nBoo! It's ${args.user}`);

  // axios
  //   .get(`https://api.github.com/users/${args.user}/repos`)
  //   .then(repos => console.log('repos:\n', repos.data))
}
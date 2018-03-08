const repoOptions = require('./options/repo');
const axios = require('axios');
const pw = require('../config').password


// repome() {
// repo_name=$1
// ghpass=$(security 2>/dev/null find-generic-password -a ashman -s github -w)
// # curl -u alan.ashman@gmail.com:$ghpass https://api.github.com/user/repos -d '{"name":"'$1'", "auto_init": true}'
// curl -u alan.ashman@gmail.com:$ghpass https://api.github.com/user/repos -d '{"name":"'$1'"}'
// ghpass=
// }



module.exports = yargs => {
  yargs
    .options({
      'repo': repoOptions
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
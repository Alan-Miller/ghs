#! /usr/bin/env node
const argsKeys = require('./lib/options/args');
const showArgs = require('./lib/showArgs');
const showRepos = require('./lib/showRepos');
const showUser = require('./lib/showUser');
const makeRepo = require('./lib/makeRepo');

const yargs = require('yargs')
  .options({
    'args': argsKeys
  })
  // .command(['args'], 'See all args', yargs => { }, args => { showArgs(yargs) })
  .command(['make'], 'Make repo', yargs => { }, args => { makeRepo(yargs) })
  .command(['show'], 'Show public repos', yargs => { }, args => { showRepos(yargs) })
  .command(['user'], 'Show user info', yargs => { }, args => { showUser(yargs) })

const args = yargs.argv;

if (args.args) console.log('args', args);

console.log('YARG!');
#!/usr/bin/env node
const program = require('commander');

const handler = require('./lib/command_handlers');

program
	.version('0.0.1')
	.command('get <getValue>')
	.option('-s, --server <server>', 'The server address and port')
	.parse(process.argv);

const serverAddress = program.server || undefined;
var options = {};
if (serverAddress != undefined)
	options = {'-s': serverAddress};

handler.handleCommand('get', program.getValue, options);

// program.parse(process.argv);
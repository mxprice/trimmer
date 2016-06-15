#!/usr/bin/env node
const program = require('commander');

const handler = require('./lib/command_handlers');

program
	.version('0.0.1')
	.command('get <getValue>')
	.option('-s, --server <server>', 'The server address and port')
	.action(function(getValue, options) {
		console.log(getValue);
		console.log(serverAddress);

		const serverAddress = options.server || undefined;
		var options = {};
		if (serverAddress != undefined)
			options = {'-s': serverAddress};

		handler.handleCommand('get', getValue, options);
	});

program.parse(process.argv);
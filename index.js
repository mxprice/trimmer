#!/usr/bin/env node
const program = require('commander');

program
	.version('0.0.1')
	.command('get <type>')
	.option('-s, --server <server>', 'The server address and port')
	.action(function(type, options) {
		const serverAddress = options.server || undefined;
		console.log(type);
		console.log(serverAddress);
	});

program.parse(process.argv);
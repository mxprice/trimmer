#!/usr/bin/env node
const program = require('commander');

const handler = require('./lib/command_handlers');

const SupportedOptions = ['server'];

program
	.command('get <getValue>')
	.option('-s, --server <server>', 'server')
	.option('-d, --ddd <ddd>', 'dddddd')
	.parse(process.argv);

const options = {};

for (const opt of program.commands[0].options) {
	const optionType = SupportedOptions.indexOf(opt.description)
	if (optionType != -1)
		options[opt.short] = program.commands[0][SupportedOptions[optionType]];
}

handler.handleCommand(program.commands[0].args[0], program.commands[0].args[1], options);

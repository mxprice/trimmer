const terminal = require('child_process').spawn('bash');

terminal.stdout.on('data', function (data) {
	console.log('stdout' + data);
});

terminal.on('exit', function (code) {
	console.log('child process exited with code ' + code);
});

function optionString(optionKey, optionVal) {
	if (optionVal == undefined) 
		return ''
	return optionKey + ' ' + optionVal + ' ';
}

module.exports.handleCommand = function (commandKey, commandValue, options) {
	const commandString = 'kubectl ' + optionString('-s', options['-s']) + commandKey + ' ' + commandValue + '\n';
	console.log('Your command: ' + commandString);
	terminal.stdin.write(commandString);
	terminal.stdin.end();
}
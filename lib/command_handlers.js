const terminal = require('child_process').spawn('bash');

terminal.stdout.on('data', function (data) {
	console.log('stdout' + data);
});

terminal.on('exit', function (code) {
	console.log('child process exited with code ' + code);
});

function paramString(optionKey, optionVal) {
	if (optionVal == undefined) 
		return ''
	return optionKey + ' ' + optionVal + ' ';
}

module.exports.handleCommand = function (commandKey, commandValue, options) {
	const commandString = 'kubectl ' + paramString('-s', options['-s']) + paramString(commandKey, commandValue) + '\n';
	console.log('Your command: ' + commandString);
	terminal.stdin.write(commandString);
	terminal.stdin.end();
}
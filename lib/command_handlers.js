const terminal = require('child_process').spawn('bash');

terminal.stdout.on('data', function (data) {
	console.log(data);
});

terminal.on('exit', function (code) {
	if (code == 1) {
		"ERROR: Invalid arguments."
	}
});

// helper
function paramString(optionKey, optionVal) {
	if (optionVal == undefined) 
		return ''
	return optionKey + ' ' + optionVal + ' ';
}

module.exports.handleCommand = function (commandKey, commandValue, options) {
	var commandString = 'kubectl ' + paramString(commandKey, commandValue);
	for (const key of Object.keys(options)) {
		commandString += paramString(key, options[key]);
	}
	commandString += '\n';

	terminal.stdin.write(commandString);
	terminal.stdin.end();
}
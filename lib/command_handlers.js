const terminal = require('child_process').spawn('bash');

terminal.stdout.on('data', function (data) {
	console.log('stdout' + data);
});

terminal.on('exit', function (code) {
	console.log('child process exited with code ' + code);
});

module.exports.handleCommand = function (commandKey, commandValue, options) {
	let commandString = 'kubectl ' + ('-s ' + options['-s'] || '') + ' ' + commandKey + ' ' + commandValue + '\n';
	terminal.stdin.write(commandString);
	terminal.stdin.end();
}
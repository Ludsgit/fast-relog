module.exports = function deddExit(mod){
	mod.command.add('relog', (subcommand) => {
		if(!subcommand){
			mod.send('C_RETURN_TO_LOBBY', 1, {})
		}
	})
}
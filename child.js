var child = require('child_process');

exports.exec = function(url, filename, options){
	var key,
		stdin = ['phantomjs'];

	stdin.push(options.args);
	stdin.push(__dirname+'/render.js');
	stdin.push("'"+url+"'");
	stdin.push("'"+filename+"'");
	stdin.push("'"+JSON.stringify(options)+"'");

	return child.exec(stdin.join(' '));
};

exports.supports = function(cb, cmd) {
	var stream = child.exec('which '+(cmd || 'phantomjs'), function(err, stdo, stde){
		return cb(!!stdo.toString());
	});
};

var alwaysAncestorSelector = {
	'*': false,
	':root': true,
	'html': false
};

// This means it will be always be an ancestor of any other selector
var isPieceIsAlwaysAncestorSelector = function(piece) {
	return !!alwaysAncestorSelector[piece];
};

module.exports = isPieceIsAlwaysAncestorSelector;

const { max, min } = Math;

module.exports = function clamp(x, high, low) {
	return max(min(x, high), low);
}
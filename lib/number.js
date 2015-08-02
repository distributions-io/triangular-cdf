'use strict';

// FUNCTIONS //

var pow = Math.pow;


// CDF //

/**
* FUNCTION: cdf( x, a, b, c )
*	Evaluates the cumulative distribution function (CDF) for a Triangular distribution with lower limit `a` and upper limit `b` and mode `c` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} a - lower limit
* @param {Number} b - upper limit
* @param {Number} c - mode
* @returns {Number} evaluated CDF
*/
function cdf( x, a, b, c ) {
	var denom1 = ( b - a ) * ( c - a ),
		denom2 = ( b - a ) * ( b - c );

	if ( x !== x ) {
		return NaN;
	}
	if ( x <= a ) {
		return 0;
	}
	// Case: x > a
	if ( x <= c ) {
		return pow( x - a, 2 ) / denom1;
	}
	// Case: x > c
	if ( x < b ) {
		return 1 - pow( b - x, 2 ) / denom2;
	}
	// Case x >= b
	return 1;
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;

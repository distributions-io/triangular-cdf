'use strict';

// FUNCTIONS //

var pow = Math.pow;


// PARTIAL //

/**
* FUNCTION: partial( a, b, c )
*	Partially applies lower limit `a` and upper limit `b` and mode `c` and returns a function for evaluating the cumulative distribution function (CDF) for a Triangular distribution.
*
* @param {Number} a - lower limit
* @param {Number} b - upper limit
* @param {Number} c - mode
* @returns {Function} CDF
*/
function partial( a, b, c ) {
	var denom1 = ( b - a ) * ( c - a ),
		denom2 = ( b - a ) * ( b - c );
	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Triangular distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
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
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;

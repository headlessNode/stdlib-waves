// MODULES //

import iterSineWave from '@stdlib/simulate-iter-sine-wave';


// MAIN //

/**
* Generates a sine wave from the given data.
*
* @param {Object} data - The data to generate the wave from.
* @returns {Object} - The sine wave data.
*/
function generateWave ( data ) {
	let iterator;
	let xValues;
	let yValues;
	let v;
	let i;

	iterator = iterSineWave({
		'amplitude': parseFloat( data.amplitude ),
		'period': parseFloat( data.period ),
		'iter': parseFloat( data.iterations )
	});

	xValues = [];
	yValues = [];
	i = 0;
	for ( v of iterator ) {
		xValues.push( i / data.samplingRate );
		yValues.push( v );
		i++;
	}
	return { x: xValues, y: yValues };
}


// EXPORTS //

export default generateWave;

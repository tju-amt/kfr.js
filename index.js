'use strict';

const cModule = require('./src/module');

const jsModule = {
	Math: {
		Hyperbolic: {
			cosh: {},
			coshsinh: {},
			coth: {},
			sinh: {},
			sinhcosh: {},
			tanh: {}
		},
		Complex: {
			abs: {},
			arg: {},
			artesian: {},
			conj: {},
			cos: {},
			cosh: {},
			dupimag: {},
			dupreal: {},
			exp: {},
			exp10: {},
			exp2: {},
			log: {},
			log10: {},
			log2: {},
			negimag: {},
			negreal: {},
			sin: {},
			sinh: {},
			sqr: {},
			sqrt: {},
			swapreim: {},
			imag: {},
			isreal: {},
			makeComplex: {},
			polar: {},
			real: {}
		},
		Conversion: {
			convert: {},
			deinterleave: {},
			interleave: {},

		},
		Constants: {
			degtorad: {},
			e: Math.E,
			infinity: Infinity,
			neginfinity: -Infinity,
			pi: Math.PI
		}
	},
	DSP: {
		Filter: {},
		BiquadFilter: {},
		FirFilter: {},
		Window: {},

	},
	DFT: {

	},
	IO: {

	}
};
